import React from "react";

const CommunityCard = ({ title, description, icon }) => {
  return (
    <div className="w-[400px] h-[250px] flex flex-col items-center text-center gap-[16px] px-[24px] py-[32px] bg-neutral-silver rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-[50px] h-[50px]" />
      <h3 className="text-[1.5rem] font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CommunityCard;
