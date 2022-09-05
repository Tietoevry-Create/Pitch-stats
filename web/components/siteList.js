import CustomLink from './customLink';
import React from 'react';

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
          <span className="invisible md:visible">Acc</span>
          <span className="invisible md:visible">Perf</span>
          <span className="invisible md:visible">SEO</span>
        </li>
      </ul>
      <ul>
        {siteList &&
          siteList.length > 0 &&
          siteList.map((site, index) => (
            <li
              key={site._id}
              className="p-2 border-solid border-tepurple border-2 rounded hover:bg-tepurple/20 border-t-0 first:border-t-2">
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
          ))}
      </ul>
    </section>
  </div>
);

export default SiteList;
