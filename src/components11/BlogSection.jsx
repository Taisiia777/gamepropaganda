/**
 * This code was generated by Builder.io.
 */
import React from "react";
import BlogPost from "./BlogPost";

const blogPosts = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc383de3bc3a58905b482dbe87605ac59e669006e0bbfb7d4efd6d04c45e1950?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/79454d7ae299d353d4071b8933746c913da47c7bbc1b25b1bcefed6816a4cfdf?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc383de3bc3a58905b482dbe87605ac59e669006e0bbfb7d4efd6d04c45e1950?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc383de3bc3a58905b482dbe87605ac59e669006e0bbfb7d4efd6d04c45e1950?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc383de3bc3a58905b482dbe87605ac59e669006e0bbfb7d4efd6d04c45e1950?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bc383de3bc3a58905b482dbe87605ac59e669006e0bbfb7d4efd6d04c45e1950?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Что показали на Xbox Games Showcase 2024 — Doom",
    date: "14 июля",
    author: "Marble",
  },
];

function BlogSection() {
  return (
    <section className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="max-w-full rounded-3xl w-[934px]">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden flex-col mt-5 w-full font-medium rounded-3xl border border-solid bg-neutral-800 border-neutral-800 max-md:max-w-full">
          <div className="flex relative flex-col justify-center py-px w-full min-h-[400px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e1a6edac8d3932eb4478204c636c3927b4360d5a8372db85543f56ad7069608?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt="Featured blog post background"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col items-start pt-72 pr-20 pb-6 pl-4 w-full max-md:pt-24 max-md:pr-5 max-md:max-w-full">
              <h2 className="text-2xl leading-8 text-ellipsis text-neutral-200 w-[319px]">
                Что показали на Xbox Games Showcase 2024 — Doom
              </h2>
              <div className="flex gap-4 items-center mt-1 text-sm leading-7 text-neutral-400">
                <time className="self-stretch my-auto">14 июля</time>
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b9a74c159ef8bcede91cd42ea76de3b7e17225c7a942cbc20afc870bdfd3292?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
                  />
                  <span className="self-stretch my-auto">Game Propaganda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
