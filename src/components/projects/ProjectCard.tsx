import React from "react";
import { Project } from "../../types/Project";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  liveLink,
}) => {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        {githubLink && (
          <Button onClick={() => window.open(githubLink, "_blank")}>
            GitHub
          </Button>
        )}
        {liveLink && (
          <Button onClick={() => window.open(liveLink, "_blank")}>
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
