import React from "react";
import { MyDetails } from "../constants";

const About = () => {
  return (
    <section  id="about" className="c-space h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans text-center mb-4">
          About Me
        </h2>

        <div className="bg-black-600/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-gray-600/50 overflow-hidden shadow-lg">
                  <img
                    src="public/assets/pfp.jpg"
                    alt="Danish - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white font-generalsans">
                  Software Developer & AI Enthusiast
                </h3>

                {MyDetails.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-300 text-base md:text-lg leading-relaxed font-generalsans"
                  >
                    {item}
                  </p>
                ))}

                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-generalsans"></p>
              </div>

              {/* Skills or highlights */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-generalsans border border-purple-600/30">
                  Python
                </span>
                <span className="px-3 py-1 bg-red-600/20 text-orange-300 rounded-full text-sm font-generalsans border border-orange-600/30">
                  Rust
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-generalsans border border-blue-600/30">
                  React(JS/TS)
                </span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-generalsans border border-purple-600/30">
                  AI Tools
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm font-generalsans border border-green-600/30">
                  Full Stack
                </span>
                <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm font-generalsans border border-orange-600/30">
                  Modern Apps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
