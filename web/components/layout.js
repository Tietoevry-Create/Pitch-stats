import {Footer} from './Footer';
import Navbar from './navbar';
const Layout = ({ footerData, menuData, children, ...rest }) => (
  <>
    <Navbar menuData={menuData} />
    <main>{children}</main>
    <Footer footerData={footerData || {}} />
  </>
);

export default Layout;
