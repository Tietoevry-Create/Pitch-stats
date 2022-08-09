import Footer from "./footer";
const Layout = ({children, ...rest}) => (
    <>
    <div className="container mx-auto">{children}</div>
    <Footer />
    </>
  );
  
  export default Layout;