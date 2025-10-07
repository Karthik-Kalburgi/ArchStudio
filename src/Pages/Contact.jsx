import React from "react";

const flaticon = {
  map: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  phone: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
  mail: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
};

export default function Contact() {
  return (
    <section className="py-20 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#333",
            }}
          >
            Get in <span style={{ color: "#6A7FDB", fontWeight: "bold" }}>Touch</span>
          </h2>
          <p
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#666",
            }}
          >
            Have a project in mind? We'd love to hear from you.<br />
            Share your vision with us and let's make something extraordinary together!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-white rounded-3xl shadow-lg p-8 w-full">
            <h3 className="text-2xl font-semibold mb-7" style={{ fontFamily: "'Inter', sans-serif", color: "#6A7FDB" }}>
              Send Us a Message
            </h3>
            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "#222" }}>
                Your Name
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 rounded-lg bg-[#F5F8FF] border border-gray-200 focus:border-[#6A7FDB] focus:outline-none"
                placeholder="Enter your name"
                required
                aria-label="Your Name"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "#222" }}>
                Your Email
              </label>
              <input
                type="email"
                className="w-full py-3 px-4 rounded-lg bg-[#F5F8FF] border border-gray-200 focus:border-[#6A7FDB] focus:outline-none"
                placeholder="Enter your email"
                required
                aria-label="Your Email"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="mb-8">
              <label className="block mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif', color: '#222'" }}>
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full py-3 px-4 rounded-lg bg-[#F5F8FF] border border-gray-200 focus:border-[#6A7FDB] focus:outline-none"
                placeholder="How can we help you?"
                required
                aria-label="Your Message"
                style={{ fontFamily: "'Inter', sans-serif" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-[#6A7FDB] hover:bg-[#5563c1] transition transform hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 18 }}
            >
              Send Message
            </button>
          </form>

          {/* Contact Info / Sidebar */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6 mb-6">
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>
                Contact Information
              </h3>
              <div className="flex items-start mb-4">
                <img src={flaticon.map} alt="map" className="w-7 h-7 mr-3" />
                <div>
                  <span className="block font-medium" style={{ color: "#333", fontFamily: "'Inter', sans-serif" }}>Location</span>
                  <span className="block text-sm" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
                    12, Main Street, Bangalore, India
                  </span>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <img src={flaticon.phone} alt="phone" className="w-7 h-7 mr-3" />
                <div>
                  <span className="block font-medium" style={{ color: "#333", fontFamily: "'Inter', sans-serif" }}>Phone</span>
                  <span className="block text-sm" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
                    +91 98765 43210
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <img src={flaticon.mail} alt="mail" className="w-7 h-7 mr-3" />
                <div>
                  <span className="block font-medium" style={{ color: "#333", fontFamily: "'Inter', sans-serif" }}>Email</span>
                  <span className="block text-sm" style={{ color: "#555", fontFamily: "'Inter', sans-serif" }}>
                    info@archstudio.com
                  </span>
                </div>
              </div>
              <div className="border-b mt-6 mb-6 border-gray-200"></div>
              <div className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#999" }}>
                <div>We respond within 2 hours.</div>
                <div className="mt-2">Hours: <b>Mon-Fri</b>: 9am - 6pm<br /><b>Sat-Sun</b>: By Appointment</div>
              </div>
            </div>
            {/* Google map embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-200 aspect-w-16 aspect-h-9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.030584971657!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a4323baf%3A0x506e3d0d5beeb2e4!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1638950652998!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
