/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TopUpCard from "./TopUpCard";

const topUpOptions = [
  { amount: "26 TL", price: "290 ₽" },
  { amount: "50 TL", price: "490 ₽" },
  { amount: "100 TL", price: "590 ₽" },
  { amount: "300 TL", price: "1790 ₽", special: true },
];

function AccountTopUp() {
  return (
    <section className="mt-32 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52404463999589d7a160774de57df45e947b0a88452b9acfd3a095101e09aaeb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className="object-contain mt-32 rounded-none aspect-square w-[50px] max-md:mt-10"
      />
      <h2 className="mt-3.5 text-5xl font-bold text-center text-white leading-[50px] w-[774px] max-md:max-w-full">
        Пополни аккаунт Playstation <br /> на любую сумму
      </h2>
      <div className="mt-5 w-full max-w-[1252px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {topUpOptions.map((option, index) => (
            <TopUpCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountTopUp;
