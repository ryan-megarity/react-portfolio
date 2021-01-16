export interface Project {
  id: number;
  projectName: string;
  projectDetails: string;
  projectImageSrc: string;
  deployedUrl?: string;
  githubUrl?: string;
};
