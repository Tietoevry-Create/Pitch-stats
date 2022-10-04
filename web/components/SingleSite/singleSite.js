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
    <tr className="border-violet hover:bg-peach10 border-2">
      {[index + 1, site.title, site.category.title, carbon, accessibility, performance, seo].map(
        (val, keyIndex) => (
          <td id={keyIndex} className="text-center">
            <CustomLink to={site}>
              <a> {val} </a>
            </CustomLink>
          </td>
        )
      )}
    </tr>
  );
};

export default SingleSite;
