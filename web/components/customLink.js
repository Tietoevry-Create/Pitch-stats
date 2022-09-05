import PropTypes from 'prop-types';
import Link from 'next/link';
const CustomLink = ({ to, children, ...rest }) => {
  // checks references for type and routes to the corresponding folder in /pages/ with slug appended
  const toProductionURL = (document) => {
    switch (document._type) {
      case 'frontPage':
        return '/';
      case 'category':
        return '/category/' + document.slug.current;
      case 'sitePage':
        return '/' + document.slug.current;
      case 'site':
        return '/site/' + document.slug.current;

      default:
        return '/404';
    }
  };
  // probably a better way to check if something is a link or just a plain reference
  const linkResolver = (to) => {
    if (to?.href) {
      return to.href;
    } else if (to?.linkReference) {
      return toProductionURL(to.linkReference);
    } else if (to?.hasOwnProperty('slug')) {
      return toProductionURL(to);
    } else {
      return '/';
    }
  };

  return (
    <>
      <Link href={linkResolver(to)}>{children}</Link>
    </>
  );
};

CustomLink.propTypes = {
  to: PropTypes.object
};

export default CustomLink;
