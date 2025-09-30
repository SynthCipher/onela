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
import { Phone } from "lucide-react"; // 👈 add this at the top
import { assets } from "./assets/assets";
// import Blog from "./pages/Blog";

const App = () => {

  const location = useLocation();
  // const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/projects" && location.pathname !== "/blog") {
      document.title = "Onela – Ladakh’s One-Stop Digital Solution | Web, Apps, Branding";
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

      <a href="tel:+919682574824"
        className="fixed bottom-20 right-[calc(1.5rem+20px)] md:bottom-24 md:right-[calc(5rem+20px)] z-50"
      >
        <div className="relative flex items-center justify-center">
          {/* Pulse animation */}
          <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <div className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 transition-colors rounded-full shadow-lg p-3">
            <Phone className="h-6 w-6 text-white" />
          </div>
        </div>
      </a>

      {/* <a
        href="tel:9682574824"
        className="fixed bottom-20 right-[calc(1.5rem+20px)] md:bottom-24 md:right-[calc(5rem+20px)] z-50"
      >
        <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 transition-colors rounded-full shadow-lg p-3 animate-pulse ring-4 ring-green-300">
          <Phone className="h-6 w-6 text-white drop-shadow-lg" />
        </div>
      </a> */}

      <a
        href="https://lasna.vercel.app/"
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
