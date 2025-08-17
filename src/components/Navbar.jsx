import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 lg:px-10 lg:py-5">
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        <Link to="/">
        <img src="SaiPriyaLogo.jpg" className="h-[50px] w-[180px]" />
        </Link>
        {/* Hamburger Button */}
        
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold lg:text-xl">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex gap-1.5 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
            }
          >
            <HomeIcon fontSize="medium" />
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex gap-1.5 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
            }
          >
            <InfoIcon fontSize="medium" />
            <li>About</li>
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex gap-1.5 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
            }
          >
            <ShoppingCartIcon fontSize="medium" />
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex gap-1.5 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
            }
          >
            <PhotoLibraryIcon fontSize="medium" />
            <li>Gallery</li>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex gap-1.5 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
            }
          >
            <ContactMailIcon fontSize="medium" />
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
