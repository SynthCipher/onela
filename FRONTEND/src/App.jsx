import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import { assets } from "./assets/assets";
// import Blog from "./pages/Blog";

const App = () => {

  const location = useLocation();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // Check if the current path is NOT /projects or /blog
    if (location.pathname !== "/projects" && location.pathname !== "/blog") {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        document.title = `Onela - One Ladakh's Software Solution Provider ${Date.now()}`;
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [location.pathname]);
  return (
    <div className="mx-4">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        {/* <Route path="/blog/:id" element={<Blog />}></Route> */}
      </Routes>


      <a
        href="https://www.onela.in/"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-20 z-50"
      >
        <div className="relative p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
          {/* Inner Button */}
          <div className="flex items-center justify-center bg-white rounded-full shadow-lg p-2">
            <img
              src={assets.lasnaLogo}
              alt="Lasna"
              className="h-4 md:h-5 w-auto"
            />
          </div>
        </div>
      </a>



      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
