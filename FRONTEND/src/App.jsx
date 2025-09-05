import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
import { Analytics } from "@vercel/analytics/react"
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
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
