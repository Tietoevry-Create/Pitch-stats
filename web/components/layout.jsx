import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({children, ...rest}) => (
    <>
      <Navbar />
    <div className="container mx-auto">{children}</div>
    <Footer />
    </>
  );

  export default Layout;
