import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = () => {
  return (
      <div className="flex items-center gap-2 text-orange-500 font-medium cursor-pointer group-hover:gap-3 transition-all duration-300">
        <span className="text-sm">More Info</span>
        <IoIosArrowRoundForward className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1" />
      </div>
  );
};

export default Button;
