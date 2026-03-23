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

const NavItems = ({ mobile = false, onClick }) => {
  return (
    <div
      className={
        mobile
          ? "flex flex-col items-center gap-6 mt-10 text-lg "
          : "hidden sm:flex items-center gap-4 md:gap-8 text-[1rem] "
      }
    >
      {navbarData.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.path}
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "hover:text-orange-500    transition-all duration-300 before:left-0 before:w-0   before:transition-all before:duration-300 before:absolute"
          }
        >
          {nav.name}
        </NavLink>
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
      <header className="fixed top-0 right-0 left-0 z-50 transition duration-300 ease-in-out text-white">
        {/* Navbar */}
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={scrollTop}
          className="font-bold text-xl tracking-wider text-white"
        >
          SMART
        </NavLink>

        {/* Desktop Menu */}
        <NavItems />

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Cart */}
          <div className="p-2  rounded-full transition-colors duration-200 relative">
            <FaOpencart className="text-xl" />
            <sup className="absolute top-0 right-0 h-4 w-4 rounded-full bg-orange-400 flex items-center justify-center text-sm text-white">
              0
            </sup>
          </div>

          {/* Mobile Menu Icon */}
          <CiMenuFries
            className="text-3xl cursor-pointer md:hidden text-orange-500"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div>
        {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-full bg-black opacity-95 z-[200] transform transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <RxCross2
            className="text-3xl cursor-pointer text-orange-500 hover:text-red-500"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>

        {/* Mobile Nav */}
        <NavItems
          mobile={true}
          onClick={() => setMobileSidebarOpen(false)}
        />
      </div>
      </nav>
      </header>
    </>
  );
};

export default Navbar;