import { Layout } from 'components/Layout';
import { BlockContent } from 'components/BlockContent';
import { Heading } from 'components/Heading';
import { CustomRadarChart } from 'components/RadarChart';
import { Counter } from 'components/Counter';
import { MetaData } from 'components/MetaData';
import DataManager from 'util/DataManager';

export default function Site({
  headerPaths = [],
  footerPaths = [],
  siteData = {},
  pageData = {},
  preview = false
}) {
  const { baseURL, sitename, description, type, icon } = siteData;
  const { slug, title, url } = pageData;

  return (
    <>
      <MetaData
        title={title}
        sitename={sitename}
        description={description}
        url={baseURL}
        type={type}
        icon={icon}
      />

      <Layout headerPaths={headerPaths} footerPaths={footerPaths}>
        <Heading title={title} webSiteUrl={url || ''} />

        <div className="flex flex-col container mx-auto py-4 md:py-10 ">
          <div className="px-4 md:px-40 py-4 md:py-10">
            <h2 className="py-4">Karbonresultat</h2>
            <p className="text-left text-xl py-4">
              Denne analysen bruker Website Carbons tjeneste til å kalkulere CO₂-utslippet av{' '}
              <span className="text-heroblue">{baseURL}</span>.
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
    </>
  );
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const infra = new DataManager();

  const headerPaths = infra.getHeaderPaths();
  headerPaths.filter((item) => (item.slug = infra.generateProdURL('', item.slug)));

  const footerPaths = infra.footerPaths;
  const siteData = infra.siteData;

  const pageData = infra.getPageContent(slug);

  return {
    props: {
      headerPaths: headerPaths,
      footerPaths: footerPaths,
      siteData: siteData,
      pageData: pageData
    },
    revalidate: 50
  };
}
export async function getStaticPaths() {
  const infra = new DataManager();
  const paths = infra.siteContent.sites.map((item) => item.slug);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
