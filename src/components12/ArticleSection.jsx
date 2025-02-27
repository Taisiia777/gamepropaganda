/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ArticleSection = ({ title, content }) => {
  return (
    <section className="flex flex-col mt-10 max-w-full text-neutral-200 w-[792px]">
      <h2 className="text-2xl font-semibold leading-none">{title}</h2>
      <p className="mt-4 text-base leading-7 max-md:max-w-full">{content}</p>
    </section>
  );
};

export default ArticleSection;
