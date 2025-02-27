/**
 * This code was generated by Builder.io.
 */
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const plans = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b417cf3772efa6b6710f546071ca98f84773f1937827828115fdc6f6821c1adb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    price: "1290 ₽",
    duration: "Подписка на 1 месяц",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c21034df95b4fab42bc467e2ac4e0ec73dd717403f65bd1f668268ad7fde3f12?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    price: "8090 ₽",
    duration: "Подписка на 12 месяцев",
    bgColor: "bg-white",
    textColor: "text-zinc-800",
  },
];

function SubscriptionPlans() {
  return (
    <section className="flex relative flex-col items-center px-20 pt-14 pb-24 mt-2.5 w-full rounded-none min-h-[684px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/792c1aec4971af1f485a8bb6ab6f25376bec5e59875d586eb9f935af41239b46?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt="Background image"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54a201edf589c9e2a6737a8ddd3a7308a9360b32729b9e9474b417444fea913?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className="object-contain rounded-none aspect-square w-[50px]"
      />
      <h2 className="relative mt-2.5 text-5xl font-bold leading-none text-center text-white">
        Тарифные планы
      </h2>
      <div className="relative self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {plans.map((plan, index) => (
            <SubscriptionCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubscriptionPlans;
