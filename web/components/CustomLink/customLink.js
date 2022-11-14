import PropTypes from 'prop-types';
import Link from 'next/link';

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <>
      <Link href={to}>{children}</Link>
    </>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default CustomLink;
