// import PropTypes from 'prop-types';

// export function ActivitiesSectionLeft({
//   subtitle,
//   description,
//   imageClasses,
//   link,
// }) {
//   return (
//     <>
//       <div className="flex flex-row  items-center justify-center gap-10 mb-20">
//         <div>
//           <a href={link}>
//             <div
//               className={` rounded-3xl bg-auto bg-no-repeat bg-right ${imageClasses}`}
//             ></div>
//           </a>
//         </div>

//         <div className="max-w-lg">
//           <h2 className="text-3xl font-bold text-center font-robotomono text-greendark mb-4">
//             {subtitle}
//           </h2>
//           <p className="text-greenhardfont-robotosans text-center leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export function ActivitiesSectionRight({
//   subtitle,
//   description,
//   imageClasses,
//   link,
// }) {
//   return (
//     <>
//       <div className="flex flex-row items-center justify-center text-right gap-10 mb-20">
//         <div className="max-w-lg">
//           <h2 className="text-3xl font-bold text-center font-robotomono text-greendark mb-4">
//             {subtitle}
//           </h2>
//           <p className="text-greenhard font-robotosans text-center leading-relaxed">
//             {description}
//           </p>
//         </div>
//         <div>
//           <a href={link}>
//             <div
//               className={`rounded-3xl bg-auto bg-no-repeat bg-right ${imageClasses}`}
//             ></div>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// ActivitiesSectionRight.propTypes,
//   (ActivitiesSectionLeft.propTypes = {
//     subtitle: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     imageClasses: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//   });

// ------------------------------------------------------------------------------

// import PropTypes from 'prop-types';

// export function ActivitiesSectionLeft({
//   subtitle,
//   description,
//   imageClasses,
//   link,
// }) {
//   return (
//     <>
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
//         <div>
//           <a href={link}>
//             <div
//               className={`w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl bg-cover bg-no-repeat bg-center ${imageClasses}`}
//             ></div>
//           </a>
//         </div>

//         <div className="max-w-lg text-center lg:text-left">
//           <h2 className="text-2xl lg:text-3xl font-bold font-robotomono text-greendark mb-4">
//             {subtitle}
//           </h2>
//           <p className="text-greenhard font-robotosans leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export function ActivitiesSectionRight({
//   subtitle,
//   description,
//   imageClasses,
//   link,
// }) {
//   return (
//     <>
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
//         <div className="max-w-lg text-center lg:text-right order-2 lg:order-1">
//           <h2 className="text-2xl lg:text-3xl font-bold font-robotomono text-greendark mb-4">
//             {subtitle}
//           </h2>
//           <p className="text-greenhard font-robotosans leading-relaxed">
//             {description}
//           </p>
//         </div>
//         <div className="order-1 lg:order-2">
//           <a href={link}>
//             <div
//               className={`w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl bg-cover bg-no-repeat bg-center ${imageClasses}`}
//             ></div>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// ActivitiesSectionRight.propTypes,
//   (ActivitiesSectionLeft.propTypes = {
//     subtitle: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     imageClasses: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//   });

//------------------------------------------------------------------------

import PropTypes from 'prop-types';

export function ActivitiesSectionLeft({
  subtitle,
  description,
  imageClasses,
  link,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
        {/* Bloco da imagem (oculto em mobile) */}
        <div className="hidden lg:block">
          <a href={link}>
            <div
              className={`w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl bg-cover bg-no-repeat bg-center ${imageClasses}`}
            ></div>
          </a>
        </div>

        {/* Bloco de informações (link em mobile) */}
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
  imageClasses,
  link,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 lg:mb-20 px-4">
        {/* Bloco de informações (link em mobile) */}
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

        {/* Bloco da imagem (oculto em mobile) */}
        <div className="hidden lg:block order-1 lg:order-2">
          <a href={link}>
            <div
              className={`w-full lg:w-[540px] h-[200px] lg:h-[300px] rounded-3xl bg-cover bg-no-repeat bg-center ${imageClasses}`}
            ></div>
          </a>
        </div>
      </div>
    </>
  );
}

ActivitiesSectionRight.propTypes = {
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClasses: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ActivitiesSectionLeft.propTypes = {
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageClasses: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
