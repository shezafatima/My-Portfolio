"use client";
import React from "react";
import { FaPenNib } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { TbSeo } from "react-icons/tb";
const Services = () => {
  return (
    <div id="Services">

    <section className="text-gray-600 body-font bg-purple-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-6xl  sm:font-bold text-3xl font-medium title-font mb-2  text-purple-800">
            Services
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed sm:text-2xl text-gray-500 mt-3">
          Delivering tailored solutions to elevate your brand s online presence.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg  bg-purple-400 drop-shadow-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-500 mb-4">
                <div className="text-2xl text-purple-800">
                  <FaPenNib />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Graphic Designing
              </h2>
              <p className="leading-relaxed text-base">
                Our graphic design services bring your brand to life with
                visually stunning and effective designs that capture your
                audience s attention.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-purple-400 drop-shadow-lg ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white mb-4">
                <div className="text-2xl  text-purple-800">
                  <FaVideo />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Video Editing
              </h2>
              <p className="leading-relaxed text-base">
                Expert Video Editing Our video editing services craft engaging,
                high-quality videos that captivate your audience and elevate
                your brand.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg   bg-purple-400 drop-shadow-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-500 mb-4">
                <div className="text-2xl  text-purple-800">
                  <FaBullhorn />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Social Media Marketing
              </h2>
              <p className="leading-relaxed text-base">
               We crafts tailored strategies to
                boost engagement, drive website traffic, and generate leads
                across Facebook, Instagram, and more.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg   bg-purple-400 drop-shadow-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-500 mb-4">
                <div className="text-3xl  text-purple-800">
                  <SiNextdotjs />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Next.js Website Development
              </h2>
              <p className="leading-relaxed text-base">
                Build lightning-fast, scalable, and secure websites with our
                Next.js development expertise. 
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg   bg-purple-400 drop-shadow-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-500 mb-4">
                <div className="text-3xl  text-purple-800">
                  <BsStars />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                AI Image and Video Generation
              </h2>
              <p className="leading-relaxed text-base">
                Unlock the power of AI-driven image and video creation. Our
                expert services generate stunning, custom images and videos for
                you.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg   bg-purple-400 drop-shadow-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-500 mb-4">
                <div className="text-4xl  text-purple-800">
                  <TbSeo />
                </div>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Search Engine Optimization:
              </h2>
              <p className="leading-relaxed text-base">
                 Our expert SEO services drive
                targeted traffic, increase conversions, and elevate your brand s
                online presence.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    </div>
  );
}
export default Services;