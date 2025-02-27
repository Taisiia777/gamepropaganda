/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center self-stretch px-20 pb-10 mt-16 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex shrink-0 max-w-full h-px bg-neutral-800 w-[1252px]" />
      <div className="flex flex-wrap gap-10 self-start mt-16 w-full max-w-[1186px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c39dc0b750d2abfdc8478669bbf60d59534ef62fbf3f8479f4db3ccfdcd8cc77?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Company logo"
            className="object-contain max-w-full aspect-[3.72] w-[156px]"
          />
          <div className="mt-9 mr-7 text-2xl font-semibold leading-none text-neutral-200 max-md:mr-2.5">
            hello@playstationplus.store
          </div>
          <div className="mt-1 text-base font-medium leading-loose text-neutral-400">
            принимаем заявки с 11:00 до 21:00 (МСК)
          </div>
          <div className="flex gap-2 self-start mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6026c93497c05916de173ea3de67c0fbb215f5f28189918e1ffec1b564ccd3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt="Social media icon 1"
              className="object-contain shrink-0 aspect-square fill-zinc-800 w-[42px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82bc375cf21f23dd196b5eb4ba10e90b3c643e0a58d181eacd952cd07d571335?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt="Social media icon 2"
              className="object-contain shrink-0 aspect-square w-[42px]"
            />
          </div>
        </div>
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FooterColumn
              title="магазин"
              links={["каталог", "подписки", "скидки"]}
            />
            <FooterColumn
              title="покупателям"
              links={[
                "возвраты",
                "реквизиты",
                "политика конфиденциальности",
                "публичная оферта",
                "согласие на рекламную рассылку",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex shrink-0 mt-20 max-w-full h-px bg-neutral-800 w-[1252px] max-md:mt-10" />
      <div className="flex flex-wrap gap-5 justify-between mt-10 w-full max-w-[1252px] max-md:max-w-full">
        <div className="text-sm leading-loose text-neutral-400">
          © 2024, «GamePropaganda»
        </div>
        <div className="flex gap-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a6e3720a6446f0700cf2e2f3d20da41a47bdcfed4c2e809c3ca64aa4c42a2fd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 1"
            className="object-contain shrink-0 my-auto w-10 aspect-[2]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f1d9fd9bae4563fe5b8b8c06a59b1e31bb5b25a639a05263a7ccd571688912?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 2"
            className="object-contain shrink-0 my-auto w-11 aspect-[2.2]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59491258f8a21518e97e42ebe0c8235f92a4f40718f3b3ad32e48633fb3b0a0f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 3"
            className="object-contain shrink-0 my-auto w-12 aspect-[2.4]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b02ab3b3301830b1ab3b4988a4d3e6dcb832794034da3f7bdec68a3b712e5754?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 4"
            className="object-contain shrink-0 aspect-[1.75] w-[42px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36fec2a242e19802e209aa20bcc11886fb4934d6a118e57763451a8d342773ac?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 5"
            className="object-contain shrink-0 w-9 aspect-[1.5]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/184c4323df21242ba7253c6a5719365fd3f6a959331f62d2e50715a6f5134112?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Payment method 6"
            className="object-contain shrink-0 aspect-[2.16] w-[52px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
