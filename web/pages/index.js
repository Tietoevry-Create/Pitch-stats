import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { BlockContent } from 'components/BlockContent';
import { SiteList } from 'components/SiteList';
import { CategoryList } from 'components/CategoryList';
import { MetaData } from 'components/MetaData';

import DataManager from 'model/LocalDataManager';

export default function Home({
  headerPaths = [],
  footerPaths = [],
  siteData = {},
  pageData = {},
  siteList = [],
  preview = false
}) {
  const { baseURL, sitename, description, type, icon } = siteData;
  const { slug, title, content, categories } = pageData;

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

        {content.map((item, index) => (
          <BlockContent text={item.text} image={item.svg} key={index} />
        ))}

        <CategoryList categoryList={categories} />

        <SiteList siteList={siteList} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const infra = new DataManager();
  const footerPaths = infra.footerPaths;
  const siteData = infra.siteData;
  let pageData = infra.frontpageContent;

  const headerPaths = infra.getHeaderPaths();
  headerPaths.filter((item) => (item.slug = infra.generateProdURL('', item.slug)));

  const categories = infra.categoryContent.categories;
  categories.filter((item) => (item.slug = infra.generateProdURL('/kategori', item.slug)));
  pageData.categories = categories;

  const siteList = infra.siteContent.sites;
  siteList.filter((item) => (item.slug = infra.generateProdURL('/side', item.slug)));

  return {
    props: {
      headerPaths: headerPaths,
      footerPaths: footerPaths,
      siteData: siteData,
      pageData: pageData,
      siteList: siteList
    },
    revalidate: 50
  };
}
