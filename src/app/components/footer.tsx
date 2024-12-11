import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="Footer" className="bg-purple-400">
      <footer className=" body-font bg-fixed ">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
          <div className="flex title-font font-medium items-center md:justify-start justify-center">
            <span className="ml-3 text-xl font-bold  font-style:italic text-purple-800 sm:6xl">
            Sheza Fatima
            </span>
          </div>
          <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Sheza Fatima.Created by Sheza Fatima
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
         <Link 
         target="_blank"
         href={"https://www.facebook.com/profile.php?id=61566351903578&mibextid=ZbWKwL"} className="ml-3 text-gray-900 text-xl hover:text-purple-800">
         <BsFacebook /></Link>
         <Link
         target="_blank"
         href={"https://www.youtube.com/@shizacrafts7250"}
         
         className="ml-3 text-gray-900 text-xl hover:text-purple-800">
         <BsYoutube />
         </Link>
         <Link 
          target="_blank"
         href={"https://www.instagram.com/1824digital_sf?igsh=ZGUzMzM3NWJiOQ=="} className="ml-3 text-gray-900 text-xl  hover:text-purple-800">
         <BsInstagram />
         </Link>
         <Link target="_blank"
         href={"https://github.com/shezafatima"} className="ml-3 hover:text-purple-800 text-xl text-gray-900">
          <BsGithub />
         </Link>

         <Link target="_blank"
         href={"https://www.linkedin.com/in/sheza-fatima-437b17333/"} className="ml-3 text-gray-900 text-xl hover:text-purple-800">
         <BsLinkedin />
         </Link>
        
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
