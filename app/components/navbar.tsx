
"use client";
import { MdCancelPresentation } from "react-icons/md";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
   
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="ml-1 text-3xl font-semibold whitespace-nowrap text-purple-800 dark:text-white">
          Sheza Fatima
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div
            className={`hidden md:flex space-x-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium text-xl flex sticky flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-purple-600 rounded md:bg-transparent md:text-purple-600 md:p-0 dark:text-white md:dark:text-purple-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <div className=" text-purple-800 text-4xl ">

< MdCancelPresentation />
</div>
              ) : (
                
              <svg
              className="w-9 h-9 text-purple-800 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                ></path>
            </svg>
              )}
          </button>
        </div>
      </div>
   
      {isOpen && (
        <div className="md:hidden">
          <div className="px-3 pt-5 pb-3 space-y-3  flex flex-col items-center bg-purple-800">
            <a
              href="/"
              className="block text-gray-700   text-xl hover:text-white"
            >
              Home
            </a>
            <a
              href="#About"
              className="block text-gray-700   text-xl hover:text-white"
            >
              About
            </a>
            <a
              href="#Services"
              className="block text-gray-700   text-xl hover:text-white"
            >
              Services
            </a>
            <a
              href="#Skills"
              className="block text-gray-700   text-xl hover:text-white"
            >
             Skills
            </a>
            <a
              href="#Projects"
              className="block text-gray-700   text-xl hover:text-white"
            >
           Projects
            </a>{" "}
            <a
              href="#Contact"
              className="block text-gray-700   text-xl hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
