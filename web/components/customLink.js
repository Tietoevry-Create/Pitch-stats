import PropTypes from 'prop-types';
import Link from 'next/link';
const CustomLink = ({ to, children, ...rest }) => {
  return (
    <>
      <Link href="/">{children}</Link>
    </>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string
};

export default CustomLink;
