import CustomLink from "./customLink";
const Footer = () => (
  <footer className="bg-tepurple absolute bottom-0 w-full">
  	<div className="mx-auto container grid grid-rows-5 grid-flow-col gap-4 py-10 px-10 md:px-52 text-pink-100">
			<CustomLink classes="px-3 text-white" label={"Om dette prosjektet"}/>
			<CustomLink classes="px-3 color-white" label={"Kildekode"}/>
			<CustomLink classes="px-3 color-white" label={"Tietoevry"}/>
			<hr className="mx-3 mt-7 h-0.5 bg-pink-100 w-full" />
			<p className="px-3">©Tietoevry 2022</p>
		</div>
  </footer>
);

export default Footer;
