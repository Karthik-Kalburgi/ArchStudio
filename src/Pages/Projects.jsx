// Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Luxury Villa",
    type: "Residential",
    location: "Bangalore, India",
    description:
      "A contemporary villa blending minimalist architecture with lavish indoor and outdoor amenities. Features include floor-to-ceiling windows and an infinity pool, offering luxury and tranquility for urban family living.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185008-5a3818fa3f35?auto=format&fit=crop&w=800&q=80",
    ]
  },
  {
    title: "Corporate Headquarters",
    type: "Commercial",
    location: "Mumbai, India",
    description:
      "A state-of-the-art commercial headquarters designed for sustainability and productivity. The building features collaborative open spaces, advanced green technologies, and a striking glass façade.",
    images: [
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Eco Resort Retreat",
    type: "Commercial",
    location: "Goa, India",
    description:
      "A beachside eco-resort harmonizing luxury with nature. Thoughtfully designed bungalows, organic gardens, and lush landscapes provide guests with a serene, eco-conscious getaway.",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}
          >
            Our Projects
          </h2>
          <p
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", color: "#666" }}
          >
            Showcasing creativity across residential, commercial, and resort spaces.<br />Each project is a testament to modern architectural excellence and thoughtful planning.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-[#F5F5F5] rounded-3xl shadow hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <div className="flex overflow-x-auto space-x-2 pb-2">
                  {proj.images.map((img, i) => (
                    <img
                      src={img}
                      alt={proj.title}
                      key={i}
                      className="h-64 w-80 object-cover rounded-2xl mb-2 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className="px-3 py-1 text-xs rounded-full bg-blue-200 text-blue-700 font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {proj.type}
                  </span>
                  <span
                    className="px-3 py-1 text-xs rounded-full bg-green-200 text-green-700 font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {proj.location}
                  </span>
                </div>
                <h3
                  className="text-2xl font-semibold mt-1 mb-3"
                  style={{ fontFamily: "'Inter', sans-serif', color: '#222'" }}
                >
                  {proj.title}
                </h3>
                <p
                  className="text-base mb-4 text-gray-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
