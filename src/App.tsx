import React from "react";
import styled from "styled-components";
import "./App.css";
import ProjectComponent from "./components/project";
import { Project } from "./models";
import { projects } from "./projects";

function App() {
  const StyledList = styled.ul`
    list-style: none;
  `;

  const StyledProjectDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 10px;
  `
  
  const StyledMainDiv = styled.div`
    padding: 10px;
    margin-right: 30px;
  `

  return (
    <StyledMainDiv className="App">
      <h1>Ryan Megarity</h1>
      <h2>My Projects</h2>
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
