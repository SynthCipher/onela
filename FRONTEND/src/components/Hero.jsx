import React from "react";
import { Code, Cloud, Server, ArrowDown, Smartphone, Cpu } from "lucide-react";

const Hero = () => {
  // FloatingIcon component
  const FloatingIcon = ({ children, className, style }) => {
    return (
      <div
        className={`absolute rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center z-0 ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  };

  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative py-20"
      >
        {/* Header - Now with responsive positioning */}
        <div className="flex flex-col items-center justify-center text-center mt-10 z-10 mb-8 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Onela
            </span>
          </h1>
          <div className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 whitespace-nowrap">
            One Ladakh • One Vision • One Solution
          </div>
        </div>

        {/* Main Content Container - Now uses flex-grow for proper spacing */}
        <div className="container 2xl:mx-25 xl:mx-25 lg:mx-10 mx-auto w-full flex-grow flex items-center">
          {/* Main Content - Side by Side Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 w-full">
            {/* Left Content - Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-0 z-20 relative order-2 lg:order-1">
              {/* Content */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-2 sm:mb-2 md:mb-2 leading-relaxed font-light">
                <span className="font-bold text-gray-700"></span>Transforming
                ideas into powerful digital solutions with
                <span className="font-semibold text-gray-900">
                  {" "}
                  cutting-edge technology.
                </span>
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                From the heart of Ladakh, two passionate computer science
                graduates delivering world-class web development, mobile apps,
                and IoT solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 text-base sm-[100px]:px-4 sm:py-2 sm:text-sm bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Request a Quote
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 text-base sm:px-4 sm:py-2 sm:text-sm border-2 border-gray-800 text-gray-800 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Main Circle Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 animate-pulse-slow"></div>

                {/* Rotating Outer Ring */}
                <div className="absolute inset-2 lg:inset-3 rounded-full border-2 lg:border-3 border-dashed border-blue-300 animate-spin-slow"></div>

                {/* Inner Geometric Shapes */}
                <div className="absolute inset-4 lg:inset-6 rounded-full bg-gradient-to-br from-white to-blue-50 shadow-xl lg:shadow-2xl flex items-center justify-center">
                  {/* Central Tech Hub - Responsive sizing */}
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg lg:shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-500">
                    <div className="text-white">
                      <Code size={20} className="lg:w-6 lg:h-6 animate-pulse" />
                    </div>

                    {/* Orbiting Icons - Responsive sizing */}
                    <div className="absolute inset-0 animate-spin-reverse">
                      <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-md lg:shadow-lg flex items-center justify-center">
                        <Smartphone
                          size={10}
                          className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white"
                        />
                      </div>
                      <div className="absolute -right-2 sm:-right-3 lg:-right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 shadow-md lg:shadow-lg flex items-center justify-center">
                        <Cpu
                          size={10}
                          className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white"
                        />
                      </div>
                      <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md lg:shadow-lg flex items-center justify-center">
                        <Cloud
                          size={10}
                          className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white"
                        />
                      </div>
                      <div className="absolute -left-2 sm:-left-3 lg:-left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-md lg:shadow-lg flex items-center justify-center">
                        <Server
                          size={10}
                          className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Data Points - Smaller and positioned closer */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 right-4 sm:right-6 lg:right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-blue-500 animate-ping"></div>
                  <div
                    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-3 sm:left-4 lg:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-500 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-6 sm:top-8 lg:top-12 left-2 sm:left-3 lg:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-cyan-500 animate-ping"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>

                {/* Outer Decorative Elements - Smaller and responsive */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md lg:shadow-xl transform rotate-12 animate-float"></div>
                <div
                  className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-md sm:rounded-lg lg:rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-sm lg:shadow-lg transform -rotate-12 animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded sm:rounded-md lg:rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 shadow-sm lg:shadow-md transform rotate-45 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Network Connection Lines - Simplified for smaller size */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-70"
                  viewBox="0 0 300 300"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#8B5CF6"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M75,75 Q150,40 225,110 T260,220"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-draw"
                  />
                  <path
                    d="M40,180 Q110,140 180,200 T270,140"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-draw"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icons - Better positioned */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingIcon
            className="top-24 left-8 w-10 h-10 animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            <Code className="text-blue-600" size={20} />
          </FloatingIcon>
          <FloatingIcon
            className="top-32 right-4 w-8 h-8 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <Smartphone className="text-green-600" size={16} />
          </FloatingIcon>
          <FloatingIcon
            className="bottom-32 hidden md:inline-flex left-10 w-8 h-8 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            <Cpu className="text-purple-600" size={16} />
          </FloatingIcon>
          <FloatingIcon
            className="bottom-24 hidden md:inline-flex right-16 w-7 h-7 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <Cloud className="text-cyan-400" size={14} />
          </FloatingIcon>
          <FloatingIcon
            className="top-40 right-20 w-7 h-7 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <Server className="text-orange-400" size={14} />
          </FloatingIcon>
        </div>

        {/* Scroll Down Arrow - Better positioned */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="animate-bounce">
            <a
              href="#tech-stack"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowDown
                size={24}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(var(--rotation, 0deg));
            }
            50% {
              transform: translateY(-8px) rotate(var(--rotation, 0deg));
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.03);
            }
          }

          @keyframes draw {
            0% {
              stroke-dasharray: 0 500;
            }
            100% {
              stroke-dasharray: 500 0;
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 25s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 20s linear infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          .animate-draw {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: draw 4s ease-in-out infinite alternate;
          }

          /* Set rotation custom properties for floating elements */
          .absolute.-top-3.-right-3,
          .absolute.-top-4.-right-4,
          .absolute.-top-6.-right-6 {
            --rotation: 12deg;
          }
          .absolute.-bottom-2.-left-2,
          .absolute.-bottom-3.-left-3,
          .absolute.-bottom-4.-left-4 {
            --rotation: -12deg;
          }
          .absolute.top-0.left-0 {
            --rotation: 45deg;
          }

          /* Ensure proper spacing on smaller screens */
          @media (max-height: 700px) and (min-width: 1024px) {
            .container {
              max-height: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Hero;

{
  /* Stats Section */
}
{
  /* <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
            50+
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Projects Delivered
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
            2
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Expert Developers
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">
            100%
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Client Satisfaction
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
            24/7
          </div>
          <div className="text-gray-600 text-sm sm:text-base">Support</div>
        </div>
      </div> */
}
