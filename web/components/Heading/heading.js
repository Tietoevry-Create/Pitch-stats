import PropTypes from 'prop-types';
import Link from 'next/link';
const Heading = ({ title, url, ...rest }) => (
  <div className="flex bg-heroblue mb-12 ">
    <header className="container mx-auto px-4 md:px-20 py-6 md:py-10">
      <div>
        <h1 className="px-3 text-white text-6xl font-bold">{title}</h1>
      </div>
      {url && (
        <div className="py-4 px-3">
          <Link href={url}>
            <a className="text-white font-bold hover:underline text-lg">URL: {url}</a>
          </Link>
        </div>
      )}
    </header>
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};
export default Heading;
