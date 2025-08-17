import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full pt-10 pb-6 px-4 md:px-10 lg:px-40 lg:pt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        
        {/* Logo / Name */}
        <div>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            S A I &nbsp; P R I Y A <br /> T R A D I N G &nbsp; C O.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div>
            <p className="text-lg md:text-xl font-semibold">C O N T A C T &nbsp; U S</p>
            <p className="text-lg md:text-2xl font-semibold mt-1">S A I P R I Y A &nbsp; T R A D I N G &nbsp; C O.</p>
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            79, Manek Estate, B/h. Narsinhji Estate, Opp. Yamuna Mill, <br />
            Pratapnagar, Vadodara, Gujarat, India.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Contact for sale: <br /> +91 9824293588, +91 9033243588
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm md:text-base mt-8 md:mt-12">
        © 2025 SAI PRIYA TRADING CO. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
