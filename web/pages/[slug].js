import { BlockContent } from 'components/BlockContent';
import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { MetaData } from 'components/MetaData';

import DataManager from 'model/LocalDataManager';

export default function PageSite({
  headerPaths = [],
  footerPaths = [],
  siteData = {},
  pageData = {},
  preview = false
}) {
  const { baseURL, sitename, description, type, icon } = siteData;
  const { slug, title, content } = pageData;

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
        <Heading title={title} />

        <div className="test container mx-auto px-4 md:px-24 py-4 md:py-10 text-2xl">
          {content.map((item, index) => (
            <BlockContent text={item.text} image={item.svg} key={index} />
          ))}
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
  const paths = infra.getHeaderPaths().map((item) => item.slug);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}
