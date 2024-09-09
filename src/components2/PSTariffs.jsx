/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import TariffCard from "./TariffCard";

const tariffs = [
  {
    name: "PREMIUM",
    description: "Наслаждайтесь всеми преимуществами",
    color: "text-yellow-500",
    bgColor: "bg-black",
    features: [
      "Игры месяца",
      "Онлайн режим",
      "Эксклюзивные скидки",
      "Эксклюзивные материалы",
      "Облачное хранилище",
      "Share Play",
      "Коллекция Playstation Plus",
      "Справка по игре",
      "Каталог Ubisoft",
      "Классика Ubisoft",
      "Каталог Классики",
      "Демо версии игр",
      "Облачный стриминг",
      "Каталог фильмов Sony",
    ],
    price: "от 1 650 ₽",
  },
  {
    name: "EXTRA",
    description: "Откройте для себ сотни игр",
    color: "text-zinc-900",
    bgColor: "bg-yellow-500",
    features: [
      "Игры месяца",
      "Онлайн режим",
      "Эксклюзивные скидки",
      "Эксклюзивные материалы",
      "Облачное хранилище",
      "Share Play",
      "Коллекция Playstation Plus",
      "Справка по игре",
      "Каталог Ubisoft",
      "Классика Ubisoft",
    ],
    price: "от 1 450 ₽",
  },
  {
    name: "ESSENTIAL",
    description: "Игры месяца, онлайн режим и многое другое",
    color: "text-zinc-900",
    bgColor: "bg-white",
    features: [
      "Игры месяца",
      "Онлайн режим",
      "Эксклюзивные скидки",
      "Эксклюзивные материалы",
      "Облачное хранилище",
      "Share Play",
      "Коллекция Playstation Plus",
      "Справка по игре",
    ],
    price: "от 990 ₽",
  },
];

function PSTariffs() {
  const [selectedPeriod, setSelectedPeriod] = useState("1 месяц");

  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-center text-white max-md:text-4xl">
        Тарифы Ps Plus
      </h2>
      <p className="mt-5 text-xl leading-8 text-center text-white w-[636px] max-md:max-w-full">
        Мы первые в России, кто смог подключить автоматическую подписку на Sony
        Playstation и Xbox
      </p>
      <div className="flex gap-1 items-center mt-12 ml-5 text-base leading-loose text-neutral-200 max-md:mt-10">
        {["1 месяц", "3 месяц", "12 Месяцев"].map((period) => (
          <button
            key={period}
            className={`px-6 py-4 rounded-[50px] ${
              selectedPeriod === period
                ? "border-2 border-lime-400 border-solid shadow-sm bg-neutral-800"
                : "bg-neutral-800"
            }`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>
      <div className="mt-12 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PSTariffs;
