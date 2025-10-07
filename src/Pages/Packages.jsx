import React from "react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic",
    price: "₹1999",
    description: "Perfect for small-scale architecture projects",
    features: [
      "Site Analysis & Survey",
      "Basic Design Concept",
      "2D Floor Plans",
      "Initial Consultation"
    ],
    buttonColor: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-white",
    bgColor: "bg-white"
  },
  {
    name: "Standard",
    price: "₹3999",
    description: "Ideal for medium-sized residential and commercial projects",
    features: [
      "Everything in Basic",
      "3D Visualization",
      "Detailed Floor Plans",
      "Material Selection Consultation",
      "1 Revision Session"
    ],
    buttonColor: "bg-yellow-400",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-50",
    popular: true
  },
  {
    name: "Premium",
    price: "₹7999",
    description: "For large-scale and complex architecture needs",
    features: [
      "Everything in Standard",
      "Custom Architecture Design",
      "Interior Design Consultations",
      "3D Walkthroughs",
      "Unlimited Revisions"
    ],
    buttonColor: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-white",
    bgColor: "bg-white"
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Packages() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2
          className="text-4xl md:text-5xl font-light leading-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#333"
          }}
        >
          OUR ARCHITECTURE<br />
          PACKAGES
        </h2>
      </div>

      <motion.div
        className="mt-12 max-w-7xl mx-auto grid gap-8 px-6 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
            className={`rounded-2xl overflow-hidden border ${pkg.borderColor} ${pkg.bgColor} transition-shadow duration-300`}
          >
            <div className="p-8 space-y-6">
              {pkg.popular && (
                <div className="text-sm uppercase font-semibold px-3 py-1 bg-yellow-400 text-white rounded-full inline-block">
                  Most Popular
                </div>
              )}
              <h3
                className="text-2xl font-semibold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#222"
                }}
              >
                {pkg.name}
              </h3>
              <div className="flex items-baseline justify-center space-x-1">
                <span
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#222"
                  }}
                >
                  {pkg.price}
                </span>
                <span
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  /project
                </span>
              </div>
              <p
                className="text-base text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pkg.description}
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {pkg.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className={`inline-block w-4 h-4 mr-2 ${pkg.textColor}`} aria-hidden="true">
                      ✔
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full py-3 rounded-lg text-white ${pkg.buttonColor} font-semibold`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                aria-label={`Get started with the ${pkg.name} package`}
              >
                Get Started →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
