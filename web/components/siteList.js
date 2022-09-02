import CustomLink from './customLink';
import React from 'react';

const SiteList = ({ siteList, ...rest }) => (
  <div className="container mx-auto px-4 md:px-24 py-10 text-xl">
    <section>
      <h2 className=" pb-1 mb-14 font-bold border-b-4 border-black">Sider</h2>
      <ul>
        <li className="grid grid-cols-6 p-2 rounded font-semibold">
          <span>Navn</span>
          <span>Kategori</span>
          <span>Utslipp</span>
          <span>Acc</span>
          <span>Perf</span>
          <span>SEO</span>
        </li>
      </ul>
      <ul>
        {siteList &&
          siteList.length > 0 &&
          siteList.map((site) => (
            <li
              key={site._id}
              className="p-2 border-solid border-tepurple border-2 rounded hover:bg-tepurple/20 border-t-0 first:border-t-2">
              <CustomLink>
                <a className="grid grid-cols-6">
                  <span>{site.title}</span>
                  <span>{site.category.title}</span>
                  <span>0.39 CO₂</span>
                  <span>90%</span>
                  <span>60%</span>
                  <span>80%</span>
                </a>
              </CustomLink>
            </li>
          ))}
      </ul>
    </section>
  </div>
);

export default SiteList;
