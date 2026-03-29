import React from "react";

import Button from "../../components/Button";

const WhyChoose = () => {
  const whyChooseData = [
    {
      id: 1,
      title: "Luxury facilities",
      description:
        "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
      id: 2,
      title: "Affordable Price",
      description:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      id: 3,
      title: "Many Choices",
      description:
        "We provide many unique workspace choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section className="container-section">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Left Title */}
        <div className="md:col-span-1 text-center md:text-left flex items-start md:items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Why <br className="hidden sm:block" /> Choosing Us
          </h2>
        </div>

        {/* Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseData.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

           <Button/>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
