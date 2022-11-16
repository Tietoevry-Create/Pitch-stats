import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Category } from '../Category';
const CategoryList = ({ categoryList, ...rest }) => {
  const categoryRefListRef = useRef();
  const [categoryRefListVisibility, setCategoryRefListVisibility] = useState();

  useEffect(() => {
    const categoryRefListObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCategoryRefListVisibility(entry.isIntersecting);
    });

    categoryRefListObserver.observe(categoryRefListRef.current);

    return () => {
      categoryRefListObserver.disconnect();
    };
  }, []);
  return (
    <section
      ref={categoryRefListRef}
      className={` container mx-auto px-4 md:px-24 pt-44 md:py-15 lg:py-10 ${
        categoryRefListVisibility ? 'animate-fadeIn' : ''
      }`}>
      <h2 className="text-3xl md:text-4xl font-bold pb-1 border-b-4 border-black">Kategorier</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-15 my-8">
        {categoryList &&
          categoryList.length > 0 &&
          categoryList.map((category, index) => (
            <Category
              slug={category.slug}
              title={category.title}
              description={category.text}
              svgPath={category.svg}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

export default CategoryList;
