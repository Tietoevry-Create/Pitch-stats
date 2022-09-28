import client from 'util/client.js';
import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import { footerQuery, menuQuery } from 'util/queries';
import Page404Icon from 'components/icons/Page404Icon';

export default function Custom404({ menuData = {}, footerData = {} }) {
  return (
    <>
      <Layout footerData={footerData} menuData={menuData}>
        <Heading title={'Page not found'} />
        <Page404Icon />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const query = `{${footerQuery}, ${menuQuery} }`;
  const data = await client.fetch(query);
  const { footerData = {}, menuData = {} } = data;
  return {
    props: {
      footerData: footerData,
      menuData: menuData
    },
    revalidate: 50
  };
}
