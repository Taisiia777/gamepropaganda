/**
 * This code was generated by Builder.io.
 */
import React from "react";
import NavItem from "./NavItem";
import SubscribeButton from "./SubscribeButton";

const navItems = [
  { text: "каталог", hasDropdown: false },
  { text: "подписки", hasDropdown: true },
  { text: "блог", hasDropdown: false },
  { text: "аккаунты", hasDropdown: true },
  { text: "баланс", hasDropdown: true },
];

function Header() {
  return (
    <header className="flex relative flex-col items-center w-full bg-neutral-900 bg-opacity-60 max-md:max-w-full">
      <div className="flex shrink-0 max-w-full h-px bg-neutral-800 w-[1252px]" />
      <nav className="flex gap-5 justify-between items-center mt-3.5 w-full max-w-[1252px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae77d2e47c566dbe26b6c19a1b351a65f0113612622d8be45c08742e80d07015?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Company logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[3.72] w-[156px]"
        />
        <div className="flex flex-wrap gap-10 self-stretch my-auto text-sm leading-loose max-md:max-w-full">
          <div className="flex flex-auto gap-10 items-start my-auto whitespace-nowrap text-neutral-200 max-md:max-w-full">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                hasDropdown={item.hasDropdown}
              />
            ))}
          </div>
          <SubscribeButton />
        </div>
        <div className="flex gap-2.5 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c7c8046a64f55a9a58df4d8198fb23627937744d63f32cbadf9d4b2308b99b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Social media icon 1"
            className="object-contain shrink-0 aspect-square w-[38px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f9aaab2cbef3b4966c1fd1c13abdba381cf50f946e6f9c66e3b376411dab41?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Social media icon 2"
            className="object-contain shrink-0 aspect-square w-[38px]"
          />
        </div>
      </nav>
      <div className="flex self-stretch mt-3.5 w-full bg-neutral-800 min-h-[1px] max-md:max-w-full" />
    </header>
  );
}

export default Header;
