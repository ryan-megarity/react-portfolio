import React from "react";
import styled from "styled-components";
import "./App.css";
import ProjectComponent from "./components/project";
import { Project } from "./models";
import { projects } from "./projects";

function App() {
  const StyledList = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 10px;
  `;

  const StyledProjectDiv = styled.div`
    padding: 10px;
    margin: 10px;
    background-color: #3b647b;
    color: black;
  `;

  const StyledMainDiv = styled.div`
    padding: 10px;
  `;

  const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
    padding: 10px;
  `;
  const StyledLink = styled.a`
    margin: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.25em;
  `;

  return (
    <StyledMainDiv className="App">
      <Title>Ryan Megarity</Title>
      <h4>Software Engineer</h4>
      <p>
        Experienced RPA Engineer with a demonstrated history of automating
        complex administrative workflows within the healthcare sector. Also
        heavily involved in full-stack web development projects, levaraging
        Node, Angular and React.{" "}
      </p>
      <StyledList>
        <StyledLink href="CV.pdf" target="_blank">
          CV<img src="/images/launch.svg" alt="CV"></img>
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/ryan-megarity/"
          target="_blank"
        >
          LinkedIn<img src="/images/launch.svg" alt="linkedIn"></img>
        </StyledLink>
        <StyledLink href="https://github.com/ryan-megarity" target="_blank">
          GitHub<img src="/images/launch.svg" alt="gitHub"></img>
        </StyledLink>
      </StyledList>
      <h2>Projects</h2>
      <StyledProjectDiv>
        {projects.map((project: Project) => (
          <StyledList>
            <li>
              <ProjectComponent project={project}></ProjectComponent>
            </li>
          </StyledList>
        ))}
      </StyledProjectDiv>
    </StyledMainDiv>
  );
}

export default App;
