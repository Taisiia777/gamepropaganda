/**
 * This code was generated by Builder.io.
 */
import React from "react";

function BlogPost({ imageSrc, title, date, author }) {
  return (
    <article className="flex overflow-hidden flex-col items-start px-2 pt-2 pb-6 mx-auto w-full rounded-3xl bg-neutral-800 max-md:mt-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch rounded-xl bg-zinc-800 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain w-full aspect-[1.67] max-md:max-w-full"
        />
      </div>
      <h2 className="mt-4 text-2xl font-medium leading-8 text-ellipsis text-neutral-200 w-[319px] max-md:ml-2">
        {title}
      </h2>
      <div className="flex gap-4 items-center mt-1 text-sm font-medium leading-7 text-neutral-400 max-md:ml-2">
        <time className="self-stretch my-auto">{date}</time>
        <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e982d50d43c9a82f4dbbcddd8108c54f86c6fda4ca37e4d18e9804d35b56c3d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
          />
          <span className="self-stretch my-auto">{author}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
