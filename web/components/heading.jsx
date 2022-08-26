import PropTypes from 'prop-types';

const Heading = ({ title, ...rest }) => (
    <div className="flex bg-tepurple ">
       <heading className="container mx-auto px-4 md:px-20 py-3">
        <div>
          <h1 className="px-3 text-white font-bold">{title}</h1>
        </div>
       </heading>
    </div>
  );


  Heading.propTypes = {
    title: PropTypes.string.isRequired  };
  export default Heading;



