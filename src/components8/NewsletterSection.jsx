/**
 * This code was generated by Builder.io.
 */
import React from "react";

function NewsletterSection() {
  return (
    <section className="mt-5 w-full max-w-[1252px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start pt-8 pr-20 pb-12 pl-10 mx-auto w-full font-bold rounded-3xl bg-zinc-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
            <h2 className="text-xl tracking-normal leading-tight text-white">
              Подпишись на нашу рассылку
            </h2>
            <p className="mt-2 text-sm tracking-normal text-white">
              Рассказываем все новости игрового мира
            </p>
            <form className="flex gap-2.5 mt-10 max-w-full text-base leading-tight whitespace-nowrap w-[410px]">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="overflow-hidden gap-2.5 self-stretch py-4 pr-40 bg-white min-h-[50px] rounded-[100px] text-stone-900"
              />
              <button
                type="submit"
                className="gap-2.5 self-stretch px-8 py-4 text-center text-black bg-lime-400 min-h-[50px] rounded-[100px] max-md:px-5"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start pt-8 pr-20 pb-12 pl-10 mx-auto w-full rounded-3xl bg-zinc-900 max-md:px-5 max-md:mt-5 max-md:max-w-full">
            <h2 className="text-xl font-bold tracking-normal leading-tight text-white">
              Подпишись на наш Telegram-канал
            </h2>
            <p className="mt-2 text-sm tracking-normal text-white">
              Постим самые интересные новости первыми
            </p>
            <div className="flex gap-2.5 mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e1e20422ad1bd41b8c7820ffa8dbdb6f810cc45114619e087aa2ec721b64e4f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Telegram QR code"
                className="object-contain shrink-0 max-w-full rounded-none aspect-[3.4] w-[170px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed77b89986fb8bc22c2a898c7654b4bb7f360fb09914f8ecd1392d15916755b7?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Telegram channel link"
                className="object-contain shrink-0 max-w-full rounded-none aspect-[3.4] w-[170px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
