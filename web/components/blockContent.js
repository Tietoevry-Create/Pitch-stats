import { PortableText } from '@portabletext/react';
import React from 'react';

const BlockContent = ({ refs, blockContent, ...rest }) => (
  <div ref={refs} className={'h-screen container mx-auto px-4 md:px-24 md:py-44 text-xl'}>
    <div className="items-top grid md:grid-cols-1 lg:grid-cols-2 pb-20">
      <div className="rounded-lg mb-auto border-2 border-tepurple py-5 px-5 md:py-10 md:px-16">
        <PortableText value={blockContent} />
      </div>
      <div className="mx-auto mt-10">
        <svg
          viewBox="0 0 240 240"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black h-20 w-20 md:h-80 md:w-80 mr-2"
        >
          <rect width="256" height="256" fill="none" />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="88"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <line
            x1="128"
            y1="152"
            x2="80"
            y2="128"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <line
            x1="128"
            y1="128"
            x2="176"
            y2="104"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <path
            d="M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z"
            fill="none"
            stroke="#000"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
    <div className="hidden md:block mx-3 mt-3 h-0.5 bg-tepurple w-full"></div>
  </div>
);

export default BlockContent;
