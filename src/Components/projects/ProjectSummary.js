import React from "react";

const ProjectSummary = ({
  title,
  content,
  authorFirstName,
  authorLastName,
  createdAt,
}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p className="grey-text">
          {authorFirstName} {authorLastName}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
