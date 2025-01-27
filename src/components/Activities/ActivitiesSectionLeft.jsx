import PropTypes from 'prop-types';

export function ActivitiesSectionLeft({
  subtitle,
  description,
  imageClasses,
  link,
}) {
  return (
    <>
      <div className="flex flex-row  items-center justify-center gap-10 mb-20">
        <div>
          <a href={link}>
            <div
              className={`w-[540px] h-[300px] rounded-3xl bg-auto bg-no-repeat bg-right ${imageClasses}`}
            ></div>
          </a>
        </div>

        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-center font-robotomono text-greendark mb-4">
            {subtitle}
          </h2>
          <p className="text-greenhardfont-robotosans text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export function ActivitiesSectionRight({
  subtitle,
  description,
  imageClasses,
  link,
}) {
  return (
    <>
      <div className="flex flex-row items-center justify-center text-right gap-10 mb-20">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-center font-robotomono text-greendark mb-4">
            {subtitle}
          </h2>
          <p className="text-greenhard font-robotosans text-center leading-relaxed">
            {description}
          </p>
        </div>
        <div>
          <a href={link}>
            <div
              className={`w-[540px] h-[300px] rounded-3xl bg-auto bg-no-repeat bg-right ${imageClasses}`}
            ></div>
          </a>
        </div>
      </div>
    </>
  );
}

ActivitiesSectionRight.propTypes,
  (ActivitiesSectionLeft.propTypes = {
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageClasses: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  });
