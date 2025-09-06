import React, { useEffect, useState } from 'react'
import { assets, teamMembers } from '../assets/assets'
import { Send } from 'lucide-react';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState({});
    const [mobileCardStates, setMobileCardStates] = useState({});

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

        // Mobile card animation observer
        const mobileCardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth < 768) { // Only for mobile screens
                        const cardId = entry.target.dataset.cardId;
                        if (cardId) {
                            // Show overlay after 1 second delay
                            setTimeout(() => {
                                setMobileCardStates((prev) => ({
                                    ...prev,
                                    [cardId]: { showOverlay: true }
                                }));

                                // Hide overlay after 3 seconds
                                setTimeout(() => {
                                    setMobileCardStates((prev) => ({
                                        ...prev,
                                        [cardId]: { showOverlay: false }
                                    }));
                                }, 3000);
                            }, 1000);
                        }
                    }
                });
            },
            { threshold: 0.9 } // Show when 30% of card is visible
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });

        // Observe team member cards for mobile animation
        const teamCards = document.querySelectorAll("[data-card-id]");
        teamCards.forEach((card) => {
            mobileCardObserver.observe(card);
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
            teamCards.forEach((card) => {
                mobileCardObserver.unobserve(card);
            });
        };
    }, []);

    return (
        <div>
            {/* About Section */}
            <section
                id="about"
                className={`py-16 bg-gray-50 transition-colors duration-300 ${isVisible["about"] ? "animate-fadeIn" : "opacity-0"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
                        About Onela
                    </h2>

                    {/* Company Overview */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-lg text-gray-600 mb-6">
                            Onela is a dedicated software development company based in Ladakh,
                            committed to delivering innovative and customized digital solutions
                            that empower local businesses and communities.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Specializing in web development, mobile applications, and enterprise
                            software, Onela blends modern technology with a deep understanding
                            of regional needs. Our mission is to drive digital transformation
                            in Ladakh by providing reliable, scalable, and user-friendly
                            software services.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            At Onela, we prioritize quality, customer satisfaction, and
                            continuous innovation to help our clients thrive in a rapidly
                            evolving digital landscape.
                        </p>
                    </div>

                    {/* Team Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">
                            Our Team
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member) => {
                                const isMobileOverlayVisible = mobileCardStates[member.id]?.showOverlay || false;

                                return (
                                    <div
                                        key={member.id}
                                        data-card-id={member.id}
                                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900 hover:to-gray-900 transition-all duration-500 transform hover:shadow-2xl"
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Original bottom overlay faded out on hover (desktop) or when mobile overlay is shown */}
                                        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${isMobileOverlayVisible ? 'md:opacity-100 opacity-0' : ''}`}>
                                            <h4 className="text-lg font-semibold text-white mb-1 group-hover:opacity-0 transition-opacity duration-300">
                                                {member.name}
                                            </h4>
                                            <p className="text-sm text-gray-300 group-hover:opacity-0 transition-opacity duration-300">
                                                {member.role}
                                            </p>
                                        </div>

                                        {/* Detailed info overlay shown on hover (desktop) or scroll trigger (mobile) */}
                                        <div className={`absolute inset-0 bg-black p-6 rounded-2xl flex flex-col justify-center transition-all duration-300 ${isMobileOverlayVisible
                                            ? 'md:bg-opacity-0 md:opacity-0 bg-opacity-80 opacity-100'
                                            : 'bg-opacity-0 opacity-0 group-hover:opacity-80'
                                            }`}>
                                            <h4 className={`text-2xl font-bold text-white mb-2 transition-transform duration-300 delay-100 ${isMobileOverlayVisible
                                                ? 'md:translate-y-4 md:group-hover:translate-y-0 translate-y-0'
                                                : 'translate-y-4 group-hover:translate-y-0'
                                                }`}>
                                                {member.name}
                                            </h4>
                                            <p className={`text-lg text-blue-400 font-medium mb-3 transition-transform duration-300 delay-150 ${isMobileOverlayVisible
                                                ? 'md:translate-y-4 md:group-hover:translate-y-0 translate-y-0'
                                                : 'translate-y-4 group-hover:translate-y-0'
                                                }`}>
                                                {member.role}
                                            </p>
                                            <div className={`w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mb-3 transition-transform duration-300 delay-200 ${isMobileOverlayVisible
                                                ? 'md:scale-x-0 md:group-hover:scale-x-100 scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                                }`}></div>
                                            <p className={`text-sm text-gray-300 mb-2 transition-transform duration-300 delay-250 ${isMobileOverlayVisible
                                                ? 'md:translate-y-4 md:group-hover:translate-y-0 translate-y-0'
                                                : 'translate-y-4 group-hover:translate-y-0'
                                                }`}>
                                                {member.specialization}
                                            </p>
                                            <p className={`text-xs text-gray-300 mb-1 transition-transform duration-300 delay-300 ${isMobileOverlayVisible
                                                ? 'md:translate-y-4 md:group-hover:translate-y-0 translate-y-0'
                                                : 'translate-y-4 group-hover:translate-y-0'
                                                }`}>
                                                {member.degree}
                                            </p>
                                            <p className={`text-xs text-gray-200 transition-transform duration-300 delay-350 ${isMobileOverlayVisible
                                                ? 'md:translate-y-4 md:group-hover:translate-y-0 translate-y-0'
                                                : 'translate-y-4 group-hover:translate-y-0'
                                                }`}>
                                                {member.college}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs