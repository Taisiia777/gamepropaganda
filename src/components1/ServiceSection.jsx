/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FeatureList from "./FeatureList";

function ServiceSection({
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  imageFirst,
}) {
  const contentSection = (
    <div className="flex flex-col items-start self-stretch my-auto w-full text-lg text-white max-md:mt-10">
      <h2 className="text-4xl font-bold leading-none">{title}</h2>
      <p className="mt-8 leading-7">{description}</p>
      <FeatureList features={features} />
    </div>
  );

  const imageSection = (
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-contain grow w-full rounded-none aspect-[1.38] max-md:mt-10 max-md:max-w-full"
    />
  );

  return (
    <section className="mt-16 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {imageFirst ? (
          <>
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              {imageSection}
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              {contentSection}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              {contentSection}
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              {imageSection}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ServiceSection;
