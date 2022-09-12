import React, { useRef, useState } from 'react';
import SingleSite from './singleSite';

export default function SiteList({ refs, siteList, ...rest }) {
  const showMoreRef = useRef();
  const [size, setSize] = useState(10);
  const [showLoadMore, setShowLoadMore] = useState(true);

  function increaseSiteList() {
    setSize(size + 10);
    setShowLoadMore(showMoreRef.current.children.length >= size);
  }

  return (
    <div ref={refs} className={'container mx-auto px-4 md:px-24 py-24 text-xl'}>
      <section>
        <h2 className="pb-1 mb-14 font-bold text-3xl md:text-4xl border-b-4 border-black">Sider</h2>
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
        <div
          className={
            `${!showLoadMore ? 'hidden' : ''}` +
            ' container flex flex-wrap items-center justify-center mx-auto mt-5 w-full'
          }>
          <button
            onClick={() => increaseSiteList()}
            className={
              'px-3 py-2 text-black font-bold rounded-lg border-2 border-yellow-50 hover:border-tepurple hover:bg-tepurple/20'
            }>
            Load More
          </button>
        </div>
      </section>
    </div>
  );
}
