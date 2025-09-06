import { useState, useEffect, useContext } from "react";

import { TbSql } from "react-icons/tb";
import {
  Code,
  Briefcase,
  Sparkles,
  FileText,
  Send,
  ExternalLink,
  Github,
  ArrowDown
} from "lucide-react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import AboutUs from "../components/AboutUs";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
const Home = () => {
  // For animation on scroll
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();
  // const {backendUrl}
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

    // const sendEmail = async () => {

    // }

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


  // const { backendUrl } = useContext(AppContext);
  // useEffect(() => {
  //   console.log(backendUrl);
  // }, []);

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitMessage, setSubmitMessage] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const { data } = await axios.post(
  //       `${backendUrl}/api/send`,
  //       {
  //         email: formData.email,
  //         name: formData.name,
  //         subject: formData.subject,
  //         message: formData.message,
  //       },
  //       {
  //         withCredentials: true, // Only set for this specific request
  //       }
  //     );

  //     if (data.success) {
  //       toast.success(data.message);
  //       setSubmitMessage("Thank you! Your message has been sent successfully.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });

  //       // Clear success message after 5 seconds
  //       setTimeout(() => {
  //         setSubmitMessage("");
  //       }, 2000);
  //       scrollTo(0, 0);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message ||
  //       error.message ||
  //       "Failed to send message"
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Project />

      {/* Tech Stack Section - Redesigned with Logos */}
      <TechStack />

      {/* About Section */}
      <AboutUs />


      {/* Blog Section */}
      <Blog />


      {/* Contact Section */}
      <Contact />


    </div>
  );
};

export default Home;
