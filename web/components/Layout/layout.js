import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
const Layout = ({ headerPaths, footerPaths, children, ...rest }) => (
  <>
    <Navbar headerPaths={headerPaths} />
    <main>{children}</main>
    <Footer footerPaths={footerPaths} />
  </>
);

export default Layout;
