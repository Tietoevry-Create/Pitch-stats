import { CustomLink } from 'components/CustomLink';
const Footer = ({ footerData = {} }) => {
  const { footerLinks } = footerData;
  return (
    <footer aria-labelledby="footerHeading" className="bg-heroblue bottom-0 w-full">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container grid grid-rows-5 grid-flow-col gap-4 py-10 px-4 md:px-20 text-peach">
        {footerLinks &&
          footerLinks.length > 0 &&
          footerLinks.map((footerLink) => (
            <CustomLink to={footerLink} key={footerLink._key}>
              <a className="px-3 hover:underline text-lg">{footerLink.label}</a>
            </CustomLink>
          ))}
        <hr className="mx-3 mt-7 h-0.5 bg-peach w-full" />
        <p className="px-3">©Tietoevry 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
