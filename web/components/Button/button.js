import PropTypes from 'prop-types';
const Button = ({ children, classes, onClick, ...rest }) => (
  <button onClick={onClick} className={classes}>
    {children}
  </button>
);

Button.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropType.func.isRequired
};

export default Button;
