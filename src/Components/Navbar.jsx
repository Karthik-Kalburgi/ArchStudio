import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-500 ${
        navbarBg ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: navbarBg ? "#F5F5F5" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="text-xl font-bold cursor-pointer" style={{ color: "#6A7FDB" }}>
          ArchStudio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-800">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/projects", label: "Projects" },
            { to: "/packages", label: "Packages" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors duration-300 pb-1 ${
                    isActive
                      ? "font-semibold text-[#6A7FDB] border-b-2 border-[#6A7FDB]"
                      : "hover:text-[#6A7FDB]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className="px-4 py-1 rounded-md border-2 border-[#6A7FDB] text-[#6A7FDB] transition-colors duration-300 hover:bg-[#6A7FDB] hover:text-white"
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/packages", label: "Packages" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-50 text-[#6A7FDB]"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="#6A7FDB"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition-colors duration-300 ${
                  isActive
                    ? "font-semibold text-[#6A7FDB]"
                    : "text-gray-800 hover:text-[#6A7FDB]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center px-4 py-2 rounded-md border-2 border-[#6A7FDB] text-[#6A7FDB] transition-colors duration-300 hover:bg-[#6A7FDB] hover:text-white"
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
