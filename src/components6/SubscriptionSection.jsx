/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const SubscriptionSection = () => {
  const subscriptions = [
    { duration: "1 месяц", price: "1 650 ₽", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e21dde3381372e0e5b936b9c61a23686a8bb7e54ce74e6ce8ec96eda42532bf4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" },
    { duration: "1 месяц", price: "1 450 ₽", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dd824bd4fa698d4eec834016907feed636d8312401b095b5113155307833e04?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", featured: true },
    { duration: "1 месяц", price: "990 ₽", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/09572993e1b9e1cbdaaddf0d8061fb6e40bd4ac226f1655050db0271cd468295?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" }
  ];

  return (
    <section className="mt-4 w-full max-w-[1216px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {subscriptions.map((sub, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className={`flex overflow-hidden flex-col px-2 pt-2 pb-5 mx-auto w-full rounded-3xl ${sub.featured ? 'border-2 border-lime-400 border-solid' : ''} bg-neutral-800 max-md:mt-5`}>
                    <div className="flex overflow-hidden flex-col items-center text-lg font-medium leading-none text-center text-yellow-500 bg-white rounded-xl aspect-square">
                      <div className="flex relative flex-col px-16 pt-36 pb-16 w-full aspect-square max-md:px-5 max-md:pt-24">
                        <img loading="lazy" src={sub.image} alt={`Subscription for ${sub.duration}`} className="object-cover absolute inset-0 size-full" />
                        {sub.duration}
                      </div>
                    </div>
                    <div className="flex flex-col mt-3 text-neutral-200 max-md:mx-2">
                      <div className="text-base font-medium leading-5 whitespace-nowrap text-ellipsis">
                        Подписка PS+ Essential {sub.duration}
                      </div>
                      <div className="mt-3 text-2xl font-semibold leading-none">
                        {sub.price}
                      </div>
                    </div>
                    <button className="overflow-hidden gap-2.5 self-stretch px-5 py-3.5 mt-5 text-base font-bold leading-none text-center text-black bg-lime-400 min-h-[50px] rounded-[100px] max-md:mx-2">
                      Оформить подписку
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-8 py-6 mx-auto w-full rounded-3xl bg-zinc-900 max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 self-start">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b85c36c9bb9d09d0733a99085ef85d247e78263138c801e2f6915672a7444e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 self-start w-11 aspect-square fill-lime-400" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61a87ace74c2685db094a58730bdc790d0b80789e8241e7dde219c36ade92317?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 aspect-square w-[46px]" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05353bcdbd9620f0cc35b824ef3eb1de9929590976292be604f8fa9eee1a88da?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 aspect-square w-[46px]" />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-normal leading-7 text-white">
              Экономь своё время. Купи подписку с автоматическим продлением оплаты.
            </h3>
            <p className="mt-5 mr-7 text-sm tracking-normal text-white max-md:mr-2.5">
              Просто зарегистрируйся в нашем личном кабинете и привяжи карту на стороне банка и мы будем обновлять подписку без твоего участия
              <br /><br />
              *данные твоей банковской карты мы не храним
            </p>
            <button className="px-16 py-5 mt-7 text-base font-bold leading-none text-center text-lime-400 whitespace-nowrap border border-lime-400 border-solid rounded-[100px] max-md:px-5 max-md:mr-2">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;