import React from "react";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
  return (
    <section
      className=" h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundColor: "#000",
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-white">
          <div>
            
           

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight text-center">
              Make your interior more <br></br> minimalistic & modern
            </h1>

            <p className="text-sm md:text-base mb-8">
              “A gentleman knows his appearance is very important that shows his
              characteristic.” - Unknown
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              
              <a
                href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop jewelry now"
                className="rounded px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Shop Now
              </a>

              <button
                aria-label="View new items"
                className="rounded px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                New Items
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;