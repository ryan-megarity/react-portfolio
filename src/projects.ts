import { Project } from "./models";

export const projects: Project[] = [
    {
    id: 1,
    projectName: "Bonfire (in-progress)",
    projectSummary: "Spotify Party",
    projectDetails:
      "React (create react app + typescript) used for the front-end and Firebase (Firestore + Functions) used for the backend.",
    projectImageSrc: "/images/Bonfire Cropped.png",
    deployedUrl: "https://bonfire-jet.vercel.app/",
    githubUrl: "https://github.com/ryan-megarity/Bonfire",
  },
  {
    id: 2,
    projectName: "Development Board",
    projectSummary: "Full stack development board",
    projectDetails:
      "Vue JS, Node (with Express) and Mongo were used to create this board. The front end is deployed via an automated CI/CD pipeline with Vercel and the backend is deployed using Heroku.",
    projectImageSrc: "/images/dev-board.png",
    deployedUrl: "https://ad-hoc-development-board.vercel.app/",
    githubUrl: "https://github.com/ryan-megarity/ad-hoc-development-board",
  },
  {
    id: 3,
    projectName: "This Portfolio",
    projectSummary: "This Portfolio was built using React JS",
    projectDetails:
      "Site was created with create-react-app Typescript template. It is deployed via an automated CI/CD pipeline using Vercel. Effort was made to create the site in a modular, component based way and thus would be easy to use as a template for creating portfolios as well as being easy to update with new projects.",
    projectImageSrc: "/logo512.png",
    deployedUrl: "https://ryan-megarity-portfolio.vercel.app/",
    githubUrl: "https://github.com/ryan-megarity/react-portfolio",
  },
  {
    id: 4,
    projectName: "Carsmart",
    projectSummary:
      "Oxford based car body repair comapany website",
    projectDetails: "Created using React JS. Deployed using vercel CI/CD pipeline.",
    projectImageSrc: "/images/carsmart.png",
    deployedUrl: "https://carsmartoxford.co.uk",
    githubUrl: "https://github.com/ryan-megarity/carsmart-react",
  },
  {
    id: 5,
    projectName: "Flappy Bird",
    projectSummary: "Game widget created using vanilla JS",
    projectDetails:
      "Created using vanilla JS and developed in such a way that it can be easily deployed as a widget. It is deployed via an automated CI/CD pipeline using Vercel.",
    projectImageSrc: "/images/flappy-bird-image.png",
    deployedUrl: "https://flappy-bird-widget.vercel.app",
    githubUrl: "https://github.com/ryan-megarity/flappy-bird-widget",
  },
];
