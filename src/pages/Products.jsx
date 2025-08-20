import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Products() {
const products = [
  { image: "/round-pipe.webp", name: "CRC Round Pipe" },
  { image: "/mild-steel-angle.webp", name: "MS Angle" },
  { image: "/mild-steel-flat.webp", name: "MS Flat" },
  { image: "/mild-steel-pipe.webp", name: "CRC Square Pipe" },
  { image: "/mild-steel-sheet.webp", name: "MS Sheet" },
  { image: "/ms-channel.webp", name: "MS Channel" },
  { image: "/ms-rectangular.webp", name: "CRC Rectangular" },
  { image: "/ms-square-rectangle.webp", name: "MS Square & Rectangle" },
  { image: "/ms-checker.webp", name: "MS Checker Plate" },
  { image: "/ms-hexaangle.webp", name: "MS Hexa Angle" },
  { image: "/ms-dtype.webp", name: "MS D-Type" },
  { image: "/all-size.webp", name: "All Sizes Draw" },
  { image: "/oval-pipe.jpeg", name: "CRC Oval pipe" },
  { image: "/bright-bar.jpeg", name: "MS Bright Bar" },
  { image: "/I-beam.jpeg", name: "I-Beam" },
];


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-10 bg-neutral-100 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {products.map((p, idx) => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
              <img
                src={p.image}
                alt={idx}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{p.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Products;
