import { Technology } from './technology';

export interface Project {
    // The title of the project
    title: string;
    // The image source for the project
    imgSrc: string;
    // The technologies used in the project
    technologies: Technology[];
    // The short description of the project
    shortDescription: string;
}