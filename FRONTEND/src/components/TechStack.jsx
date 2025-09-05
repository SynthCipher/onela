import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaFire,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbSql } from "react-icons/tb";

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const techStack = [
    {
      name: "React",
      logo: <FaReact className="text-blue-500 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "HTML5",
      logo: <FaHtml5 className="text-orange-600 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "CSS3",
      logo: <FaCss3Alt className="text-blue-600 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: <FaJs className="text-yellow-400 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: <SiTailwindcss className="text-cyan-400 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      logo: <FaNodeJs className="text-green-600 text-4xl" />,
      category: "Backend",
    },
    {
      name: "Python",
      logo: <FaPython className="text-[#3776AB] text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Express",
      logo: <SiExpress className="text-gray-800 text-4xl" />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      logo: <SiMongodb className="text-green-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "Firebase",
      logo: <FaFire className="text-yellow-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "SQL",
      logo: <TbSql className="text-blue-400 text-4xl" />,
      category: "Database",
    },
    {
      name: "Git",
      logo: <FaGitAlt className="text-red-500 text-4xl" />,
      category: "Tools",
    },
    {
      name: "Figma",
      logo: <SiFigma className="text-purple-500 text-4xl" />,
      category: "Tools",
    },
    {
      name: "VS Code",
      logo: <BiLogoVisualStudio className="text-blue-500 text-4xl" />,
      category: "Tools",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredTech =
    activeFilter === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeFilter);

  return (
    <div>
      <section
        id="tech-stack"
        className={`py-16  transition-colors duration-300 ${isVisible["tech-stack"] ? "animate-fadeIn" : "opacity-0"
          }`}
      >
        <div className="py-16 px-4 ">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Tech Stack
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${activeFilter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tech icons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{tech.logo}</div>
                  <h3 className="font-medium text-lg text-gray-800 mb-1">
                    {tech.name}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
