// /**
//  * This code was generated by Builder.io.
//  */
// import React from "react";
// import ActionButton from "./ActionButton";

// const Hero = () => {
//   return (
//     <>
//     <img
//   loading="lazy"
//   src="/img/home_header.png"
//   alt="Hero image"
//   className="absolute top-0 left-0 w-[99vw] h-[1000px] object-cover z-[0]"
// />
// <section className="flex flex-col items-center self-stretch px-20 pb-24 mt-28 w-full text-center text-white rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full z-[10]">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ecc866a2d9410cb2342f6721539ac92bc5293f4e404eb136d135890fa31f00?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//         alt="Hero image"
//         className="object-contain z-10 mt-0 max-w-full rounded-none aspect-square w-[153px]"
//       />
//       <div className="flex flex-col items-center mt-8 max-w-full w-[904px]  z-[10]">
//         <h1 className="text-6xl font-black leading-[61px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
//           Покупайте игры и подписки Sony и Xbox без ограничений
//         </h1>
//         <p className="mt-8 text-xl tracking-normal w-[494px] max-md:max-w-full">
//           Присоединяйтесь к группе людей, которые доверяют Game Propaganda,
//           потому что через нас быстро удобно и безопасно покупать любые игры.
//         </p>
//       </div>
//       <div className="flex gap-2.5 mt-12 max-w-full text-base font-bold leading-tight text-black w-[422px] max-md:mt-10  z-[10]">
//         <ActionButton text="За покупками Sony" primary />
//         <ActionButton text="За покупками Xbox" />
//       </div>
//     </section>
//     </>
    
//   );
// };

// export default Hero;



import React from "react";
import IconButton from "./IconButton";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6699517b31dbf066f7a0254b18f4f3a227e2d8fb4db9f17d294a2119def91b5e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Пополнить\nаккаунт Sony" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e59adb08684e44f32b7eaf83944a42cde945144ce7068e3a4a4262001bfa241?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Пополнить\nаккаунт Xbox" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f62b1e85095215a062172afdcbaeaa552018c4e2c2b2082260184ae57c0084d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Создать\nаккаунт Sony" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfa355259328fd90a23ea7c5891f1eb1ec73e12b9f65bbae75ca880a348b8019?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Создать\nаккаунт Xbox" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b91cc4ccc6792b1fe7792a9b51dbd61e42a89458237ead7b1b1bb85dfcc78671?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Подписка\nUbisoft+" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1a25fbdafa52eaad97df12f6d63ae1761247bbf9fdcc964f087d6b5a8899a07?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Подписка\nEA Play" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbda051c99ca38ffa4ccf8fab45328036425c755dc75f2498ed56150785bb653?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Подписка\nPS Plus" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05b9bf76b8aa537c2fb7dd0b86db5d5f28b502fda66f35c91c17f298b93a8b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Подписка\nXbox Game Pass" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df2c67528819fb0ed0703034fd8770c32c54687a14b84a9d9a1485a6115d2033?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Валюта\nFC Points" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b7831665924845141e86042f77d4cb5c3b0a6b07e643546aaee810a03b7eea9?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Валюта\nFortnite V-bucks" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/800cbf1a625462f38239fcfecb55b85711be2b72733b10e59e33a3ce6362ec16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", title: "Подписка\nNetflix" },
];

function Hero() {
  return (
    <main className="flex flex-col text-center text-white rounded-none">
      <section className="flex relative flex-col items-center px-20 py-20 w-full rounded-none min-h-[849px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e094e9f05831f0076b37da1667b72bb25d258c5d683431b11ee2a91168030ac8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-cover absolute inset-0 size-full rounded-[20px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ecc866a2d9410cb2342f6721539ac92bc5293f4e404eb136d135890fa31f00?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Game Propaganda logo" className="object-contain max-w-full rounded-none aspect-square w-[153px]  z-[10]" />
        <div className="flex relative flex-col items-center mt-8 max-w-full w-[904px]">
          <h1 className="text-6xl font-black leading-[61px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Покупайте игры и подписки Sony и Xbox без ограничений
          </h1>
          <p className="mt-8 text-xl tracking-normal w-[494px] max-md:max-w-full">
            Присоединяйтесь к группе людей, которые доверяют Game Propaganda, потому что через нас быстро удобно и безопасно покупать любые игры.
          </p>
        </div>
        <div className="flex relative gap-2.5 mt-12 max-w-full text-base font-bold leading-tight text-black w-[422px] max-md:mt-10">
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 bg-lime-400 min-h-[50px] rounded-[1000px] max-md:px-5">
            За покупками Sony
          </button>
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 bg-white min-h-[50px] rounded-[1000px] max-md:px-5">
            За покупками Xbox
          </button>
        </div>
        <div className="flex relative gap-5 justify-between self-end mt-24 w-full text-xs font-bold leading-4 max-w-[1252px] max-md:mt-10 max-md:max-w-full mx-auto">
          <IconButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1c677e6cf474b5e9950dba2ec2b18d91efda0e2331e8a252e8116a483983d8cb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" direction="left" />
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} />
          ))}
          <IconButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8a10bf8925754c5c377cd4b6fb8a5b542bbf8c79c2b662bbd03c75d75fae6ed6?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" direction="right" />
        </div>
      </section>
    </main>
  );
}

export default Hero;