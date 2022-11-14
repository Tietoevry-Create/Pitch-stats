import PropTypes from 'prop-types';
import React from 'react';
import { CustomLink } from '../CustomLink';
const Category = ({ slug, title, description, svgPath, ...rest }) => (
  <CustomLink to={slug}>
    <a className="pb-8 pt-8 rounded-lg group border-transparent border-2 hover:border-heroblue hover:border-solid">
      <div className="items-center lg:items-start grid grid-cols-2 gap-3">
        <div className="h-full grid place-items-center">
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-black h-44 w-44">
            <path d={svgPath} />
          </svg>
        </div>

        <div className="grid grid-row-2 gap-7">
          <h3 className="text-2xl group-hover:underline">{title}</h3>
          <p className="hidden lg:block text-lg lg:text-xl ">{description}</p>
        </div>
      </div>
      <p className="lg:hidden text-lg md:text-xl rounded-lg mb-auto  py-5 px-5 md:py-10 md:px-16">
        {description}
      </p>
    </a>
  </CustomLink>
);
Category.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  svgPath: PropTypes.string.isRequired
};

export default Category;
