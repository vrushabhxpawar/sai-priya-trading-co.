import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">About Us</h1>
          <p className="text-lg sm:text-xl font-semibold text-center">
            “Quality and trust are built over time — with consistency,
            commitment, and customer satisfaction.”
          </p>
          <p className="text-justify text-base sm:text-lg leading-relaxed">
            Sai Priya Trading Co, established in 2020 in Vadodara, has quickly
            grown into a trusted name in the steel tubes and pipes industry.
            With a strong focus on customer satisfaction, we specialize in
            providing a wide range of MS Pipes, GI Pipes, SS Pipes, Rectangular
            Pipes, Square Pipes, Round Pipes, and other steel products that meet
            international quality standards. Within just a few years, we have
            built a reputation for reliability, quality assurance, and timely
            delivery, serving clients across diverse industries including
            construction, infrastructure, fabrication, and engineering.
          </p>
          <p className="text-justify text-base sm:text-lg leading-relaxed">
            Our commitment is to exceed customer expectations by ensuring:
            Consistent supply of high-quality products. Customizable sizes and
            specifications as per requirements. Competitive pricing without
            compromising on quality. A professional approach with integrity and
            trust at the core.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
