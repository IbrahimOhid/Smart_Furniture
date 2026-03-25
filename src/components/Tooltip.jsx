import React from "react";

const Tooltip = ({
  colors = ["bg-orange-400", "bg-[#00D6C9]", "bg-[#7C7C7C]"],
  hoverTooltip = "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300",
}) => {
  return (
    <div>
      <div className="group relative flex flex-col items-center gap-2 cursor-pointer">
        {/* Dot */}
        <div className="w-6 h-6 rounded-full bg-white/25 border border-gray-300">
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-md mx-auto mt-2" />
        </div>

        {/* Tooltip */}
        <div
          className={`absolute bottom-8 flex flex-col items-center  ${hoverTooltip}`}
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-white/20  rounded-full">
            {colors.map((color, index) => (
              <span
                key={index}
                className={`w-3.5 h-3.5 ${color} rounded-full border border-gray-300`}
              ></span>
            ))}
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/25 "></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
