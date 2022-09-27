import PropTypes from 'prop-types';
import React from 'react';
import { CustomLink } from '../CustomLink';
const Category = ({ category, ...rest }) => (
  <CustomLink to={category}>
    <a className="pb-6 pt-16  group border-transparent border-2 hover:border-heroblue hover:border-solid">
      <div className="items-center lg:items-start grid grid-cols-2 gap-3">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black h-44 w-44 mr-2">
          <path d={category.path} />
        </svg>

        <div className="grid grid-row-2 gap-7">
          <h3 className="text-2xl group-hover:underline">{category.title}</h3>
          <p className="hidden lg:block text-lg lg:text-xl ">{category.lede}</p>
        </div>
      </div>
      <p className="lg:hidden text-lg md:text-xl rounded-lg mb-auto border-2 border-heroblue py-5 px-5 md:py-10 md:px-16">
        {category.lede}
      </p>
    </a>
  </CustomLink>
);
Category.propTypes = {
  category: PropTypes.object.isRequired
};

export default Category;
