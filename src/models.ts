export interface Project {
  id: number;
  projectName: string;
  projectSummary: string;
  projectDetails: string;
  projectImageSrc: string;
  deployedUrl?: string;
  githubUrl?: string;
};
