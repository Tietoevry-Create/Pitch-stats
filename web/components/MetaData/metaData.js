import { NextSeo } from 'next-seo';

const MetaData = ({ title, sitename, description, url, type, icon, ...rest }) => {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          site_name: sitename,
          type: type,
          url: url,
          title: title,
          description: description
        }}
      />
    </>
  );
};

export default MetaData;
