/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Button from "./Button";

function SubscriptionCard({ title, duration, price, unit }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col items-start px-10 py-9 mx-auto w-full font-bold text-white rounded-3xl border border-solid bg-zinc-900 border-zinc-800 max-md:px-5 max-md:mt-5">
        <div className="text-xl tracking-normal leading-tight">{title}</div>
        <div className="mt-2 text-sm tracking-normal">{duration}</div>
        <div className="flex gap-2.5 items-end mt-20 whitespace-nowrap max-md:mt-10">
          <div className="text-6xl tracking-tight leading-none max-md:text-4xl">
            {price}
          </div>
          <div className="text-2xl tracking-normal text-center">{unit}</div>
        </div>
        <Button
          text="Купить подписку"
          className="gap-2.5 self-stretch px-8 py-4 mt-11 text-base leading-tight text-center text-black bg-lime-400 min-h-[50px] rounded-[100px] max-md:px-5 max-md:mt-10"
        />
      </div>
    </div>
  );
}

export default SubscriptionCard;
