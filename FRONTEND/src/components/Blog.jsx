import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../assets/assets';
import { ExternalLink, FileText } from 'lucide-react';

const Blog = () => {
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
                id="blog"
                className={`py-16  transition-colors duration-300 ${isVisible["blog"] ? "animate-fadeIn" : "opacity-0"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
                        <span className="flex items-center justify-center">
                            <FileText size={32} className="mr-2" /> Blog
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 mb-4">{post.excerpt}</p>
                                    <a
                                        // href={post.url}
                                        onClick={() => {
                                            navigate(`/blog`);
                                            scrollTo(0, 0);
                                        }}
                                        className="inline-flex items-center text-gray-800 hover:underline"
                                    >
                                        Read More <ExternalLink size={16} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button
                            onClick={() => navigate("/blog")}
                            className="inline-flex items-center cursor-pointer px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
                        >
                            View All Posts <ExternalLink size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog
