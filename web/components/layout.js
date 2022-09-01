import Footer from './footer.js';
import Navbar from './navbar';
const Layout = ({ footerData, children, ...rest }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer footerData={footerData || {}} />
  </>
);

export default Layout;
