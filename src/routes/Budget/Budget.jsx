import { useState } from 'react';

import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

export function Budget() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    optional: '',
    description: '',
    poolSize: '',
    yardSize: '',
    roofSize: '',
    wallSize: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Agendamento realizado com sucesso!');
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Endereço</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Serviço</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o serviço</option>
              <option value="Piscina">Manutenção de Piscina</option>
              <option value="Jardinagem">Jardinagem</option>
              <option value="Telhado">Reparos em Telhado</option>
              <option value="Muro">Reparos em Muro</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Descrição</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Adicione informações adicionais sobre o serviço"
            ></textarea>
          </div>

          {formData.service === 'Piscina' && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho da Piscina (m²)
              </label>
              <input
                type="number"
                name="poolSize"
                value={formData.poolSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {formData.service === 'Jardinagem' && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho do Quintal (m²)
              </label>
              <input
                type="number"
                name="yardSize"
                value={formData.yardSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {formData.service === 'Telhado' && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho do Telhado (m²)
              </label>
              <input
                type="number"
                name="roofSize"
                value={formData.roofSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {formData.service === 'Muro' && (
            <div>
              <label className="block text-gray-700 font-medium">
                Tamanho do Muro (m²)
              </label>
              <input
                type="number"
                name="wallSize"
                value={formData.wallSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>

      <section>
        <Footer />
      </section>

      <section>
        <Footer />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

// const [formData, setFormData] = useState({
//   services: {
//     piscinas: false,
//     jardinagem: false,
//     telhados: false,
//   },
//   date: '',
//   time: '',
// });

// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;
//   if (type === 'checkbox') {
//     setFormData((prev) => ({
//       ...prev,
//       services: {
//         ...prev.services,
//         [name]: checked,
//       },
//     }));
//   } else {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('Form data:', formData);
// return (
//   <>
//     <Navbar />
//     <form
//       className="p-6 bg-white shadow-md rounded-md max-w-lg mx-auto mt-10"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-xl font-bold text-gray-700 mb-4">
//         Solicitar Orçamento
//       </h2>

//       {/* Checkbox options */}
//       <fieldset className="mb-4">
//         <legend className="text-gray-600">
//           Selecione os serviços desejados:
//         </legend>
//         <label className="block mt-2">
//           <input
//             type="checkbox"
//             name="piscinas"
//             checked={formData.services.piscinas}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Limpeza e manutenção de piscinas
//         </label>
//         <label className="block mt-2">
//           <input
//             type="checkbox"
//             name="jardinagem"
//             checked={formData.services.jardinagem}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Jardinagem e paisagismo
//         </label>
//         <label className="block mt-2">
//           <input
//             type="checkbox"
//             name="telhados"
//             checked={formData.services.telhados}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Limpeza de telhados e placas solares
//         </label>
//       </fieldset>

//       {/* Date and time */}
//       <div className="mb-4">
//         <label className="block text-gray-600 mb-2" htmlFor="date">
//           Data:
//         </label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="border-gray-300 border rounded-md p-2 w-full"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-600 mb-2" htmlFor="time">
//           Horário:
//         </label>
//         <input
//           type="time"
//           id="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           className="border-gray-300 border rounded-md p-2 w-full"
//           required
//         />
//       </div>

//       {/* Submit button */}
//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//       >
//         Enviar Solicitação
//       </button>
//     </form>
//   </>
// );
