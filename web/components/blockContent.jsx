import { PortableText } from '@portabletext/react';

const BlockContent = ({ blockContent, ...rest }) => (
  <div className="container mx-auto px-4 md:px-20 py-4">
    <PortableText value={blockContent} />
  </div>
);

export default BlockContent;
