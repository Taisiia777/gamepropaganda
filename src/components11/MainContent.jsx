/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Sidebar from "./Sidebar";
import BlogSection from "./BlogSection";
import Pagination from "./Pagination";

function MainContent() {
  return (
    <main className="flex flex-col px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
      <div className="self-start text-sm leading-loose text-neutral-200">
        <span className="text-neutral-500">главная / </span>каталог игр Sony
      </div>
      <h1 className="gap-3 self-start mt-8 text-5xl font-bold tracking-tight leading-none text-neutral-200 max-md:max-w-full max-md:text-4xl">
        Блог Game Propaganda
      </h1>
      <div className="self-center mt-10 w-full max-w-[1252px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <BlogSection />
        </div>
      </div>
      <button className="overflow-hidden gap-2.5 self-end px-12 py-5 mt-20 text-base font-medium leading-loose text-center text-black bg-lime-400 min-h-[64px] rounded-[50px] max-md:px-5 max-md:mt-10">
        показать еще
      </button>
      <Pagination />
    </main>
  );
}

export default MainContent;
