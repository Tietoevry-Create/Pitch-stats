import PropTypes from 'prop-types';
import Link from "next/link";
const CustomLink = ({ to,   children, ...rest }) => (
    <>
      <Link href="/">{children}</Link>
    </>
  );
  
 
CustomLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  classes: PropTypes.string }; 

  export default CustomLink;

  
  