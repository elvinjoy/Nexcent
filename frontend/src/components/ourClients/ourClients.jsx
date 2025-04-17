import React from "react";
import { motion } from "framer-motion";
import Logo0 from "../../assets/clientLogos/Logo0.png";
import Logo1 from "../../assets/clientLogos/Logo1.png";
import Logo2 from "../../assets/clientLogos/Logo2.png"; 
import Logo3 from "../../assets/clientLogos/Logo3.png"; 
import Logo4 from "../../assets/clientLogos/Logo4.png"; 
import Logo5 from "../../assets/clientLogos/Logo5.png";

const logos = [Logo0, Logo1, Logo2, Logo3, Logo4, Logo5];

const OurClients = () => {
    return (
        <div className="max-w-[1440px] w-full h-[250px] flex flex-col items-center gap-[24px] px-[144px] py-[40px] bg-white overflow-hidden mx-auto">
            <h3 className="text-[2rem] font-bold text-gray-800">Our Clients</h3>

            <p className="text-gray-700 text-center text-[1.25rem]">
                We have been working with some Fortune 500+ clients
            </p>
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-[50px] w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="w-[140px] h-[70px] flex items-center justify-center">
                            <img src={logo} alt={`Logo ${index}`} className="max-w-full max-h-full" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default OurClients;
