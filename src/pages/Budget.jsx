import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Budget() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cep: '',
    address: '',
    residenceNumber: '',
    services: [],
    poolSize: '',
    poolVolume: '',
    poolType: '',
    yardSize: '',
    yardType: '',
    roofSize: '',
    wallSize: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, value] });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== value),
      });
    }
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData({
            ...formData,
            address: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`,
          });
          setErrors({ ...errors, cep: '' });
        } else {
          setErrors({ ...errors, cep: 'CEP não encontrado' });
        }
      } catch {
        setErrors({ ...errors, cep: 'Erro ao buscar CEP' });
      }
    } else {
      setErrors({ ...errors, cep: 'CEP inválido' });
    }
  };

  const generateWhatsAppLink = (data) => {
    const message =
      `Olá, gostaria de agendar um serviço com os seguintes dados:\n\n` +
      `*Nome:* ${data.name}\n` +
      `*Telefone:* ${data.phone}\n` +
      `*CEP:* ${data.cep}\n` +
      `*Endereço:* ${data.address}\n` +
      `*Número da Residência:* ${data.residenceNumber}\n` +
      `*Serviços:* ${data.services.join(', ')}\n` +
      (data.poolSize ? `*Tamanho da Piscina (m²):* ${data.poolSize}\n` : '') +
      (data.poolVolume
        ? `*Litragem da Piscina (litros):* ${data.poolVolume}\n`
        : '') +
      (data.poolType ? `*Tipo de Piscina:* ${data.poolType}\n` : '') +
      (data.yardSize ? `*Tamanho do Quintal (m²):* ${data.yardSize}\n` : '') +
      (data.yardType ? `*Tipo de Jardim:* ${data.yardType}\n` : '') +
      (data.roofSize ? `*Tamanho do Telhado (m²):* ${data.roofSize}\n` : '') +
      (data.wallSize ? `*Tamanho do Muro (m²):* ${data.wallSize}\n` : '') +
      `*Descrição:* ${data.description}\n\n` +
      `Por favor, confirmem o agendamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '555491538000';
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.cep) newErrors.cep = 'CEP é obrigatório';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.residenceNumber)
      newErrors.residenceNumber = 'Número da residência é obrigatório';
    if (formData.services.length === 0)
      newErrors.services = 'Selecione pelo menos um serviço';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Data Submitted:', formData);
      const whatsappLink = generateWhatsAppLink(formData);
      window.open(whatsappLink, '_blank'); // Abre o WhatsApp em uma nova aba
      alert(
        'Agendamento realizado com sucesso! Um ticket foi gerado e enviado para o WhatsApp da empresa.',
      );
    }
  };

  const formatPhone = (value) => {
    value = value.replace(/\D/g, ''); // Remove não numéricos

    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 dígitos
    }

    let formatted = '';
    if (value.length > 0) {
      formatted = `(${value.slice(0, 2)}`;
    }
    if (value.length > 2) {
      formatted += `) ${value.slice(2, 7)}`;
    }
    if (value.length > 7) {
      formatted += `-${value.slice(7, 11)}`;
    }

    return formatted;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formattedPhone });
  };

  const formatCEP = (value) => {
    value = value.replace(/\D/g, ''); // Remove não numéricos

    if (value.length > 8) {
      value = value.slice(0, 8); // Limita a 8 dígitos
    }

    let formatted = '';
    if (value.length > 0) {
      formatted = `${value.slice(0, 5)}`;
    }
    if (value.length > 5) {
      formatted += `-${value.slice(5, 8)}`;
    }

    return formatted;
  };

  const handleChangeCep = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === 'phone' ? formatPhone(value) : formatCEP(value);
    setFormData({ ...formData, [name]: formattedValue });
  };

  return (
    <>
      <Navbar />

      <div className="p-6 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Agendamento de Serviço
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">CEP</label>
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChangeCep}
              onBlur={handleCepBlur}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
            />
            {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Endereço</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Número da Residência
            </label>
            <input
              type="text"
              name="residenceNumber"
              value={formData.residenceNumber}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
            />
            {errors.residenceNumber && (
              <p className="text-red-500 text-sm">{errors.residenceNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Serviços</label>
            <div className="space-y-2">
              {[
                'Manutenção de Piscina',
                'Jardinagem',
                'Limpeza de Telhado',
                'Limpeza de Muro',
              ].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleServiceChange}
                    className="mr-2"
                  />
                  {service}
                </label>
              ))}
            </div>
            {errors.services && (
              <p className="text-red-500 text-sm">{errors.services}</p>
            )}
          </div>

          {formData.services.includes('Manutenção de Piscina') && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Tamanho da Piscina (m²)
                </label>
                <input
                  type="number"
                  name="poolSize"
                  value={formData.poolSize}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Litragem da Piscina (litros)
                </label>
                <input
                  type="number"
                  name="poolVolume"
                  value={formData.poolVolume}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Tipo de Piscina
                </label>
                <select
                  name="poolType"
                  value={formData.poolType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Fibra">Fibra</option>
                  <option value="Vinil">Vinil</option>
                  <option value="Alvenaria">Alvenaria</option>
                </select>
              </div>
            </div>
          )}

          {formData.services.includes('Jardinagem') && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Tamanho do Quintal (m²)
                </label>
                <input
                  type="number"
                  name="yardSize"
                  value={formData.yardSize}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Tipo de Jardim
                </label>
                <select
                  name="yardType"
                  value={formData.yardType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Gramado">Gramado</option>
                  <option value="Flores">Flores</option>
                </select>
              </div>
            </div>
          )}

          {formData.services.includes('Limpeza de Telhado') && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho do Telhado (m²)
              </label>
              <input
                type="number"
                name="roofSize"
                value={formData.roofSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
              />
            </div>
          )}

          {formData.services.includes('Limpeza de Muro') && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho do Muro (m²)
              </label>
              <input
                type="number"
                name="wallSize"
                value={formData.wallSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium">Descrição</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenlight"
              placeholder="Adicione informações adicionais sobre o serviço"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-greenlight text-greenhard py-3 rounded-lg hover:bg-greenmedium transition duration-300"
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
}
