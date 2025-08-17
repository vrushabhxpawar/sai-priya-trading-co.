import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3, // show 3 images at once
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex justify-center items-center px-4 sm:px-6 md:px-10 py-10 bg-neutral-300">
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            {[
              "outside.webp",
              "outside2.webp",
              "stock1.webp",
              "stock2.webp",
              "inside.webp",
              "inside2.webp",
            ].map((img, idx) => (
              <div key={idx} className="px-2 sm:px-3">
                <img
                  src={img}
                  alt={`gallery-${idx}`}
                  className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;
