// Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1582719478170-45c5a1a9650f?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    description:
      "Creating functional, beautiful interiors that reflect your lifestyle and the latest trends.",
    points: [
      "Space planning",
      "Furniture selection",
      "Lighting design",
      "Material sourcing"
    ]
  },
  {
    title: "Exterior Design",
    image:
      "https://images.unsplash.com/photo-1618221673190-8c58a6b8c3b6?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
    description:
      "Designing striking facades and outdoor elevations that balance form and function.",
    points: [
      "Façade treatments",
      "Color palettes",
      "Material durability",
      "Sustainability"
    ]
  },
  {
    title: "Landscape Architecture",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
    description:
      "Crafting outdoor spaces that integrate nature, architecture, and human needs.",
    points: [
      "Plant selection",
      "Hardscape design",
      "Irrigation planning",
      "Ecological balance"
    ]
  },
  {
    title: "3D Modelling",
    image:
      "https://images.unsplash.com/photo-1581092338938-afa5b9e67e85?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/1084/1084981.png",
    description:
      "Building realistic 3D models for visualization, virtual walkthroughs, and presentations.",
    points: [
      "High-poly renders",
      "Virtual reality",
      "Texture mapping",
      "Animation"
    ]
  },
  {
    title: "Planning & Consultation",
    image:
      "https://images.unsplash.com/photo-1581092160619-7099f0bc7efa?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/2919/2919609.png",
    description:
      "Expert guidance on feasibility, zoning regulations, and master planning.",
    points: [
      "Site analysis",
      "Regulatory review",
      "Concept development",
      "Risk assessment"
    ]
  },
  {
    title: "Layout Planning",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    icon: "https://cdn-icons-png.flaticon.com/512/2917/2917992.png",
    description:
      "Optimizing space flow and functional relationships for efficiency and comfort.",
    points: [
      "Circulation design",
      "Zoning strategies",
      "Furniture layouts",
      "Accessibility"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#333"
          }}
        >
          Our Services
          <br />
          What We Offer
        </h2>
        <p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#666"
          }}
        >
          From conceptual planning to 3D visualization, ArchStudio delivers a
          comprehensive suite of services tailored to your needs.
        </p>
      </div>

      <motion.div
        className="mt-12 max-w-7xl mx-auto grid gap-8 px-6 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
            className="bg-white rounded-3xl overflow-hidden transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={svc.image}
                alt={svc.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div
                className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-[#6A7FDB]/10"
                aria-hidden="true"
              >
                <img src={svc.icon} alt="" className="w-8 h-8" />
              </div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#333"
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-base mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#555"
                }}
              >
                {svc.description}
              </p>
              <ul
                className="list-disc list-inside space-y-1 text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#666"
                }}
              >
                {svc.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
