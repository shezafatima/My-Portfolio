//  "use client"
//  // components/SkillsSection.js
// import React, { useEffect, useRef, useState } from 'react';

// const skills = [
//   { name: 'HTML', level: 95 },
//   { name: 'CSS', level: 90 },
//   { name: 'JavaScript', level: 90 },
//   { name: 'TypeScript', level: 90 },
//   { name: 'Tailwind CSS', level: 90 },
//   { name: 'Graphic Designing', level: 80 },
//   { name: 'Next.js', level: 70 },
//   { name: 'SEO', level: 60 },
//   { name: 'Python', level: 50 },
// ];

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.8 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div id='Skills'>

//     <section ref={sectionRef} className="bg-purple-100 py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl sm:font-bold sm:text-6xl text-center text-purple-800 mb-6">
//           My Skills
//         </h2>
//         <div className="space-y-4">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-1">
//                 <span className="text-purple-500 sm:text-2xl font-semibold">{skill.name}</span>
//                 <span className="text-purple-600 sm:text-xl  font-semibold">{skill.level}%</span>
//               </div>
//               <div className="relative w-full bg-gray-300 rounded-full h-2">
//                 <div
//                   className={`absolute top-0 left-0 h-full bg-purple-700 rounded-full transition-all duration-1000`} // Slowed down to 1000ms
//                   style={{ width: isVisible ? `${skill.level}%` : '0%' }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//               </div>
//   );
// };

// export default Skills;
"use client";

import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Graphic Designing', level: 80 },
  { name: 'Next.js', level: 70 },
  { name: 'SEO', level: 60 },
  { name: 'Python', level: 50 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); 
      }
    };
  }, []);

  return (
    <div id="Skills">
      <section ref={sectionRef} className="bg-purple-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:font-bold sm:text-6xl text-center text-purple-800 mb-6">
            My Skills
          </h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-purple-500 sm:text-2xl font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-purple-600 sm:text-xl font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative w-full bg-gray-300 rounded-full h-2">
                  <div
                    className={`absolute top-0 left-0 h-full bg-purple-700 rounded-full transition-all duration-1000`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
