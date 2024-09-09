import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center px-20 pb-10 mt-16 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex shrink-0 max-w-full h-px bg-neutral-800 w-[1252px]" />
      <div className="flex flex-wrap gap-10 self-start mt-16 w-full max-w-[1186px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0018872d0b13ecefdd39f54854eaace2987016001474eae0f5705e5306771649?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Company logo" className="object-contain max-w-full aspect-[3.72] w-[156px]" />
          <address className="mt-9 mr-7 text-2xl font-semibold leading-none text-neutral-200 max-md:mr-2.5">
            hello@playstationplus.store
          </address>
          <p className="mt-1 text-base font-medium leading-loose text-neutral-400">
            принимаем заявки с 11:00 до 21:00 (МСК)
          </p>
          <div className="flex gap-2 self-start mt-4">
            <a href="#" aria-label="Social media link">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6026c93497c05916de173ea3de67c0fbb215f5f28189918e1ffec1b564ccd3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 aspect-square fill-zinc-800 w-[42px]" />
            </a>
            <a href="#" aria-label="Social media link">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc98f7b2cc057874edd3a9f97cb549b5a21b0aff88f1a7c616164ae6c4b7012d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 aspect-square w-[42px]" />
            </a>
          </div>
        </div>
        <nav className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col whitespace-nowrap max-md:mt-10">
                <h2 className="text-2xl font-semibold leading-none text-neutral-200">магазин</h2>
                <ul className="flex flex-col self-start mt-5 text-sm font-medium leading-loose text-neutral-400">
                  <li><Link to="/catalog">каталог</Link></li>
                  <li><Link to="/subscriptions">подписки</Link></li>
                  <li><Link to="/discounts">скидки</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <h2 className="self-start text-2xl font-semibold leading-none text-neutral-200">покупателям</h2>
                <ul className="flex flex-col mt-5 text-sm font-medium leading-loose text-neutral-400">
                  <li><Link to="/returns">возвраты</Link></li>
                  <li><Link to="/requisites">реквизиты</Link></li>
                  <li><Link to="/privacy-policy">политика конфиденциальности</Link></li>
                  <li><Link to="/public-offer">публичная оферта</Link></li>
                  <li><Link to="/advertising-consent">согласие на рекламную рассылку</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex shrink-0 mt-20 max-w-full h-px bg-neutral-800 w-[1252px] max-md:mt-10" />
      <div className="flex flex-wrap gap-5 justify-between mt-10 w-full max-w-[1252px] max-md:max-w-full">
        <p className="text-sm leading-loose text-neutral-400">© 2024, «GamePropaganda»</p>
        <div className="flex gap-6">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d73ec425831ae0870bb6de4cbda3d92cf14334b21d39493323879e8c44e84ec?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 my-auto w-10 aspect-[2]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6b37ce097c52774fa66fb59129a663e64657e5f7a09e50503d7d8672ef70ff?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 my-auto w-11 aspect-[2.2]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84a021cb0325cbf5eb34d1454623d5ca3657f618c92b85a46e3ae4001e7ad059?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 my-auto w-12 aspect-[2.4]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39536cb125c5170ed8b945e60ca6cafe3b117b92a45d397f3325075e49bcbdfd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 aspect-[1.75] w-[42px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c798dc45aa42d722cc5270c3ef6825d9a2b536d5439f35a9e276c13705db9aa?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 w-9 aspect-[1.5]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde3d5bbef627c9216c96948d44c64aae5f480b8f519a359cf1bf520f0aeb5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Payment method" className="object-contain shrink-0 aspect-[2.16] w-[52px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
