import CustomLink from './customLink';
const SingleSite = ({ site, index, ...rest }) => (
  <li className="p-2 border-solid border-tepurple border-2 rounded hover:bg-tepurple/20 border-t-0 first:border-t-2">
    <CustomLink to={site}>
      <a className="grid md:grid-desktop grid-mobile md:gap-4 gap-2 whitespace-nowrap">
        <span className=" w-5 justify-self-center">{index + 1}.</span>
        <span className=" overflow-hidden text-ellipsis">{site.title}</span>
        <span className=" overflow-hidden text-ellipsis">{site.category.title}</span>
        <span className=" overflow-hidden text-ellipsis">0.39 CO₂</span>
        <span className=" overflow-hidden text-ellipsis invisible md:visible">90%</span>
        <span className=" overflow-hidden text-ellipsis invisible md:visible">60%</span>
        <span className=" overflow-hidden text-ellipsis invisible md:visible">80%</span>
      </a>
    </CustomLink>
  </li>
);

export default SingleSite;
