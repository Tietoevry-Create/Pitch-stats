import React from 'react';
import CustomLink from './customLink';
const Category = ({ children, ...rest }) => (
  <CustomLink>
    <a className="grid grid-cols-2 gap-3 border-2 border-yellow-50 hover:border-tepurple group">
      <div>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black h-46 w-46 mr-2">
          <path d={children.path} />
        </svg>
      </div>
      <div className="grid grid-row-2 gap-3 py-3">
        <h3 className="text-2xl group-hover:underline">{children.title}</h3>
        <p className="text-xl">{children.lede}</p>
      </div>
    </a>
  </CustomLink>
);

export default Category;
