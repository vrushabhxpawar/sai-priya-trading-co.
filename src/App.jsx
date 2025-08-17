import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import AboutUs from "../src/pages/AboutUs.jsx";
import Products from "../src/pages/Products.jsx";
import Gallery from "../src/pages/Gallery.jsx";
import Contact from "../src/pages/Contact.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
