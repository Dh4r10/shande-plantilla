import PropTypes from 'prop-types';

const ButtonAuth = (props) => {
  const { title } = props;

  return (
    <div>
      <button
        type="submit"
        className="flex rounded-[3px] w-full justify-center bg-[#8db415] px-3 h-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#9dc817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonAuth;

ButtonAuth.propTypes = {
  title: PropTypes.string.isRequired,
};
