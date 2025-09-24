// About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const serviceCards = [
    {
      title: "Precision Design",
      description:
        "Meticulous attention to detail with cutting-edge technology and sustainable materials."
    },
    {
      title: "Client Centered",
      description:
        "Collaborative approach that puts your vision at the center for personalized spaces."
    },
    {
      title: "Award-Winning",
      description:
        "Recognized globally for excellence in sustainable architecture and innovative solutions."
    },
    {
      title: "Innovative Solutions",
      description:
        "Pioneering eco-friendly technologies that push the boundaries of sustainable design."
    }
  ];

  const missionVision = [
    {
      title: "Our Mission",
      color: "#6A7FDB",
      content:
        "To create sustainable built environments that harmonize with nature, enhancing lives through eco-responsible design."
    },
    {
      title: "Our Vision",
      color: "#10B981",
      content:
        "To lead in regenerative architecture, designing homes and resorts that give back to the earth."
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Heading + Paragraph */}
          <motion.div variants={textVariants} className="text-center space-y-6">
            <h2
              className="text-4xl md:text-6xl font-light"
              style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}
            >
              About{" "}
              <span className="font-bold" style={{ color: "#6A7FDB" }}>
                ArchStudio
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#666" }}
            >
              ArchStudio is committed to crafting sustainable, innovative
              spaces—from energy-efficient homes to eco-resorts—that inspire
              and endure for generations.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center bg-[#6A7FDB]/10 rounded-full mb-4"
                  aria-hidden="true"
                />
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#333"
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 text-base"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#666"
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {missionVision.map((block, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-10 shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-14 h-14 rounded-full mr-4"
                    style={{ backgroundColor: `${block.color}20` }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#333"
                    }}
                  >
                    {block.title}
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#666"
                  }}
                >
                  {block.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
