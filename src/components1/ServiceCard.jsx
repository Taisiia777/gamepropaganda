import React from "react";

function ServiceCard({ icon, title }) {
  return (
    <div className="flex flex-col">
      <img loading="lazy" src={icon} alt="" className="object-contain self-center aspect-square w-[34px]" />
      <div className="mt-2.5 whitespace-pre-line">{title}</div>
    </div>
  );
}

export default ServiceCard;