import React from "react";

const CreateFooter = ({ imageSrc, heading, paragraph, buttonText, onButtonClick }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 p-12 bg-white max-w-7xl mx-auto">

            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={imageSrc}
                    alt="Dynamic visual"
                    className="w-[442px] h-[433px] object-contain"
                />
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {heading}
                </h2>
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                    {paragraph}
                </p>
                <button
                    onClick={onButtonClick}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md w-fit"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CreateFooter;
