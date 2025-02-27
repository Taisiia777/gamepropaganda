/**
 * This code was generated by Builder.io.
 */
import React from "react";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import SubscriptionSection from "./SubscriptionSection";
import NewsletterSection from "./NewsletterSection";

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-neutral-900">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a6a98e336e503e85bd3623a3d29071b2d41bdf1b0e68b0a623980caf6cc0c6f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className="object-contain mt-24 max-w-full rounded-none aspect-square w-[153px] max-md:mt-10"
      />
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12226b39c7afb4c3c849fec3d107baa2334c00f50418d54ad842df06d7a20fbb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt=""
              className="object-contain grow shrink-0 mt-96 max-w-full rounded-none aspect-[0.63] w-[274px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <HeroSection />
            <GameSection />
          </div>
          <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7afc68ee794f2ff43abd33c2c09043a3055c45802f93f4c3ad4cbbd25a10e5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt=""
              className="object-contain grow shrink-0 mt-96 max-w-full rounded-none aspect-[0.63] w-[274px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <SubscriptionSection />
      <NewsletterSection />
    </main>
  );
}

export default MainContent;
