import Category from 'components/category';
import React from 'react';

const CategoryList = ({ refs, categoryList, ...rest }) => (
  <section
    ref={refs}
    className="lg:h-screen container mx-auto px-4 md:px-24 pt-44 md:py-15 lg:py-10">
    <h2 className="text-3xl md:text-4xl font-bold pb-1 border-b-4 border-black">Kategorier</h2>
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-15 md:gap-20 my-14">
      {categoryList &&
        categoryList.length > 0 &&
        categoryList.map((category) => <Category category={category} key={category._id} />)}
    </div>
  </section>
);

export default CategoryList;
