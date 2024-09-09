import React from "react";

function IconButton({ icon, direction }) {
  return (
    <button className="flex items-center justify-center" aria-label={`Scroll ${direction}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-5 aspect-square" />
    </button>
  );
}

export default IconButton;