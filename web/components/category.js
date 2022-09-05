import React from 'react';
import CustomLink from './customLink';
const Category = ({ category, ...rest }) => (
  <CustomLink to={category}>
    <a className="items-start grid grid-cols-2 gap-3 py-6 px-3 rounded-lg border-2 border-yellow-50 hover:border-tepurple hover:bg-tepurple/20 hover:scale-110 group">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black h-46 w-46 mr-2">
        <path d={category.path} />
      </svg>

      <div className="grid grid-row-2 gap-7">
        <h3 className="text-2xl group-hover:underline">{category.title}</h3>
        <p className="text-lg md:text-xl">{category.lede}</p>
      </div>
    </a>
  </CustomLink>
);

export default Category;
