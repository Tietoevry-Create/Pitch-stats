import Category from 'components/category';
import React from 'react';

const CategoryRefList = ({ categoryList, ...rest }) => (
  <div className="mx-auto px-4 md:px-24 py-10">
    <h2 className="font-bold">Kategorier</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-14">
      {categoryList &&
        categoryList.length > 0 &&
        categoryList.map((category) => <Category key={category._id}>{category}</Category>)}
    </div>
  </div>
);

export default CategoryRefList;
