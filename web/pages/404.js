import { Layout } from 'components/Layout';
import { Heading } from 'components/Heading';
import Page404Icon from 'components/icons/Page404Icon';
import Head from 'next/head';
import DataManager from 'util/DataManager';

export default function Custom404({ headerPaths = {}, footerPaths = {} }) {
  return (
    <>
      <Head>
        <title>404 NOT FOUND</title>
      </Head>
      <Layout headerPaths={headerPaths} footerPaths={footerPaths}>
        <Heading title={'Page not found'} />
        <Page404Icon />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const infra = new DataManager();
  const headerPaths = infra
    .getHeaderPaths()
    .filter((item) => (item.slug = infra.generateProdURL('', item.slug)));
  const footerPaths = infra.getFooterPaths();

  return {
    props: {
      headerPaths: headerPaths,
      footerPaths: footerPaths
    },
    revalidate: 50
  };
}
