import React from 'react';
import CustomLink from './customLink';
const Category = ({ children, ...rest }) => (
  <CustomLink>
    <a className="grid grid-cols-2 ">
      <div>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black h-50 w-50 mr-2">
          <path d="M3 10v11h6v-7h6v7h6v-11L12,3z" />
        </svg>
      </div>
      <div className="container text-xl ">
        <h3>{children.title}</h3>
        <p className="">{children.lede}</p>
      </div>
    </a>
  </CustomLink>
);

export default Category;
