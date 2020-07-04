import React from "react";
import ProjectSummary from "./ProjectSummary";

import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log("project list", projects);
  return (
    <div className="project-list section">
      {projects && projects.length > 0
        ? projects.map((item) => (
            <Link to={`/project/${item.id}`} key={item.id}>
              <ProjectSummary {...item} />
            </Link>
          ))
        : null}
    </div>
  );
};

export default ProjectList;
