import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const InputAuth = (props) => {
  const { control, type, name, label, placeholder, children } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-slate-200"
        >
          {label}
        </label>
        {children}
      </div>
      <div className="mt-2">
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`block w-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset rounded-[3px] ${
                  !fieldState.error
                    ? 'ring-gray-300 focus:ring-[#1877F2]'
                    : 'ring-red-500 focus:ring-red-500'
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:outline-none sm:text-[12px] sm:leading-6`}
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default InputAuth;

InputAuth.propTypes = {
  control: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,
};
