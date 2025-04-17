import React from "react";

const DynamicComponent = ({ imageSrc, heading, paragraph, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={imageSrc} alt="Dynamic visual" className="w-90 h-auto object-contain" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-gray-600 mb-6">{paragraph}</p>
        <button
          onClick={onButtonClick}
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white py-2 px-5 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicComponent;
