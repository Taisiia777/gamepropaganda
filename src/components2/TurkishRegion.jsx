/**
 * This code was generated by Builder.io.
 */
import React from "react";
import AccountCard from "./AccountCard";

function TurkishRegion() {
  return (
    <section className="flex relative flex-col items-center px-20 py-16 mt-32 w-full rounded-none max-w-[1400px] min-h-[782px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d4cedc1af3256e93d5b04acb1fa57e432cefef172fefe7aa830d965dcbe4f1?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d49dc75191899cf6f6565b51ed1f586ebf66e8fa04a475f1dd47fa776f9f6b4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className="object-contain rounded-none aspect-square w-[50px]"
      />
      <h2 className="relative mt-3.5 text-5xl font-bold text-center text-white leading-[50px] w-[717px] max-md:max-w-full">
        Мы работаем только с Турецким регионом
      </h2>
      <div className="relative self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <AccountCard
            title="Поможем создать личный аккаунт для покупки игр и не только!"
            description="Если у тебя еще нет своего аккаунта Sony, мы можем взять на себя всю регистрацию и оформление аккаунта от тебя нужно только указать Email адрес, на который будет создан твой личный аккаунт Sony."
            buttonText="Купить аккаунт"
            price="400 ₽"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e334ae67bed73270294d4d2795f17387122997c851ea35391348b29b32d434?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          />
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow px-10 pt-10 pb-24 w-full tracking-normal text-white border border-solid bg-zinc-900 bg-opacity-40 border-white border-opacity-10 rounded-[40px] max-md:px-5 max-md:mt-2 max-md:max-w-full">
              <h3 className="self-start text-3xl font-bold leading-9 max-md:max-w-full">
                Если у тебя уже есть турецкий аккаунт — смело покупай все, что
                хочешь
              </h3>
              <p className="mt-8 text-base leading-6 max-md:max-w-full">
                Если нет - при покупке свыше 2000 рублей мы его создадим
                бесплатно, либо ты можешь купить его сразу. Мы гарантируем, что
                не будет никаких блокировок и аккаунт будет только твоим, ты
                можешь смело поменять пароль, а заведем мы его на твою почту.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurkishRegion;
