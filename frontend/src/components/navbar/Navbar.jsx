import React from "react";
import logo from "../../assets/clientLogos/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F5F7FA] h-[84px] flex justify-center">
      <div className="w-full max-w-[1440px] flex items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Nexcent Logo"
            className="h-14 w-14 object-contain"
          />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={`text-base ${
                  item === "Home" ? "font-semibold text-black" : "font-normal text-[#4D4D4D]"
                } hover:text-black`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-[#28a745] text-base font-medium hover:underline">
            Login
          </button>
          <button className="bg-[#28a745] text-white text-base font-medium px-6 py-2 rounded-md hover:opacity-90">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
