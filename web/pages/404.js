import client from 'util/client.js';
import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { footerQuery, blockContentQuery, menuQuery } from 'util/queries';
import { MetaData } from 'components/MetaData';

import { CustomLink } from 'components/CustomLink';




export default function Custom404({
    menuData = {},
    pageData = {},
    footerData = {},
}) {
    
    const { menuLinks = [] } = menuData;

    return (
        <>
        <MetaData document={pageData} />

        <Layout footerData={footerData} menuData={menuData} >
            <Heading title={'404: Page not found'} />

            <main class="flex flex-col justify-center items-center h-screen">

                <h2>Oh dear! This page does not exist. </h2>

                <CustomLink to={'/'}>
                    <a className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 text-black font-bold items-center justify-center hover:underline">
                    {'Return to main page'}
                    </a>
                </CustomLink>
                    


            </main>
  
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
