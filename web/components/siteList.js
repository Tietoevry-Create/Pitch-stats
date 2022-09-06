import CustomLink from './customLink';
import React from 'react';
import SingleSite from './singleSite';

const SiteList = ({ siteList, ...rest }) => (
  <div className="container mx-auto px-4 md:px-24 py-10 text-xl">
    <section>
      <h2 className=" pb-1 mb-14 font-bold text-3xl md:text-4xl border-b-4 border-black">Sider</h2>
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
      <ul>
        {siteList &&
          siteList.length > 0 &&
          siteList.map((site, index) => <SingleSite index={index} site={site} key={site._id} />)}
      </ul>
    </section>
  </div>
);

export default SiteList;
