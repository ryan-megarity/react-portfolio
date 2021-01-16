import React from "react";
import { Project } from "../models";

function ProjectComponent(props: any) {
  const project: Project = props.project;
  return (
    <div className="Project">
      <h1>{project.projectName}</h1>
      <img src={project.projectImageSrc} alt="project"></img>
      <h6>{project.projectDetails}</h6>
      <a href={project.githubUrl} target="blank">Github</a>
      <a href={project.deployedUrl} target="blank">Deployed</a>
    </div>
  );
}

export default ProjectComponent;
