import { NextSeo } from 'next-seo';
import toPlainText from 'util/toPlainText';
const MetaData = ({ document, ...rest }) => {
  let { title, lede, _createdAt, _updatedAt, websiteUrl, _type } = document;

  if (!lede && document.blockContent) {
    lede = toPlainText(document.blockContent);
  }

  const temporaryIconSRC = { alt: 'Website icon', src: '/favicon.ico' };
  const tempType = _type === 'frontPage' ? 'frontpage' : 'article';
  const tempSitename = 'Stats';

  console.log(document);

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          site_name: tempSitename,
          type: tempType,
          url: websiteUrl,
          title: title,
          description: lede,
          images: [
            {
              url: temporaryIconSRC.src,
              alt: temporaryIconSRC.alt
            }
          ],
          article: {
            // Tags are only added if "type" === "article".
            publishedTime: _createdAt,
            modifiedTime: _updatedAt
          }
        }}
      />
    </>
  );
};

export default MetaData;
