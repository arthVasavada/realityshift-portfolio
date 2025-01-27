import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  demoLink: string;
  codeLink: string;
  onCardClick: (link: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  demoLink,
  codeLink,
  onCardClick,
}) => {
  return (
    <div
      onClick={() => onCardClick(demoLink)} // Trigger popup on card click
      className="bg-gray-900 dark:bg-gray-200 p-6 rounded-lg shadow-[0_0_40px_-20px_rgba(0,0,0,0.8)] hover:shadow-teal-200 dark:hover:shadow-orange-300 cursor-pointer transition-colors duration-300"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold text-teal-400 dark:text-orange-400">
        {title}
      </h3>
      <p className="text-gray-300 dark:text-gray-700 text-sm mb-4">
        {description}
      </p>
      <div className="flex gap-4">
        <a
          href={codeLink} // Open link directly
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
          className="border-2 border-teal-400 dark:border-orange-400 text-teal-400 dark:text-orange-400 px-4 py-2 rounded hover:bg-teal-500 dark:hover:bg-orange-300 hover:text-gray-900 transition"
          onClick={(e) => e.stopPropagation()} // Prevent triggering the popup
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
