import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 lg:px-10  lg:py-5 ">
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        <Link to="/">
          <div className="text-xl font-bold">
            S A I &nbsp; P R I Y A&nbsp; T R A D I N G &nbsp; C O.
          </div>
        </Link>
        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
           <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 flex gap-1.5"
          >
            <HomeIcon fontSize="medium" />
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 flex gap-1.5"
          >
            <InfoIcon fontSize="medium" />
            <li>About</li>
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 flex gap-1.5"
          >
            <ShoppingCartIcon  fontSize="medium"/>
            <li>Products</li>
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 flex gap-1.5"
          >
            <PhotoLibraryIcon fontSize="medium" />
            <li>Gallery</li>
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 flex gap-1.5"
          >
            <ContactMailIcon fontSize="medium"/> 
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
