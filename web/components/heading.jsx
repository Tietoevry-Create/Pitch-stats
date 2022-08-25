const Heading = ({ title, ...rest }) => (
    <div className="bg-tepurple ">
       <heading className="container mx-auto px-10 py-3 md:px-52">
        <h1 className="text-white font-bold">{title}</h1>
       </heading>
    </div>
  );
  
  export default Heading;