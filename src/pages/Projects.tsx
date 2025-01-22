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
    title: "Movie Recommendation Platform",
    description:
      "CineScope is a modern, feature-rich movie recommendation app designed to showcase API consumption, routing, and state management capabilities. It leverages Vite, React, TypeScript, TailwindCSS, and Framer Motion to deliver a seamless and visually appealing user experience.",
    imgUrl: "/assets/cine-scope_ss.jpg",
    demoLink: "https://cine-scope-cb754.web.app/",
    codeLink: "https://github.com/arthVasavada/cine-scope",
  },
  {
    id: 3,
    title: "Water Store Manager",
    description:
      "A full-stack CRUD application for managing Aquazone water store customers and their bottle counts. Built with React (TypeScript), Firebase Authentication, Cloud Firestore, Tailwind CSS, and Framer Motion.",
    imgUrl: "/assets/aquazone_ss.jpg",
    demoLink: "https://aquazone-crud.firebaseapp.com/",
    codeLink: "https://github.com/arthVasavada/aquazone-crud",
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
      className="min-h-screen bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 p-6 pt-16 overflow-auto md:overflow-hidden transition-colors duration-300"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-extralight text-teal-400 dark:text-orange-400 mb-4 text-center mt-8">
        Projects
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-11"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard {...project} onCardClick={handleCardClick} />
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
          onClick={closePopup} // Close on overlay click
        >
          <motion.div
            className="relative w-11/12 max-w-4xl h-[80vh] md:h-3/4 bg-gray-900 dark:bg-gray-200 rounded-lg shadow-lg overflow-auto"
            variants={popupVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-red-500 dark:bg-red-400 text-white dark:text-gray-800 px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-500"
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
