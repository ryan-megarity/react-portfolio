import React, { useState } from "react";
import { Project } from "../models";
import styled from "styled-components";

function ProjectComponent(props: { project: Project }) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const StyledLink = styled.a`
    color: lighblue;
    font-weight: bold;
    margin: 10px;
    text-decoration: none;
  `;

  const StyledImage = styled.img`
    max-width: 200px;
  `;
  const StyledDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  `;

  const StyledClickableSpan = styled.span`
    img:hover {
      pointer: cursor;
    }
  `

  const project: Project = props.project;
  return (
    <StyledDiv>
      <h2>{project.projectName}</h2>
      <StyledImage src={project.projectImageSrc} alt="project"></StyledImage>
      <p>{project.projectSummary}</p>
      <div>
        {!showDetails && (
          <StyledClickableSpan onClick={() => setShowDetails(true)}>
            <img src="/images/expand_more.svg" alt="launch"></img>
          </StyledClickableSpan>
        )}
        {showDetails && (
          <div>
            <StyledClickableSpan onClick={() => setShowDetails(false)}>
              <img src="/images/expand_less.svg" alt="launch"></img>
            </StyledClickableSpan>
            <p>{project.projectDetails}</p>
          </div>
        )}
      </div>
      {project.githubUrl && (
        <StyledLink href={project.githubUrl} target="blank">
          GitHub <img src="/images/launch.svg" alt="launch"></img>
        </StyledLink>
      )}
      {project.deployedUrl && (
        <StyledLink href={project.deployedUrl} target="blank">
          Deployed <img src="/images/launch.svg" alt="launch"></img>
        </StyledLink>
      )}
    </StyledDiv>
  );
}

export default ProjectComponent;
