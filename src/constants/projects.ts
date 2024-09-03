import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
    {
        title: 'Textlight',
        imgSrc: 'textlight.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL' ],
        shortDescription: '_a pastebin app with image exporting.'
    },
    {
        title: 'ChatGPT Clone',
        imgSrc: 'chatgpt-clone.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'MongoDB' ],
        shortDescription: '_a OpenAI ChatGPT clone.'
    }
]