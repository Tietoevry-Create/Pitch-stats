import Link from "next/link";
const CustomLink = ({ to, label, ...rest }) => (
    <>
      <Link to="/"><a className="text-white">{label}</a></Link>
    </>
  );
  
  export default CustomLink;
  