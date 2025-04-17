import React from 'react';
import Logo0 from "../../assets/clientLogos/Logo0.png";
import Logo1 from "../../assets/clientLogos/Logo1.png";
import Logo2 from "../../assets/clientLogos/Logo2.png"; 
import Logo3 from "../../assets/clientLogos/Logo3.png"; 
import Logo4 from "../../assets/clientLogos/Logo4.png"; 
import Logo5 from "../../assets/clientLogos/Logo5.png";
import image9 from "../../assets/clientLogos/image-9.png";

const logos = [Logo0, Logo1, Logo2, Logo3, Logo4, Logo5];

const Tesla = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-[350px] h-[350px] flex items-center justify-center">
            <img src={image9} alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 text-base leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, 
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet 
            elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue 
            ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. 
            Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id 
            sem dignissim finibus ac sit amet magna.
          </p>

          <div className="mt-6">
            <h4 className="text-green-600 font-semibold text-lg">Tim Smith</h4>
            <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            {logos.map((logo, index) => (
              <div key={index} className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-contain" />
              </div>
            ))}
            <button className="text-green-600 font-medium ml-auto hover:underline">
              Meet all customers →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tesla;
