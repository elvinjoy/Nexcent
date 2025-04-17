import React from 'react';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from "../../assets/clientLogos/FooterLogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#263238] text-white py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo and Copyright Section */}
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center">
                            <img src={Logo} alt="Nexcent Logo" className="h-6" />
                        </div>

                        <p className="text-sm">Copyright © 2020 Nexcent ltd.</p>
                        <p className="text-sm">All rights reserved</p>

                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-gray-300 transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-300 transition">
                                <FaDribbble size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-300 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-gray-300 transition">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-gray-300 transition">About us</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Support</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-gray-300 transition">Help center</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition">Terms of service</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition">Legal</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition">Privacy policy</a></li>
                                <li><a href="#" className="hover:text-gray-300 transition">Status</a></li>
                            </ul>
                        </div>

                        {/* Stay up to date Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Stay up to date</h3>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-gray-700 text-white px-4 py-2 rounded w-full pr-10"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;