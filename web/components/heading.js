import PropTypes from 'prop-types';
import CustomLink from './customLink';
const Heading = ({ title, webSiteUrl, ...rest }) => (
  <div className="flex bg-tepurple mb-12 ">
    <heading className="container mx-auto px-4 md:px-20 py-6 md:py-10">
      <div>
        <h1 className="px-3 text-white font-bold">{title}</h1>
      </div>
      {webSiteUrl && (
        <div className="py-4 px-3">
          <CustomLink to={webSiteUrl}>
            <a className="text-white font-bold hover:underline text-lg">URL: {webSiteUrl}</a>
          </CustomLink>
        </div>
      )}
    </heading>
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  webSiteUrl: PropTypes.string
};
export default Heading;
