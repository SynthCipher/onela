import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { Phone } from 'lucide-react';

const Contact = () => {
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

        const fixScrolling = () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const navbar = document.querySelector("nav");
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
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

    const { backendUrl } = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/send`,
                {
                    email: formData.email,
                    name: formData.name,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    withCredentials: true,
                }
            );
            console.log(formData.email, formData.name, formData.phone, formData.subject, formData.message);

            if (data.success) {
                toast.success(data.message);
                setSubmitMessage("Thank you! Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => setSubmitMessage(""), 2000);
                scrollTo(0, 0);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                error.message ||
                "Failed to send message"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <section
                id="contact"
                className={`py-16 bg-gray-50 transition-colors duration-300 ${isVisible["contact"] ? "animate-fadeIn" : "opacity-0"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
                        <span className="flex items-center justify-center">
                            <Phone size={32} className="mr-2" /> Contact Us Today
                        </span>
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <form
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
                            onSubmit={handleSubmit}
                        >
                            {submitMessage && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                                    {submitMessage}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                                        placeholder="Your phone number"
                                        required
                                    />

                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-6 py-3 cursor-pointer bg-gray-800 text-white rounded-md ${isSubmitting ? "opacity-70" : "hover:bg-gray-700"
                                    } focus:outline-none focus:ring-1 focus:ring-gray-800 transition-colors duration-300`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
