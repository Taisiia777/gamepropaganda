/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import PackageContents from "./PackageContents";
import TechnicalSpecs from "./TechnicalSpecs";
import PremiumClub from "./PremiumClub";
import Newsletter from "./Newsletter";
import TelegramChannel from "./TelegramChannel";
import Footer from "./Footer";

function MainContent() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-neutral-900">
      <div className="flex overflow-hidden relative flex-col self-stretch pb-44 w-full min-h-[760px] max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5caea1ee940b60c4819401b33e92aff9d13abefa5384d8a03239868d170f320?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <Header />
        <Hero />
      </div>
      <PackageContents />
      <TechnicalSpecs />
      <PremiumClub />
      <div className="mt-5 w-full max-w-[1252px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Newsletter />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <TelegramChannel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainContent;
