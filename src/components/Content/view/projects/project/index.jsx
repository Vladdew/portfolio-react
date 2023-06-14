import React from "react";

const Project = props => {
  const { project, animated } = props;
  return (
    <a
      href={project.data.homepage}
      target="_blank"
      rel="noopener noreferrer"
      className={!animated ? "project" : "project project--animated"}
    >
      <div className={`project__container project__name-${project.data.name}`}>
        <div className="project__name">{project.data.description}</div>
      </div>
    </a>
  );
};

export default Project;
