import { Project } from "./models";

export const projects: Project[] = [{
  id: 1,
  projectName: "This Portfolio",
  projectSummary: "This Portfolio was built using React JS",
  projectDetails: "Site was created with create-react-app Typescript template. It is deployed via an automated CI/CD pipeline using Vercel. Effort was made to create the site in a modular, component based way and thus would be easy to use as a template for creating portfolios as well as being easy to update with new projects.",
  projectImageSrc: "/logo512.png",
  deployedUrl: "https://ryan-megarity-portfolio.vercel.app/",
  githubUrl: "https://github.com/ryan-megarity/react-portfolio"
},
{
  id: 2,
  projectName: "Flappy Bird",
  projectSummary: "Game widget created using vanilla JS",
  projectDetails: "Created using vanilla JS and developed in such a way that it can be easily deployed as a widget (as below). It is deployed via an automated CI/CD pipeline using Vercel.",
  projectImageSrc: "/images/flappy-bird-image.png",
  deployedUrl: "https://flappy-bird-widget.vercel.app",
  githubUrl: "https://github.com/ryan-megarity/flappy-bird-widget"
}];
