import React from "react";
import projectReducer from "../../store/reducers/projectReducer";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd Sep, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
