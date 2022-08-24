import Footer from './footer';
const Layout = ({ children, ...rest }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
