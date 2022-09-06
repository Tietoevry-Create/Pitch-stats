import CustomLink from './customLink';
import { useState, useEffect } from 'react';
const SingleSite = ({ site, index, ...rest }) => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // dirty code for setting sample data for data to be shown for sites
  const [carbon, setCarbon] = useState(0);
  const [accesibility, setAccesibility] = useState(0);
  const [seo, setSeo] = useState(0);
  const [performance, setPerformance] = useState(0);
  useEffect(() => {
    setCarbon(getRndInteger(4, 95));
    setPerformance(getRndInteger(30, 95));
    setAccesibility(getRndInteger(30, 95));
    setSeo(getRndInteger(30, 95));
  }, []);

  return (
    <li className="p-2 border-solid border-tepurple border-2 rounded hover:bg-tepurple/20 border-t-0 first:border-t-2">
      <CustomLink to={site}>
        <a className="grid md:grid-desktop grid-mobile md:gap-4 gap-2 whitespace-nowrap">
          <span className=" w-5 justify-self-center">{index + 1}.</span>
          <span className=" overflow-hidden text-ellipsis">{site.title}</span>
          <span className=" overflow-hidden text-ellipsis">{site.category.title}</span>
          <span className=" overflow-hidden text-ellipsis">0.{carbon} CO₂</span>
          <span className=" overflow-hidden text-ellipsis invisible md:visible">
            {accesibility}%
          </span>
          <span className=" overflow-hidden text-ellipsis invisible md:visible">
            {performance}%
          </span>
          <span className=" overflow-hidden text-ellipsis invisible md:visible">{seo}%</span>
        </a>
      </CustomLink>
    </li>
  );
};

export default SingleSite;
