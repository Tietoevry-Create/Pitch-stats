import { MetaData } from 'components/MetaData';
import { Layout } from 'components/Layout';
import { SiteList } from 'components/SiteList';
import { Heading } from 'components/Heading';

import DataManager from 'util/DataManager';

export default function Category({
  headerPaths = [],
  footerPaths = [],
  siteData = {},
  pageData = {},
  siteList = [],
  preview = false
}) {
  const { baseURL, sitename, description, type, icon } = siteData;
  const { slug, title, text, svg } = pageData;

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

        {description && description.length > 0 && (
          <div className="container mx-auto px-4 md:px-24 py-4 md:py-10 text-2xl">{text}</div>
        )}

        {siteList && siteList.length > 0 && <SiteList siteList={siteList} />}
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const infra = new DataManager();
  const headerPaths = infra
    .getHeaderPaths()
    .filter((item) => (item.slug = infra.generateProdURL('', item.slug)));
  const footerPaths = infra.getFooterPaths();
  const siteData = infra.getSiteData();
  const pageData = infra.getPageContent(slug);

  return {
    props: {
      headerPaths: headerPaths,
      footerPaths: footerPaths,
      siteData: siteData,
      pageData: pageData,
      siteList: []
    },
    revalidate: 50
  };
}
export async function getStaticPaths() {
  const infra = new DataManager();
  const paths = infra.getCategoryContent().categories.map((item) => item.slug);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}
