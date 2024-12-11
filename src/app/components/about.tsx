import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl sm:font-bold text-3xl mb-4  drop-shadow-lg text-purple-800">
              About me
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500 text-lg sm:text-2xl">
              I thrive. As a visionary creative technologist, I seamlessly merge
              imagination with technical expertise. With a versatile skill set
              encompassing sketching, art, design, web development, and graphic
              design, I craft captivating experiences that inspire and engage.
              Driven by the philosophy that Creativity is the intersection of
              art and science, I continuously push boundaries, exploring new
              ways to harmonize aesthetics and functionality. With a passion for
              fusing artistry with technological precision, I deliver innovative
              solutions that elevate brands, captivate audiences, and leave
              lasting impressions. Let s collaborate and bring visionary ideas
              to life.
            </p>
            <div className="flex justify-center">
               <Link href="https://static-resume-sh.netlify.app/" target="_blank">
              <button className="inline-flex text-white  bg-purple-800  py-2 px-6 border font-semibold focus:outline-none hover:bg-white hover:border-purple-800 hover:text-purple-800 rounded text-lg">
               View Resume
              </button>
               </Link>
               
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded sm:w-[450px]"
              alt="hero"
              src="/assests/me5.png"
              width={500}
              height={500}
            />
          </div>

        </div>
        
      </section>
    </div>
  );
};
export default About;
