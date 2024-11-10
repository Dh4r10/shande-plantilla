import PropTypes from 'prop-types';

const HeaderAuth = (props) => {
  const { titulo, children } = props;

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-4 text-center text-3xl font-medium leading-9 tracking-tight text-slate-100">
        {titulo}
      </h2>
      <div className="text-justify">{children}</div>
    </div>
  );
};

export default HeaderAuth;

HeaderAuth.propTypes = {
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node,
};
