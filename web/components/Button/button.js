import PropTypes from 'prop-types';
const Button = ({ children, classes, onClick, ...rest }) => (
  <button
    onClick={onClick}
    className={'rounded-lg px-16 py-2  text-base font-bold box-content ' + classes}>
    {children}
  </button>
);

Button.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
