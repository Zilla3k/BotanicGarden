import PropTypes from 'prop-types';
import { Check } from 'lucide-react';

export function CardServices({ title, checklist }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm w-full">
      <div className="p-6">
        <h2 className="text-xl text-center font-semibold text-greenhard mb-4">
          {title}
        </h2>
        <ul className="grid grid-cols-1 gap-2 text-greendark">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-greenmedium" size={16} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CardServices.propTypes = {
  title: PropTypes.string.isRequired,
  checklist: PropTypes.arrayOf(PropTypes.string).isRequired,
};
