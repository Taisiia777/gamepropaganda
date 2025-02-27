/**
 * This code was generated by Builder.io.
 */
import React from "react";

function PremiumClubFeature({ icon, text }) {
  return (
    <div className="flex grow shrink gap-6 rounded-none min-w-[240px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-start rounded-none aspect-square w-[50px]"
      />
      <div>{text}</div>
    </div>
  );
}

export default PremiumClubFeature;
