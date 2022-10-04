import React, { useRef, useState, useEffect } from 'react';
import { SingleSite } from '../SingleSite';
import { Button } from '../Button';
import PropTypes from 'prop-types';

const SiteList = ({ siteList, ...rest }) => {
  const siteListRef = useRef();
  const [siteListVisibility, setSiteListVisibility] = useState(false);
  const [animatedOnce, setAnimatedOnce] = useState(false);

  useEffect(() => {
    if (!animatedOnce) {
      const siteListObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setSiteListVisibility(entry.isIntersecting);
      });
      siteListObserver.observe(siteListRef.current);
      if (siteListVisibility) {
        setAnimatedOnce(true);
      }
      return () => {
        siteListObserver.disconnect();
      };
    }
  }, [siteListVisibility]);

  const showMoreRef = useRef();
  const [size, setSize] = useState(10);
  const [showLoadMore, setShowLoadMore] = useState(null);
  useEffect(() => {
    setShowLoadMore(showMoreRef.current.children.length >= size);
  }, [size]);

  return (
    <div
      ref={siteListRef}
      className={`container mx-auto px-4 md:px-24 py-24 text-xl ${
        siteListVisibility ? 'animate-fadeIn' : ''
      }`}>
      <section>
        <table className="mx-auto w-full">
          <thead>
            <tr>
              <th colSpan={100}>
                <h2 className="pb-1 mb-14 font-bold text-3xl md:text-4xl border-b-4 border-black">
                  Sider
                </h2>
              </th>
            </tr>
          </thead>

          <tbody ref={showMoreRef}>
            <tr className="p-2 border-solid border-violet border-2 rounded hover:bg-peach10 border-t-0 first:border-t-2">
              {['Nr', 'Navn', 'Kategori', 'Utslipp', 'Accesibility', 'Performance', 'SEO'].map(
                (hValue, keyIndex) => (
                  <th id={keyIndex}>{hValue}</th>
                )
              )}
            </tr>

            {siteList &&
              siteList.length > 0 &&
              siteList
                .slice(0, size)
                .map((site, index) => <SingleSite index={index} site={site} key={site._id} />)}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={100}>
                <div
                  className={
                    `${!showLoadMore ? 'hidden' : ''}` +
                    ' container flex flex-wrap items-center justify-center mx-auto mt-5 w-full'
                  }>
                  <Button
                    onClick={() => setSize(size + 10)}
                    classes="bg-peach hover:bg-peach40 border-transparent border-2 hover:border-heroblue hover:border-solid">
                    Last inn flere sider
                  </Button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>

        {/*
        <ul>
          <li className="grid md:grid-desktop grid-mobile p-2 rounded font-semibold md:gap-4 gap-2">
            <span className="overflow-hidden text-ellipsis">Nr</span>
            <span className="overflow-hidden text-ellipsis">Navn</span>
            <span className="overflow-hidden text-ellipsis">Kategori</span>
            <span className="overflow-hidden text-ellipsis">Utslipp</span>
            <span className="invisible md:visible">Accesibility</span>
            <span className="invisible md:visible">Performance</span>
            <span className="invisible md:visible">SEO</span>
          </li>
        </ul>

                <ul ref={showMoreRef}>
          {siteList &&
            siteList.length > 0 &&
            siteList
              .slice(0, size)
              .map((site, index) => <SingleSite index={index} site={site} key={site._id} />)}
        </ul>
              */}
      </section>
    </div>
  );
};
SiteList.propTypes = {
  siteList: PropTypes.array.isRequired
};

export default SiteList;
