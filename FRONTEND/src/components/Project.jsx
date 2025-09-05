import React, { useEffect, useState } from 'react'
import { projects } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const Project = () => {
    const [isVisible, setIsVisible] = useState({});
    const navigate = useNavigate();

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

        // Fix scrolling behavior for anchor links
        const fixScrolling = () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // Get navbar height
                        const navbar = document.querySelector("nav");
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;

                        // Calculate position with offset
                        const targetPosition =
                            targetElement.getBoundingClientRect().top +
                            window.pageYOffset -
                            navbarHeight -
                            20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: "smooth",
                        });
                    }
                });
            });
        };

        fixScrolling();

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div>
            <section
                id="projects"
                className={`py-16  bg-gray-50 transition-colors duration-300 ${isVisible["projects"] ? "animate-fadeIn" : "opacity-0"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-800 hover:underline"
                                        >
                                            <ExternalLink size={16} className="mr-1" /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-500 hover:text-gray-800 hover:underline"
                                        >
                                            <Github size={16} className="mr-1" /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            onClick={() => {
                                navigate("/projects");
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }, 100);
                            }}
                            className="inline-flex cursor-pointer items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
                        >
                            View More Projects <Github size={18} className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project
