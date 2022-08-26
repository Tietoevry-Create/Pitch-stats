import { PortableText } from '@portabletext/react';

const BlockContent = ({ blockContent, ...rest }) => (
  <div className="container mx-auto px-4 md:px-40 py-10 text-lg">
    <PortableText value={blockContent} />
  </div>
);

export default BlockContent;
