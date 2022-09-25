import client from 'util/client.js';
import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { footerQuery, blockContentQuery, menuQuery } from 'util/queries';
import { MetaData } from 'components/MetaData';
import Icon404 from 'components/icons/Icon404'




export default function Custom404({
    menuData = {},
    pageData = {},
    footerData = {},
  }) {
    
  return (
      <>
        <MetaData document={pageData} />

        <Layout footerData={footerData} menuData={menuData}>
            
            <Heading title={'Page not found'} />

            <Icon404 />

        </Layout>
      </>
  )
}






export async function getStaticProps() {
  const query = `{"siteList": *[_type=="site"]{title, slug, _type, _id, "category": categoryReference->{title}}, "pageData": *[_type == 'frontPage' && _id == 'frontPage' && !(_id in path("drafts.**"))][0]{title, ${blockContentQuery}, "categoryList": categoryRefList[]->{_id, _type, title, slug, lede, path, ... }, ...}, ${footerQuery}, ${menuQuery} }`;
  const data = await client.fetch(query);
  const { footerData = {}, menuData = {} } = data;
  return {
    props: {
      footerData: footerData,
      menuData: menuData,
    },
    revalidate: 50
  };
}
