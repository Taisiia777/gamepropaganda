/**
 * This code was generated by Builder.io.
 */
import React from "react";

function SubscriptionCard() {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col px-16 py-14 w-full rounded-none min-h-[670px] max-md:px-5 max-md:mt-2 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/359685b06858864236e114fa77aea7d11b7b3e8a63d21c28742502edc95a0362?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-3xl font-bold tracking-normal leading-9 text-white max-md:max-w-full">
          Оформите подписку «Классика Ubisoft+» для PlayStation
        </h2>
        <p className="relative self-start mt-5 text-base tracking-normal leading-6 text-white max-md:max-w-full">
          Возьмите от вашей подписки все благодаря тщательно подобранным играм,
          включая бестселлеры из серий Assassin's Creed, Far Cry и Tom Clancy's
          , а также любимую классику — For Honor, Child of Light и не только.
        </p>
        <div className="relative px-9 py-8 mt-16 bg-white border border-solid border-white border-opacity-10 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-start w-full text-base font-bold text-zinc-800 max-md:mt-10">
                <div className="text-6xl leading-none max-md:text-4xl">
                  990 ₽
                </div>
                <div className="tracking-normal leading-tight">
                  1-месячная подписка
                </div>
                <button className="overflow-hidden gap-2.5 self-stretch px-8 py-5 mt-24 leading-none text-center text-white bg-purple-600 min-h-[60px] rounded-[1000px] max-md:px-5 max-md:mt-10">
                  оформить подписку
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow mt-2 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d8b03849951954b0667517261ec4d7825d53ae6dc008039886d06b2e1168b4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                  alt="PlayStation logo"
                  className="object-contain w-40 aspect-[3.56]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8341e84096647d6fcd393099d154e9922b63a00c6ed5ed0c49de01717350c224?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                  alt="Ubisoft logo"
                  className="object-contain self-end mt-32 aspect-square rounded-[43px] w-[50px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;
