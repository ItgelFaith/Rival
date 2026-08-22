"use client";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-screen h-[30vh] bg-black my-20">
        <h1 className="md:text-8xl text-4xl font-bold text-center bg-gray-600 py-10">
          Responsive <span className="text-blue-600">Footer</span> using {""}
          <span className="text-blue-600">Next.js</span> & {""}
          <span className="text-blue-600">tailwindcss</span>
        </h1>
      </div>
      <div className="bg-gray-50 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 py-16">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
            <ul className="list-none">
              <p className="text-gray-800 font-bold text-xl pb-6 border-b border-gray-200">
                Product
              </p>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-blue-600 cursor-pointer transition">
                Stocks
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-blue-600 cursor-pointer transition">
                Futures & Options
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-blue-600 cursor-pointer transition">
                Mutual Funds
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-blue-600 cursor-pointer transition">
                Fixed deposits
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
            <ul className="list-none">
              <p className="text-gray-800 font-bold text-xl pb-6 border-b border-gray-200">
                Company the business of finance is a complex and dynamic field
                that requires a deep understanding of financial markets,
                investment strategies, and risk management. It is essential
              </p>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                About
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                Blog
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                Products
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                Pricing
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                Careers
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-purple-600 cursor-pointer transition">
                Press & Media
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
            <ul className="list-none">
              <p className="text-gray-800 font-bold text-xl pb-6 border-b border-gray-200">
                Support
              </p>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-green-600 cursor-pointer transition">
                Contact
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-green-600 cursor-pointer transition">
                Support Portal
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-green-600 cursor-pointer transition">
                List of Charges
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-green-600 cursor-pointer transition">
                Downloads & Resources
              </li>
              <li className="text-gray-600 text-sm py-2 font-medium hover:text-green-600 cursor-pointer transition">
                Videos
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center text-center p-5 border-t border-gray-300 bg-blue-300">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-5 justify-center items-center">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition transform hover:scale-125 duration-300"
              >
                <FacebookIcon sx={{ fontSize: 32 }} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition transform hover:scale-125 duration-300"
              >
                <TwitterIcon sx={{ fontSize: 32 }} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition transform hover:scale-125 duration-300"
              >
                <InstagramIcon sx={{ fontSize: 32 }} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition transform hover:scale-125 duration-300"
              >
                <TelegramIcon sx={{ fontSize: 32 }} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 transition transform hover:scale-125 duration-300"
              >
                <YouTubeIcon sx={{ fontSize: 32 }} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © 1967-1969 all rights reserved | built with ❤️ by Davaajargalll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  ``;
};

export default Footer;
