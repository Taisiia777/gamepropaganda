/**
 * This code was generated by Builder.io.
 */
import React from "react";

const StarterPackSection = () => {
  return (
    <section className="px-20 py-px mt-2.5 w-full border border-solid bg-zinc-900 border-zinc-800 max-w-[1400px] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto -mr-9 text-5xl font-bold leading-10 text-white max-md:mt-10 max-md:text-4xl max-md:leading-10">
            Собери свой стартовый набор
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c5c712114896e53a4948e921c50f24121690af20cf700eb0dde915755fba90?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Starter pack illustration"
            className="object-contain grow w-full aspect-[2.16] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 w-full max-md:mt-10">
            <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 text-base font-bold leading-tight text-black bg-lime-400 min-h-[50px] rounded-[1000px] max-md:px-5">
              Собрать набор
            </button>
            <p className="self-center mt-5 text-base tracking-normal leading-5 text-center text-white">
              Добавь игры и подписки сразу к своему турецкому аккаунту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterPackSection;
