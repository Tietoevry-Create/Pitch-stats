import PropTypes from 'prop-types';
import Link from "next/link";
const CustomLink = ({ to, label, classes, ...rest }) => (
    <>
      <Link href="/"><a className={classes}>{label}</a></Link>
    </>
  );
  
 
CustomLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  classes: PropTypes.string }; 

  export default CustomLink;

  