const FeatureList = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-5 mt-4 leading-6">
          <img
            loading="lazy"
            src={feature.icon} 
            alt="Feature icon"
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
          <div className="flex-auto">{feature.text}</div> 
        </div>
      ))}
    </>
  );
};

export default FeatureList;
