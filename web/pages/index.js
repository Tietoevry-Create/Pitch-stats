import client from 'util/client.js';
import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { BlockContent } from 'components/BlockContent';
import {SiteList} from 'components/SiteList';
import {CategoryList} from 'components/CategoryList';
import { footerQuery, blockContentQuery, menuQuery } from 'util/queries';
import { MetaData } from 'components/MetaData';

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
