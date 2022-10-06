import { CustomLink } from '../CustomLink';
import { useState, useEffect } from 'react';
const SingleSite = ({ site, index, ...rest }) => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // dirty sample code for setting sample data for data to be shown for sites
  const [carbon, setCarbon] = useState(0);
  const [accessibility, setAccessibility] = useState(0);
  const [seo, setSeo] = useState(0);
  const [performance, setPerformance] = useState(0);
  useEffect(() => {
    setCarbon(getRndInteger(4, 95));
    setPerformance(getRndInteger(30, 95));
    setAccessibility(getRndInteger(30, 95));
    setSeo(getRndInteger(30, 95));
  }, []);

  return (
    <tr>
      {[
        index + 1 + '.',
        site.title,
        site.category.title,
        carbon,
        accessibility,
        performance,
        seo
      ].map((val, keyIndex) => (
        <td id={keyIndex} className="text-center p-0 pt-2">
          <div
            className={
              (keyIndex === 0
                ? 'rounded-l border-t-2 border-b-2 border-l-2 '
                : 'rounded-none border-t-2 border-b-2 ') +
              'border-violet h-10 flex items-center justify-center'
            }>
            {val}
          </div>
        </td>
      ))}

      <td className="text-center p-0 pt-2">
        <div className="rounded-r border-t-2 border-b-2 border-r-2 border-violet h-10 flex items-center justify-center">
          <CustomLink to={site}>
            <a className="rounded-full px-2 text-base bg-peach hover:bg-peach40 border-transparent border-2 hover:border-heroblue hover:border-solid">
              {'Se mer'}
            </a>
          </CustomLink>
        </div>
      </td>
    </tr>
  );
};

export default SingleSite;
