import { PortableText } from '@portabletext/react';

const BlockContent = ({ blockContent, ...rest }) => (
  <>
    <PortableText value={blockContent} />
  </>
);

export default BlockContent;
