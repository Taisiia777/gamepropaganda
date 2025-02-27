/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../components9/Header";
import Hero from "../components9/Hero";
import SubscriptionCard from "../components9/SubscriptionCard";
import GameCard from "../components9/GameCard";
import CategoryFilter from "../components9/CategoryFilter";
import FAQ from "../components9/FAQ";
import Testimonials from "../components9/Testimonials";
import Newsletter from "../components9/Newsletter";
import TelegramChannel from "../components9/TelegramChannel";
import Footer from "../components9/Footer";

function Ubisoft() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-neutral-900">
      <div className="flex overflow-hidden relative flex-col self-stretch pb-24 w-full min-h-[835px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bc100c051096b1335d3c32bcdfe3a98e72e05fde2dc78247c920794daf5975?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <Header />
        <Hero />
      </div>
      <div className="mt-24 w-full max-w-[1398px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <SubscriptionCard />
          <GameCard />
        </div>
      </div>
      <h2 className="mt-24 text-6xl font-bold text-center text-white leading-[61px] w-[774px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Все игры из каталога классики UbiSoft+
      </h2>
      <CategoryFilter />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2edc867580da315af4b2ef6a94f2c8d7c9c7a950cffd45c88b959391f5856ab8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt="Game catalog preview"
        className="object-contain mt-16 ml-3 w-full rounded-none aspect-[3.05] max-w-[1276px] max-md:mt-10 max-md:max-w-full"
      />
      <FAQ />
      <Testimonials />
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

export default Ubisoft;

