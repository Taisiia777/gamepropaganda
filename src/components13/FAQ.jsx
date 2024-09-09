/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FAQItem from "./FAQItem";

const faqItems = [
  {
    question: "Я подключил подписку, но игры все равно платные, почему?",
    answer: "",
  },
  {
    question:
      "Я купил у вас на сайте Игру/Подписку/Аккаунт, но мне на почту ничего не пришло, почему?",
    answer: "",
  },
  {
    question:
      'Я купил подписку "Core" или "Ultimate" на свой Турецкий аккаунт, но теперь хочу сделать апгрейд, как узнать его стоимость?',
    answer: "",
  },
  {
    question: "Мне не отвечают в боте, что делать?",
    answer: "",
  },
  {
    question: "Что такой абонемент Xbox Game Pass?",
    answer: "",
  },
  {
    question:
      "От меня просит оператор резервный код, но я не знаю, где его взять",
    answer: "",
  },
  {
    question: "Я попросил возврат, но деньги пока не пришли",
    answer: "",
  },
  {
    question:
      "У меня на старом аккаунте много игр, я не хочу его лишаться, что мне делать?",
    answer: "",
  },
  {
    question:
      "Почему я должен доверять PS PROPAGANDA и магазину Xbox Game Pass?",
    answer: "",
  },
  {
    question:
      "Как я могу оплатить свой заказ если я не в России и у меня нет карт Российских банков?",
    answer: "",
  },
];

function FAQ() {
  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold tracking-normal leading-none text-center text-white max-md:max-w-full">
        Ответы на вопросы
      </h2>
      <div className="flex flex-col mt-12 w-full text-base font-medium leading-loose max-w-[1252px] text-neutral-200 max-md:mt-10 max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 mt-10 max-w-full text-base font-bold leading-tight text-center text-black bg-lime-400 min-h-[50px] rounded-[1000px] w-[346px] max-md:px-5">
        Задай свой вопрос
      </button>
    </section>
  );
}

export default FAQ;
