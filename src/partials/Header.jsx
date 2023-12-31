import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/restorationHouseMinistries-logo.png";

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link className="block group" to="/" aria-label="logo">
              <img src={Logo} alt="logo" className="h-[150px]" />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#newhere"
                >
                  New Here?
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#about"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#services"
                >
                  Services
                </a>
              </li>
              {/* <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#ministries"
                >
                  Ministries
                </a>
              </li> */}
              <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-gray-600 decoration-[#fea602] decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="ml-3">
                <Link
                  className="btn-sm text-white bg-[#dead54] hover:bg-[#fea602] hover:text-white w-full shadow-sm"
                  to="/"
                >
                  Give
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
