/**
 * This code was generated by Builder.io.
 */
import React from "react";

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col items-center px-20 pt-96 text-center text-white min-h-[550px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d11843ca6bcaeb2829028be33e8f8e2f4b54b2954d45d48efc84f9520a64ab06?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt="Background image"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative z-10 flex-col mb-0 max-w-full w-[904px] max-md:mb-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/264050f4ca12e759f5fb7add54ea4311221584bf14ff2356405d6f46681fc28f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="EA logo"
          className="object-contain self-center max-w-full aspect-[3.07] w-[227px]"
        />
        <div className="flex flex-col items-center mt-5 max-md:max-w-full">
          <h1 className="text-6xl font-black leading-none max-md:max-w-full max-md:text-4xl">
            Открой мир EA
          </h1>
          <p className="mt-8 text-xl tracking-normal w-[730px] max-md:max-w-full">
            Получи неограниченный доступ к коллекции лучших игр EA, избранным
            новым играм EA, скидку 10 % на покупки EA и многое другое
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
