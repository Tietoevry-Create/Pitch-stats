import React from 'react';
import TreeIcon from '../icons/TreeIcon';

const BlockContent = ({ text, image, ...rest }) => (
  <div className={'container mx-auto px-4 md:px-24 md:py-24 text-xl'}>
    <div className="items-top grid md:grid-cols-1 lg:grid-cols-2 pb-20">
      {text && text.length > 0 && (
        <div className="rounded-lg mb-auto border-2 border-tepurple py-5 px-5 md:py-10 md:px-16">
          <p>{text}</p>
        </div>
      )}
      <div className="mx-auto mt-10">
        <TreeIcon />
      </div>
    </div>
    <div className="hidden mx-auto md:block mt-3 h-0.5 bg-heroblue w-full"></div>
  </div>
);

export default BlockContent;
