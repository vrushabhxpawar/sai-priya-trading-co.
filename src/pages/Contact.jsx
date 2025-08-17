import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col justify-center items-center py-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-6 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="flex items-center gap-3 text-lg sm:text-xl">
              <ManageAccountsIcon fontSize="large" />
              Mr. Ravindra Pawar (Proprietor)
            </p>

            <p className="flex items-start gap-3 text-base sm:text-lg">
              <LocationOnIcon fontSize="large" />
              <span>
                Saipriya Trading Co. <br />
                79, Manek Estate, B/h. Narsinhji Estate, <br />
                Opp. Yamuna Mill, Pratapnagar, Vadodara-390004, <br />
                Gujarat, India.
              </span>
            </p>

            <p className="flex items-center gap-3 text-base sm:text-lg">
              <PhoneIcon fontSize="large" />
              <span>
                +91 9824293588 <br /> +91 9033243588
              </span>
            </p>

            <p className="flex items-center gap-3 text-base sm:text-lg">
              <MailIcon fontSize="large" />
              saipriyatradingco@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4 shadow-lg shadow-blue-100 rounded-lg p-6 sm:p-8">
              <input
                type="text"
                placeholder="Name*"
                className="border rounded-sm px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border rounded-sm px-3 py-2 w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="border rounded-sm px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="border rounded-sm px-3 py-2 w-full"
              />
              <textarea
                placeholder="Message*"
                rows={4}
                className="border rounded-sm px-3 py-2 w-full"
              ></textarea>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <div className="w-full px-4 md:px-8 lg:px-16 py-6">
        <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.760419791896!2d73.2181673!3d22.2837803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc56af892b74b%3A0xe87de41593559862!2sSai%20Priya%20Trading%20Co!5e0!3m2!1sen!2sin!4v1691792652823!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
