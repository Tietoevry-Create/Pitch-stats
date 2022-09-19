import { NextSeo } from 'next-seo';
const MetaData = ({ document, ...rest }) => {
  const { title } = document;
  return (
    <>
      <NextSeo title={title} />
    </>
  );
};

export default MetaData;
