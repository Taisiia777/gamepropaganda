/**
 * This code was generated by Builder.io.
 */
import React from "react";

function SubscriptionCard({ logo, price, duration, bgColor, textColor }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div
        className={`flex relative flex-col items-start py-8 pr-20 pl-8 mx-auto w-full font-bold ${bgColor} border border-solid border-white border-opacity-10 rounded-[40px] ${textColor} max-md:px-5 max-md:mt-2 max-md:max-w-full`}
      >
        <img
          loading="lazy"
          src={logo}
          alt="Subscription logo"
          className="object-contain max-w-full aspect-[3.06] w-[153px]"
        />
        <div className="mt-14 text-6xl leading-none max-md:mt-10 max-md:text-4xl">
          {price}
        </div>
        <div className="mt-2.5 text-xl tracking-normal leading-tight">
          {duration}
        </div>
        <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 mt-11 text-base leading-tight text-center text-white bg-rose-500 min-h-[50px] rounded-[1000px] max-md:px-5 max-md:mt-10">
          оформить подписку
        </button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
