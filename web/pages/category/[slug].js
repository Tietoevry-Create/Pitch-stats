import Head from 'next/head';
import { groq } from 'next-sanity';
import MetaData from 'components/metaData';
import client from 'util/client.js';
import Layout from 'components/layout';
import SiteList from 'components/siteList';
import { Heading } from 'components/Heading';
import { footerQuery, menuQuery } from 'util/queries';

export default function Category({ pageData = {}, footerData = {}, menuData, preview = false }) {
  const { title, lede, siteList = [] } = pageData;

  return (
    <>
      <MetaData document={pageData} />

      <Layout footerData={footerData} menuData={menuData}>
        <Heading title={title} />

        {lede && lede.length > 0 && (
          <div className="container mx-auto px-4 md:px-24 py-4 md:py-10 text-2xl">{lede}</div>
        )}

        {siteList && siteList.length > 0 && <SiteList siteList={siteList || []} />}
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const siteQuery = `{"pageData":*[_type == "category" && slug.current == $slug][0]{title, lede, "siteList":*[_type == "site" && references(^._id)]{title, slug, _type, _id,"category": categoryReference->{title} }  }, ${footerQuery}, ${menuQuery} }`;
  const data = await client.fetch(siteQuery, { slug });
  const { pageData = {}, footerData = {}, menuData = {} } = data;
  return {
    props: {
      pageData: pageData,
      footerData: footerData,
      menuData: menuData
    },
    revalidate: 50
  };
}
export async function getStaticPaths() {
  const allSitePathsQuery = groq`*[_type == "category" && defined(slug.current)][].slug.current`;
  const paths = await client.fetch(allSitePathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
