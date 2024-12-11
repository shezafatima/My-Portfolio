
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type ProjectItem = {
  title: string;
  img: string;
  link?: string;  
};

type ProjectCategory = {
  type: string;
  items: ProjectItem[];
};

const projects: ProjectCategory[] = [
  {
    type: 'Art Projects',
    items: [
      { title: "Tiger's Gaze", img: '/assests/lion.jpg' },
      { title: 'The Honourable Governor', img: '/assests/m.jpg' },
      { title: 'Feline friend', img: '/assests/d.jpg' },
      { title: 'Spirit of Freedom', img: '/assests/j.jpg' },
      { title: 'Wings of Courage', img: '/assests/n.jpg' },
      { title: "Stunning cheetah", img: '/assests/tiger.jpg' },
    ],
  },
  {
    type: 'Coding Projects',
    items: [
      {
        title: 'Landing page using Tailwind.css',
        img: '/assests/Phone.PNG',
        link: 'https://simple-landingpage-sh.netlify.app/',
      },
      {
        title: 'Burger website  using Html , CSS and Javascript',
        img: '/assests/Burger web.png',
        link: 'https://burger-website-shezafatima.netlify.app/',
      },
      {
        title: 'Food Website using HTML, CSS, and JS',
        img: '/assests/web.png',
        // link: 'https://your-deployed-link.com/food-website',
      },
      {
        title: 'Resume Builder using HTML, CSS, and TS',
        img: '/assests/resume.png',
        link: 'https://resume-builder-sh.netlify.app/',
      },
      {
        title: 'Calculator using HTML, CSS, and JS',
        img: '/assests/Capture.PNG',
        link: 'https://simple-calculator-sh.netlify.app/',
      },
      {
        title: 'CLI-based Typescript ATM machine',
        img: '/assests/atm.jpg',
        link: 'https://www.npmjs.com/package/sf-atm-machine',
      },
      {
        title: 'CLI-based Typescript Word Counter',
        img: '/assests/word-counter.jpg',
        link: 'https://www.npmjs.com/package/sf_word_counter',
      },
      {
        title: 'CLI-based Typescript Adventure game',
        img: '/assests/game.jpg',
        link: 'https://www.npmjs.com/package/sf_adventure_game',
      },
    ],
  },
  {
    type: 'Graphic Design',
    items: [
      { title: 'Social Media Post', img: "/assests/women's clothes.png" },
      { title: 'Social Media Post', img: '/assests/post.png' },
      { title: 'Social Media Post', img: '/assests/post1.png' },
      { title: 'Logo', img: '/assests/C.png' },
      { title: 'Logo', img: '/assests/caffeine.png' },
      { title: 'Logo', img: '/assests/design.png' },
    ],
  },
];

const Projects = () => {
  return (
    <div id='Projects' className="py-10 bg-purple-100">
      <h2 className="text-3xl sm:text-6xl sm:font-bold text-center text-purple-800 mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <h3 className="text-2xl sm:text-5xl sm:font-bold sm:mb-12 text-purple-700 mb-4">{project.type}</h3>
            <div className="grid grid-cols-2 gap-5">
              {project.items.map((item, i) => (
                <div
                  key={i}
                  className="transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
                >
                  {/* If the item has a link, wrap it with an anchor tag */}
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
                        layout="responsive"
                        width={500}
                        height={500}
                        objectFit="cover"
                      />
                      <p className="mt-2 text-center text-purple-500">{item.title}</p>
                    </Link>
                  ) : (
                    <div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
                        layout="responsive"
                        width={500}
                        height={500}
                        objectFit="cover"
                      />
                      <p className="mt-2 text-center text-purple-500">{item.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
