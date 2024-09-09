/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FAQItem from "./FAQItem";

const faqItems = [
  {
    question: "Я подключил подписку, но игры все равно платные, почему?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/92e6c4748288620c6cfef077572804ab1da00e6de38db0dbf04b06232c1ccd85?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question:
      "Я купил у вас на сайте Игру/Подписку/Аккаунт, но мне на почту ничего не пришло, почему?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c995a0e571f84a90b5897b8c765f6d077c463237be7d56f9e1edd75f521004af?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question:
      'Я купил подписку "Essential" или "Extra" на свой Турецкий аккаунт, но теперь хочу сделать апгрейд, как узнать его стоимость?',
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d2f6f89471a3346b94277a59b664d07b07cdf7b1da85ce3fcb780f7186099f76?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question: "Мне не отвечают в боте, что делать?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/19ffff3be9fae8449637d2caae8af27f9b3d96f79e935105efb7dc2166eb7c62?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question: "Я купил игру для PS4, смогу ли я в нее играть на PS5?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39e9a326a3ca96726207bba36da19e1cf313c83cfde6d0542a50d800b45a9ac7?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question:
      "От меня просит оператор резервный код, но я не знаю, где его взять",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0bb892b91234955c0445688dd0544d0ed8dac1abcb3e188bc7fc57333790ddca?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question: "Я попросил возврат, но деньги пока не пришли",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c88d352bcbe82ec92210938e17ac71c704cd99bb0a02c9c9220d9324c6bdce82?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question:
      "У меня на старом аккаунте много игр, я не хочу его лишаться, что мне делать?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b3390ece0487c3fcfdcb1b986bef42a321d1aa75eb5763b64af433f648dd614c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question: "Почему я должен доверять PS PROPAGANDA и магазину PS+ Store?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd315951743fecbe34c6f0785b78bd9155c8da118e9c72fac0b5289e44629925?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    question:
      "Как я могу оплатить свой заказ если я не в России и у меня нет карт Российских банков?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c41a4b409288f6c8f8b3fe506d1cdbca64431872b8bf990191235966fac11cf?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
];

function FAQ() {
  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-5xl font-bold tracking-normal leading-none text-center text-white max-md:max-w-full">
        Ответы на вопросы
      </h2>
      <div className="flex flex-col mt-12 w-full text-base font-medium leading-loose max-w-[1252px] text-neutral-200 max-md:mt-10 max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 mt-10 max-w-full text-base font-bold leading-tight text-center text-black bg-lime-400 min-h-[50px] rounded-[1000px] w-[346px] max-md:px-5">
        Задай свой вопрос
      </button>
    </section>
  );
}

export default FAQ;
