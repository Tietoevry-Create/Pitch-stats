import Head from 'next/head';
import { groq } from 'next-sanity';

import client from 'util/client.js';
import Layout from 'components/layout';
import { blockContentQuery, footerQuery, menuQuery } from 'util/queries';
import BlockContent from 'components/blockContent.jsx';
import Heading from 'components/heading';
import CustomRadarChart from 'components/radarChart';
import Counter from 'components/counter';

export default function Site({ pageData = {}, footerData = {}, preview = false }) {
  const { title, webSiteUrl = '', blockContent = [], menuData = [] } = pageData;
  const metaTitle = `Statistikk for ${title}`;
  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footerData={footerData} menuData={menuData}>
        <Heading title={title} webSiteUrl={webSiteUrl || ''} />

        <BlockContent blockContent={blockContent} />
        <div className="flex flex-col container mx-auto py-4 md:py-10 ">
          <div className="px-4 md:px-40 py-4 md:py-10">
            <h2 className="font-bold py-4">Carbon results</h2>
            <p className="text-left text-xl py-4">
              This analysis is using the Website Carbon service to calculate the Co2 emmissions of{' '}
              <span className="text-tepurple">{webSiteUrl}</span>.
            </p>
            <Counter />
          </div>
        </div>
        <div className="flex flex-col container mx-auto py-4 md:py-10 ">
          <div className="px-4 md:px-40 py-4 md:py-10">
            <h2 className="py-4">Lighthouse analysis</h2>
            <p className="text-left text-xl py-4">
              Lighthouse is an open-source, automated tool for improving the performance, quality,
              and correctness of your web apps. When auditing a page, Lighthouse runs a barrage of
              tests against the page, and then generates a report on how well the page did. From
              here you can use the failing tests as indicators on what you can do to improve your
              app.
            </p>
          </div>
          <div className="h-64 md:h-120">
            <CustomRadarChart />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const siteQuery = `{"pageData":*[_type == "site" && slug.current == $slug][0]{title, webSiteUrl, ${blockContentQuery},  ...}, ${footerQuery}, ${menuQuery} }`;
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
  const allSitePathsQuery = groq`*[_type == "site" && defined(slug.current)][].slug.current`;
  const paths = await client.fetch(allSitePathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
