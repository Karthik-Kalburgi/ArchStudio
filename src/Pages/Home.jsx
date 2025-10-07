import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  HiOutlineOfficeBuilding, 
  HiOutlineHome, 
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineLightBulb,
  HiOutlineHeart
} from "react-icons/hi";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import About from "./About";
import Services from "./Services";
import Packages from "./Packages";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [currentStats, setCurrentStats] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });

  const controls = useAnimation();

  // Animated counters for statistics
  useEffect(() => {
    const targetStats = {
      projects: 247,
      clients: 156,
      awards: 29,
      experience: 15
    };

    const animateCounters = async () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        setCurrentStats({
          projects: Math.floor(targetStats.projects * progress),
          clients: Math.floor(targetStats.clients * progress),
          awards: Math.floor(targetStats.awards * progress),
          experience: Math.floor(targetStats.experience * progress)
        });
        await new Promise(resolve => setTimeout(resolve, stepDuration));
      }
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingIcons = [
    { Icon: HiOutlineOfficeBuilding, delay: 0, x: -20, y: -30 },
    { Icon: HiOutlineHome, delay: 0.5, x: 30, y: -20 },
    { Icon: HiOutlineSparkles, delay: 1, x: -10, y: 40 },
    { Icon: HiOutlineGlobeAlt, delay: 1.5, x: 25, y: 35 },
    { Icon: HiOutlineLightBulb, delay: 2, x: -35, y: 10 },
    { Icon: HiOutlineHeart, delay: 2.5, x: 15, y: -40 }
  ];

  return (
    <>
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.2, 1],
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={80} style={{ color: "#6A7FDB" }} aria-label="Floating Icon" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center relative z-10">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={textVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight"
              style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                color: "#333333",
                letterSpacing: "-0.02em"
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                DESIGNING THE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block font-bold"
                style={{ color: "#6A7FDB" }}
              >
                FUTURE OF SPACES
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Vision Statement */}
          <motion.div 
            variants={textVariants}
            className="max-w-3xl mx-auto space-y-4"
          >
            <motion.p 
              className="text-xl md:text-2xl font-light leading-relaxed"
              style={{ 
                color: "#666666",
                fontFamily: "'Inter', sans-serif"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your vision into extraordinary architectural experiences
            </motion.p>
            
            {/* Inspiring Quote */}
            <motion.blockquote 
              className="text-lg md:text-xl italic leading-relaxed space-y-3"
              style={{ color: "#555555" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>"As an architect, you design for the present with an awareness of the past,</p>
              <p>for a future which is essentially unknown."</p>
              <p className="text-base font-medium not-italic" style={{ color: "#6A7FDB" }}>
                — Norman Foster
              </p>
            </motion.blockquote>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300"
              style={{
                backgroundColor: "#6A7FDB",
                color: "#FFFFFF",
                boxShadow: "0 4px 15px rgba(106, 127, 219, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(106, 127, 219, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(106, 127, 219, 0.3)";
              }}
            >
              Explore Projects
              <FiArrowRight />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 border-2 border-[#6A7FDB] text-[#6A7FDB] transition-all duration-300"
            >
              Get In Touch
              <FiPhone />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          <motion.div className="stat-item">
            <motion.h3 className="text-3xl font-semibold" style={{ color: "#6A7FDB" }}>
              {currentStats.projects}
            </motion.h3>
            <motion.p>Projects Completed</motion.p>
          </motion.div>
          <motion.div className="stat-item">
            <motion.h3 className="text-3xl font-semibold" style={{ color: "#6A7FDB" }}>
              {currentStats.clients}
            </motion.h3>
            <motion.p>Happy Clients</motion.p>
          </motion.div>
          <motion.div className="stat-item">
            <motion.h3 className="text-3xl font-semibold" style={{ color: "#6A7FDB" }}>
              {currentStats.awards}
            </motion.h3>
            <motion.p>Awards Won</motion.p>
          </motion.div>
          <motion.div className="stat-item">
            <motion.h3 className="text-3xl font-semibold" style={{ color: "#6A7FDB" }}>
              {currentStats.experience}+
            </motion.h3>
            <motion.p>Years of Experience</motion.p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* About, Services, Packages, Projects, Contact Sections */}
    <About />
    <Services />
    <Packages />
    <Projects />
    <Contact />
    </>
  );
};

export default Home;
