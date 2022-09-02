import Head from 'next/head';
import { groq } from 'next-sanity';
import BlockContent from 'components/blockContent';
import client from 'util/client.js';
import Layout from 'components/layout';
import { footerQuery, menuQuery, blockContentQuery } from 'util/queries';

import Heading from 'components/heading';

export default function PageSite({ pageData = {}, footerData = {}, menuData, preview = false }) {
  const { title, lede, blockContent = [] } = pageData;
  const metaTitle = `Statistikk for ${title}`;
  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footerData={footerData} menuData={menuData}>
        <Heading title={title} />

        <div className="container mx-auto px-4 md:px-24 py-4 md:py-10 text-xl">
          <BlockContent blockContent={blockContent || []} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const siteQuery = `{"pageData":*[_type == "sitePage" && slug.current == $slug][0]{title, ${blockContentQuery},  ...}, ${footerQuery}, ${menuQuery} }`;
  const data = await client.fetch(siteQuery, { slug });
  const { pageData = {}, footerData = {}, menuData = {} } = data;
  return {
    props: {
      pageData: pageData,
      footerData: footerData,
      menuData: menuData
    },
    revalidate: 200
  };
}
export async function getStaticPaths() {
  const allSitePathsQuery = groq`*[_type == "sitePage" && defined(slug.current)][].slug.current`;
  const paths = await client.fetch(allSitePathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
