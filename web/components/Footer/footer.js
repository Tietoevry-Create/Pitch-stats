import { CustomLink } from '../CustomLink';
const Footer = ({ footerPaths }) => {
  const footerLinks = footerPaths;
  return (
    <footer aria-labelledby="footerHeading" className="bg-heroblue bottom-0 w-full">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container grid grid-rows-5 grid-flow-col gap-4 py-10 px-4 md:px-20 text-peach">
        {footerLinks &&
          footerLinks.length > 0 &&
          footerLinks.map((footerLink, index) => (
            <CustomLink to={footerLink.slug} key={index}>
              <a className="px-3 hover:underline text-lg">{footerLink.title}</a>
            </CustomLink>
          ))}
        <hr className="mx-3 mt-7 h-0.5 bg-peach w-full" />
        <p className="px-3">©Tietoevry 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
