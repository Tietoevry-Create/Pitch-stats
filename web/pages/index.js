import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import client from 'util/client.js';
import Layout from 'components/layout';
import Heading from 'components/heading';
import BlockContent from 'components/blockContent';
import SiteList from 'components/siteList';
import CategoryList from 'components/categoryList';
import { footerQuery, blockContentQuery, menuQuery } from 'util/queries';
import MetaData from 'components/metaData';

export default function Home({
  menuData = {},
  pageData = {},
  footerData = {},
  siteList = [],
  preview = false
}) {
  const { title, categoryList = [], blockContent } = pageData;

  return (
    <>
      <MetaData document={pageData} />

      <Layout footerData={footerData} menuData={menuData}>
        <Heading title={title} />

        <BlockContent blockContent={blockContent || []} />

        <CategoryList categoryList={categoryList || []} />

        <SiteList siteList={siteList || []} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const query = `{"siteList": *[_type=="site"]{title, slug, _type, _id, "category": categoryReference->{title}}, "pageData": *[_type == 'frontPage' && _id == 'frontPage' && !(_id in path("drafts.**"))][0]{title, ${blockContentQuery}, "categoryList": categoryRefList[]->{_id, _type, title, slug, lede, path, ... }, ...}, ${footerQuery}, ${menuQuery} }`;
  const data = await client.fetch(query);
  const { pageData = {}, footerData = {}, siteList = [], menuData = {} } = data;
  return {
    props: {
      pageData: pageData,
      footerData: footerData,
      menuData: menuData,
      siteList: siteList
    },
    revalidate: 50
  };
}
