/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Link } from "react-router-dom";

const ArticleHeader = ({ title, date, author, category }) => {
  return (
    <div className="flex flex-col self-center mt-6 max-w-full w-[828px]">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <nav className="text-sm leading-loose text-neutral-200 max-md:max-w-full">
          <Link to="/" className="text-neutral-400">
            главная
          </Link>
          <span className="text-neutral-400"> / </span>
          <Link to="/catalog" className="text-neutral-400">
            каталог игр Sony /
          </Link>
          <span> Mortal Kombat 11 Ultimate PS4 & PS5 </span>
        </nav>
        <div className="flex gap-2.5">
          <div className="grow text-sm leading-loose text-right text-neutral-200">
            Светлая тема
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-start p-1 fill-zinc-800">
            <div className="flex shrink-0 w-4 h-4 rounded-full bg-stone-500" />
          </div>
        </div>
      </div>
      <h1 className="self-start mt-6 text-5xl font-bold text-white leading-[50px] max-md:max-w-full">
        {title}
      </h1>
      <div className="flex gap-4 items-center self-start mt-2.5 text-sm font-medium leading-7 text-neutral-400">
        <time dateTime={date}>{date}</time>
        <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a997eb5668455a96e524425b665f496aab6bb7199897668cd63ce6b1179cfaee?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
          />
          <span>{author}</span>
        </div>
        <div className="self-stretch my-auto leading-loose text-neutral-400">
          {category}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
