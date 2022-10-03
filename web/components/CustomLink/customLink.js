import PropTypes from 'prop-types';
import Link from 'next/link';
import linkResolver from 'util/linkResolver';

const CustomLink = ({ to, children, ...rest }) => {
  {
    /* this component accepts either a document by looking for a slug in the slug key in an object, 
    or it can accept a link object from Sanity */
  }
  return (
    <>
      <Link href={linkResolver(to)}>{children}</Link>
    </>
  );
};

CustomLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default CustomLink;
