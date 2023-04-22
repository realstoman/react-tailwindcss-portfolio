import React from "react";

const AboutClientSingle: React.FC<{ title: string, image: any }> = ({title, image}) => {
  return (
    <div className="flex flex-col items-center ">
      <span className="font-general-regular text-gray-300">{title}</span>
      <img
        src={image}
        className="py-5 bg-contain px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
        alt={title}
      />
    </div>
  );
};

export default AboutClientSingle;
