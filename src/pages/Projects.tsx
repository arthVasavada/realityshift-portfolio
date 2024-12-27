import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Interactive Financial Dashboard",
    description:
      "Fin360 is a powerful, modern, and user-friendly stock analytics application designed to empower investors with actionable insights. Built with cutting-edge technologies, Fin360 offers real-time and historical stock data visualization to help users make informed decisions.",
    imgUrl: "/assets/fin360_ss.jpg",
    demoLink: "https://fin360-57060.web.app/",
    codeLink: "https://github.com/arthVasavada/fin360",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Another fantastic project description.",
    imgUrl: "/assets/project2.png",
    demoLink: "https://project2-demo.com",
    codeLink: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A mind-blowing project description.",
    imgUrl: "/assets/project3.png",
    demoLink: "https://project3-demo.com",
    codeLink: "https://github.com/username/project3",
  },
];

const Projects: React.FC = () => {
  const [popupLink, setPopupLink] = useState<string | null>(null); // Track popup link

  const handleCardClick = (link: string) => {
    setPopupLink(link); // Open the popup with the provided link
  };

  const closePopup = () => {
    setPopupLink(null); // Close the popup
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="projects"
      className="h-screen-minus-navbar bg-gray-800 text-white p-10 pt-16 overflow-hidden"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-extralight text-teal-400 mb-6 text-center">
        Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              {...project}
              onCardClick={handleCardClick}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Popup Window */}
      {popupLink && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-lg z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
        >
          <motion.div
            className="relative w-11/12 max-w-4xl h-3/4 bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            variants={popupVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Close
            </button>
            <iframe
              src={popupLink}
              title="Live Demo"
              className="w-full h-full border-none rounded"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
