import PropTypes from 'prop-types';
const Button = ({ children, classes, ...rest }) => <button className={classes}>{children}</button>;

CustomLink.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Button;
