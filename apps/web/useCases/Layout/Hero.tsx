// "use client";


// export default function Hero() {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen ">
//       <div className="bg-white h-[100vh] w-full flex flex-wrap justify-center items-center rounded-lg shadow-xl p-8">
//         <div className="h-[600px] w-full md:w-[60%] bg-white border border-gray-300 rounded-lg shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <FeatureCard
//             icon="ri-palette-line"
//             title="Skill categories"
//             description="(e.g., programming, robotics, Design, Writing)"
//             color="text-purple-600"
//           />
//           <FeatureCard
//             icon="ri-quill-pen-ai-line"
//             title="Responsive Design"
//             subtitle="student-friendly interface"
//             description="(e.g., Easy navigation, discussion forums)"
//             color="text-blue-700"
//           />
//           <FeatureCard
//             icon="ri-smartphone-line"
//             title="Animation & transition"
//             subtitle="interactive learning"
//             description="(e.g., live sessions, recorded courses, interactive Q&A)"
//             color="text-red-600"
//           />
//           <FeatureCard
//             icon="ri-brain-line"
//             title="Developer Experience"
//             subtitle="Mentor & Peer Support"
//             description="(e.g., Experienced students as mentors, verified skill level)"
//             color="text-green-600"
//           />
//         </div>

//         <div className="h-auto md:h-[90%] w-full md:w-[30%] bg-white border border-gray-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
//           <div className="text-3xl font-bold text-center text-gray-800">Why V-UI?</div>
//           <ul className="mt-6 text-lg space-y-3 text-gray-700">
// <li className="hover:underline hover:text-gray-800">⚡ <b className="text-indigo-600">Lightning-fast performance</b> → Fast skill matching</li>
// <li className="hover:underline hover:text-gray-800">🎨 <b className="text-indigo-600">Flexible components</b> → Diverse Learning Options</li>
// <li className="hover:underline hover:text-gray-800">🚀 <b className="text-indigo-600">Developer-friendly API</b> → Easy-to-Use Dashboard</li>
// <li className="hover:underline hover:text-gray-800">🎭 <b className="text-indigo-600">Customizable theming</b> → Personalized Learning Paths</li>
// <li className="hover:underline hover:text-gray-800">🔍 <b className="text-indigo-600">Accessibility built-in</b> → Inclusive Learning for All</li>
// <li className="hover:underline hover:text-gray-800">📱 <b className="text-indigo-600">Responsive design</b> → Works on Any Device</li>
//           </ul>
//         </div>
//       </div>

// <div className="h-auto md:h-[45vh] w-full md:w-[92vw] bg-white border border-gray-400 rounded-xl shadow-lg mt-10 p-8">
// <div className="text-2xl font-bold text-gray-900 text-center">Meet The Creators</div>
// <div className="flex space-x-4 mt-6 overflow-x-auto">
//   <div className="flex-none w-64 bg-white shadow-md rounded-lg p-4">
//     <div className="text-lg text-gray-800 text-center">
//       <p className="font-semibold">Manas Mishra</p>
//       <p className="text-sm text-gray-600">Student of IIIT RAICHUR</p>
//     </div>
//   </div>

//   <div className="flex-none w-64 bg-white shadow-md rounded-lg p-4">
//     <div className="text-lg text-gray-800 text-center">
//       <p className="font-semibold">Varuna Kumari</p>
//       <p className="text-sm text-gray-600">Student of IIIT RAICHUR</p>
//     </div>
//   </div>

//   <div className="flex-none  bg-white shadow-md rounded-lg p-4 w-200">
//     <div className="text-lg text-gray-800 text-center">
//       <p className="font-semibold">Sri Ram</p>
//       <p className="text-sm text-gray-600">Student of IIIT RAICHUR</p>
//     </div>
//   </div>


// </div>



//   </div>
// </div>

//   );
// }

// interface FeatureCardProps {
//   icon: string;
//   title: string;
//   subtitle?: string;
//   description: string;
//   color: string;
// }

// function FeatureCard({ icon, title, subtitle, description, color }: FeatureCardProps) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-xl flex items-start p-5 shadow-md transition-all hover:scale-105 hover:shadow-lg">
//       <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full shadow-sm">
//         <i className={`${icon} text-2xl text-gray-700`}></i>
//       </div>
//       <div className="pl-5">
//         <p className="text-lg font-semibold text-gray-800">
//           <b className={color}>{title}</b>{" "}
//           {subtitle && (
//             <span className="text-gray-600">
//               to <b className={color}>{subtitle}</b>
//             </span>
//           )}
//         </p>
//         <p className="text-sm text-gray-600 mt-1">{description}</p>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { name: "Manas Mishra", description: "Student of IIIT RAICHUR" },
    { name: "Varuna Kumari", description: "Student of IIIT RAICHUR" },
    { name: "Sri Ram", description: "Student of IIIT RAICHUR" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-[7px]">
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 p-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
      >
        &#9654;
      </button>
      <div className="carousel-container w-full overflow-hidden">
        <div
          className="carousel-track flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-full max-w-[800px] bg-white shadow-lg rounded-lg p-10 mx-4 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="text-lg text-gray-800 text-center">
                <p className="font-semibold text-xl">{card.name}</p>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white h-[100vh] w-full flex flex-wrap justify-center items-center rounded-lg shadow-xl p-8">
        <div className="h-[600px] w-full md:w-[60%] bg-white border border-gray-300 rounded-lg shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            icon="ri-palette-line"
            title="Skill categories"
            description="(e.g., programming, robotics, Design, Writing)"
            color="text-purple-600"
          />
          <FeatureCard
            icon="ri-quill-pen-ai-line"
            title="Responsive Design"
            subtitle="student-friendly interface"
            description="(e.g., Easy navigation, discussion forums)"
            color="text-blue-700"
          />
          <FeatureCard
            icon="ri-smartphone-line"
            title="Animation & transition"
            subtitle="interactive learning"
            description="(e.g., live sessions, recorded courses, interactive Q&A)"
            color="text-red-600"
          />
          <FeatureCard
            icon="ri-brain-line"
            title="Developer Experience"
            subtitle="Mentor & Peer Support"
            description="(e.g., Experienced students as mentors, verified skill level)"
            color="text-green-600"
          />
        </div>

        <div className="h-auto md:h-[90%] w-full md:w-[30%] bg-white border border-gray-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-3xl font-bold text-center text-gray-800">Why V-UI?</div>
          <ul className="mt-6 text-lg space-y-3 text-gray-700">
            <li className="hover:underline hover:text-gray-800">
              ⚡ <b className="text-indigo-600">Lightning-fast performance</b> → Fast skill matching
            </li>
            <li className="hover:underline hover:text-gray-800">
              🎨 <b className="text-indigo-600">Flexible components</b> → Diverse Learning Options
            </li>
            <li className="hover:underline hover:text-gray-800">
              🚀 <b className="text-indigo-600">Developer-friendly API</b> → Easy-to-Use Dashboard
            </li>
            <li className="hover:underline hover:text-gray-800">
              🎭 <b className="text-indigo-600">Customizable theming</b> → Personalized Learning Paths
            </li>
            <li className="hover:underline hover:text-gray-800">
              🔍 <b className="text-indigo-600">Accessibility built-in</b> → Inclusive Learning for All
            </li>
            <li className="hover:underline hover:text-gray-800">
              📱 <b className="text-indigo-600">Responsive design</b> → Works on Any Device
            </li>
          </ul>
        </div>
      </div>

      {/* Integrated Carousel */}
      <div className="h-auto md:h-[45vh] w-full md:w-[92vw] bg-white border border-gray-400 rounded-xl shadow-lg mt-10 p-8">
        <div className="text-2xl font-bold text-gray-900 text-center text-[50px]">Meet The Creators</div>
        <Carousel />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, subtitle, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl flex items-start p-5 shadow-md transition-all hover:scale-105 hover:shadow-lg">
      <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full shadow-sm">
        <i className={`${icon} text-2xl text-gray-700`}></i>
      </div>
      <div className="pl-5">
        <p className="text-lg font-semibold text-gray-800">
          <b className={color}>{title}</b>{" "}
          {subtitle && (
            <span className="text-gray-600">
              to <b className={color}>{subtitle}</b>
            </span>
          )}
        </p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
