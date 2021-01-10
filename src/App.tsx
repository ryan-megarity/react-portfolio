import React from "react";
import "./App.css";
import ProjectComponent from "./components/project";
import { Project } from "./models";
import { projects } from "./projects";

function App() {
  return (
    <div className="App">
      <h1>Ryan Megarity</h1>
      {projects.map((project: Project) => (
        <li>
          <ProjectComponent project = {project}></ProjectComponent>
        </li>
      ))}
    </div>
  );
}

export default App;
