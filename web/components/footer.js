import CustomLink from './customLink';
const Footer = ({ footerData }) => {
  const { footerLinks = [] } = footerData;

  return (
    <footer className="bg-tepurple bottom-0 w-full">
      <div className="mx-auto container grid grid-rows-5 grid-flow-col gap-4 py-10 px-4 md:px-20 text-pink-100">
        {footerLinks &&
          footerLinks.length > 0 &&
          footerLinks.map((footerLink) => (
            <CustomLink
              key={footerLink._key}
              classes="px-3 color-white hover:underline text-lg"
              label={footerLink.label}
            />
          ))}

        <hr className="mx-3 mt-7 h-0.5 bg-pink-100 w-full" />
        <p className="px-3">©Tietoevry 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
