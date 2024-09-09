/**
 * This code was generated by Builder.io.
 */
import React from "react";
import GameCard from "./GameCard";

const games = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: "9 490 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4ee7bdf7c3ba4327304c3aa712708bba8a6abab3f2cfdb4e3be174ebd82e3ac3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Death's Door",
    price: "2 690 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5687194c40331e1940902bea5c033a5d6cbba8302e742a00fb92643f1eb10e11?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "God of War Ragnarök",
    price: "9 490 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bb9524df9041f0cf641ecddfbde79500c6faaab6e786c55a20f9b32eb1e29a5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Doki Doki Literature Club Plus!",
    price: "1 290 ₽",
  },
];

function GameSection() {
  return (
    <section className="mt-4 w-full max-w-[1252px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
          >
            <GameCard {...game} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameSection;
