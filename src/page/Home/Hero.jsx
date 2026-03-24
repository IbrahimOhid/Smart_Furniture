import React from "react";
import bannerImg from "../../assets/banner.png";
import { CiSearch } from "react-icons/ci";


const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundColor: "#000",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          
          {/* Center Grid */}
          <div className="grid place-items-center min-h-screen text-center">
            
            <div className="w-full max-w-2xl flex flex-col items-center gap-4 sm:gap-6">
              
              {/* Heading */}
              <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-white">
                Make your interior more{" "}
                <br className="hidden sm:block" />
                minimalistic & modern
              </h1>

              {/* Paragraph */}
              <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-200 leading-relaxed max-w-md">
                Turn your room with panto into a lot more minimalist
                <br className="hidden sm:block" />
                and modern with ease and speed
              </p>

              {/* Search Box */}
              <div className="w-full max-w-md mt-2">
                <div className="flex items-center border border-white/60 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 focus-within:ring-2 focus-within:ring-orange-400 transition">
                  
                  {/* Input */}
                  <input
                    type="text"
                    placeholder="Search furniture"
                    className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-gray-300 outline-none"
                  />

                  {/* Button */}
                  <button className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                    
                    {/* Icon */}
                    <CiSearch  className="w-4 h-4 sm:w-5 sm:h-5 text-white"/>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;