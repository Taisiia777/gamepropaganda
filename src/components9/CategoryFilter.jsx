/**
 * This code was generated by Builder.io.
 */
import React from "react";

const categories = [
  { name: "Assasins' Creed", isActive: true },
  { name: "Far Cry", isActive: false },
  { name: "Tom Clancy", isActive: false },
  { name: "Спорт и гонки", isActive: false },
];

function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-1 items-center mt-12 text-base leading-loose text-neutral-200 max-md:mt-10 max-md:max-w-full">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col self-stretch my-auto rounded-[50px]"
        >
          <button
            className={`gap-2.5 self-stretch px-6 py-4 min-h-[59px] rounded-[50px] max-md:px-5 ${
              category.isActive
                ? "border-2 border-lime-400 border-solid shadow-sm"
                : ""
            } bg-neutral-800`}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryFilter;
