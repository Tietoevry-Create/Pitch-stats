import Link from "next/link";
const CustomLink = ({ to, label, classes, ...rest }) => (
    <>
      <Link href="/"><a className={classes}>{label}</a></Link>
    </>
  );
  
export default CustomLink;
  