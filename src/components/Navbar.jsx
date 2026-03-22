import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaOpencart } from "react-icons/fa";

const navbarData = [
  { id: 1, name: "Furniture", path: "furniture" },
  { id: 2, name: "Shop", path: "shop" },
  { id: 3, name: "About Us", path: "aboutUs" },
  { id: 4, name: "Contact", path: "contact" },
];

const NavItems = () => {
  return (
    <div className="hidden sm:flex items-center gap-4 md:gap-8 text-[1rem] font-medium ">
      {navbarData.map((nav) => (
        <div key={nav.id}>
          <NavLink
            to={nav.path}
            className={({ isActive }) =>
              isActive
                ? " text-orange-500 "
                : "hover:text-orange-500    transition-all duration-300 before:left-0 before:w-0   before:transition-all before:duration-300 before:absolute"
            }
          >
            {nav.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        <div
          to="/"
          onClick={scrollTop}
          className="font-bold text-xl tracking-wider "
        >
          IBRAHIM.
        </div>

        {/* Desktop Menu */}
        <NavItems />
        <div>
          {" "}
          <button class="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
            <FaOpencart className="text-xl" />
            <sup class="absolute top-0 right-0 h-4 w-4 rounded-full bg-orange-400 flex items-center justify-center text-sm">0</sup>
          </button>
          {/* Mobile Menu Icon */}
          <CiMenuFries
            className="text-3xl cursor-pointer md:hidden text-teal-400"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed inset-0 ${
          mobileSidebarOpen ? "w-full" : "w-0"
        }  overflow-hidden bg-teal-900 backdrop-blur shadow-xl rounded-lg z-[200] text-sm transition-all`}
      >
        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
