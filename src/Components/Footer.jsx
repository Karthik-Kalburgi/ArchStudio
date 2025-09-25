// Footer.jsx
import React from "react";

const flaticon = {
  logo: "https://cdn-icons-png.flaticon.com/512/8091/8091002.png",
  phone: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
  mail: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  map: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/733/733561.png"
};

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-14 pb-8 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        {/* Logo + About */}
        <div className="mb-8 md:mb-0 flex-1">
          <div className="flex items-center mb-4">
            <img src={flaticon.logo} alt="logo" className="w-9 h-9 mr-3" />
            <span
              className="text-2xl font-bold tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", color: "#6A7FDB" }}
            >
              ArchStudio
            </span>
          </div>
          <p
            className="text-gray-600 mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Designing the future of spaces with a commitment to sustainability,
            innovation, and client success.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img
                src={flaticon.facebook}
                alt="Facebook"
                className="w-7 h-7 hover:opacity-80 transition"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={flaticon.twitter}
                alt="Twitter"
                className="w-7 h-7 hover:opacity-80 transition"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={flaticon.linkedin}
                alt="LinkedIn"
                className="w-7 h-7 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 flex-1">
          <h5
            className="text-lg font-semibold mb-5"
            style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}
          >
            Quick Links
          </h5>
          <ul className="space-y-3 text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
            <li>
              <a href="/" className="hover:text-[#6A7FDB] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#6A7FDB] transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#6A7FDB] transition">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-[#6A7FDB] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#6A7FDB] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h5
            className="text-lg font-semibold mb-5"
            style={{ fontFamily: "'Inter', sans-serif', color: '#333'" }}
          >
            Contact Us
          </h5>
          <div className="flex items-start mb-4">
            <img src={flaticon.map} alt="map" className="w-6 h-6 mr-3" />
            <span className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              12, Main Street, Bangalore, India
            </span>
          </div>
          <div className="flex items-start mb-4">
            <img src={flaticon.phone} alt="phone" className="w-6 h-6 mr-3" />
            <span className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-start">
            <img src={flaticon.mail} alt="mail" className="w-6 h-6 mr-3" />
            <span className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              info@archstudio.com
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8" style={{ fontFamily: "'Inter', sans-serif" }}>
        © {new Date().getFullYear()} ArchStudio. All rights reserved.
      </div>
    </footer>
  );
}
