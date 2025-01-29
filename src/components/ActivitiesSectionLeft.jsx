import PropTypes from 'prop-types';

export function ActivitiesSectionLeft({
  subtitle,
  description,
  imageSrc,
  link,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
        <div className="hidden lg:block">
          <a href={link}>
            <img
              src={imageSrc} // Usando a imagem diretamente
              alt={subtitle}
              className="w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl object-cover"
            />
          </a>
        </div>

        <a href={link} className="lg:pointer-events-none">
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold font-robotomono text-greendark mb-4">
              {subtitle}
            </h2>
            <p className="text-greenhard font-robotosans leading-relaxed">
              {description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export function ActivitiesSectionRight({
  subtitle,
  description,
  imageSrc,
  link,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
        <a href={link} className="lg:pointer-events-none">
          <div className="max-w-lg text-center lg:text-right order-2 lg:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold font-robotomono text-greendark mb-4">
              {subtitle}
            </h2>
            <p className="text-greenhard font-robotosans leading-relaxed">
              {description}
            </p>
          </div>
        </a>

        <div className="hidden lg:block order-1 lg:order-2">
          <a href={link}>
            <img
              src={imageSrc} // Usando a imagem diretamente
              alt={subtitle}
              className="w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl object-cover"
            />
          </a>
        </div>
      </div>
    </>
  );
}

ActivitiesSectionRight.propTypes = {
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired, // Alterado para imageSrc
  link: PropTypes.string.isRequired,
};

ActivitiesSectionLeft.propTypes = {
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired, // Alterado para imageSrc
  link: PropTypes.string.isRequired,
};
