import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  return (
   <div className="flex flex-col min-h-screen overflow-x-clip">
  <Navbar />

  {/* Hero Slider */}
  <div className="w-full">
    <Slider {...settings} className="relative mb-8 w-full">
      {["/Img1.jpg","/Img2.jpg","/Img3.jpg","/Img4.jpg","/Img5.jpg"].map((src, idx) => (
        <div key={idx} className="w-full">
          <img
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
          />
        </div>
      ))}
    </Slider>
  </div>

  {/* Associates Section */}
  <section className="w-full flex flex-col gap-6 justify-center items-center py-10 bg-neutral-100">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">Our Associates</h2>
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
      {["/TataSteel.png","/Surya.png","/Jindal.png","/AsianTubes.png","/Apollo.png", "HML.jpg"].map((logo, idx) => (
        <img key={idx} src={logo} alt={`associate-${idx}`} className="h-12 sm:h-16 md:h-20 object-contain hover:cursor-pointer"/>
      ))}
    </div>
  </section>

  {/* Products Section */}
  <section className="w-full flex flex-col gap-6 justify-center items-center py-10 bg-neutral-300">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-6xl px-4">
      {[
        {src:"/MsAngle.jpg", name:"MS ANGLE"},
        {src:"/MsSquare.jpg", name:"MS SQUARE"},
        {src:"/MsChannel.jpg", name:"MS CHANNEL"},
        {src:"/Sheet.webp", name:"MS & CRC SHEET"},
        {src:"/GiPipes.jpg", name:"GI PIPES"},
        {src:"/Img4.jpg", name:"CRC PIPE"},
      ].map((product, idx) => (
        <div key={idx} className="flex flex-col gap-2 justify-center items-center">
          <img src={product.src} alt={product.name} className="rounded-sm h-[200px] sm:h-[220px] md:h-[250px] w-full object-cover"/>
          <p className="text-xl sm:text-2xl font-semibold">{product.name}</p>
        </div>
      ))}
    </div>
    <Link to="/products">
      <button className="mt-6 bg-neutral-900 rounded-md py-2 px-4 text-white hover:bg-gray-800 transition">
        Load More
      </button>
    </Link>
  </section>

  <Footer />
</div>

  );
}

export default HomePage;
