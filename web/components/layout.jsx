import Footer from './footer';
import Navbar from './navbar';
const Layout = ({ children, ...rest }) => (
  <>
		<Navbar />
    <main >{children}</main>
    <Footer />
  </>
);

export default Layout;
