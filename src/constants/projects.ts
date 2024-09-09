import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
    {
        title: 'Textlight',
        imgSrc: 'textlight.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL' ],
        shortDescription: '_a web application with image exporting.',
        longDescription: `Textlight is a web application that lets you create and share syntax-highlighted snippets, with the added ability to export them as polished images. \n\nIt’s perfect for developers and content creators who want to showcase their code beautifully and easily.`,
        githubLink: 'https://github.com/Scynes/textlight',
        liveLink: 'https://textlight.vercel.app'
    },
    {
        title: 'ChatGPT Clone',
        imgSrc: 'chatgpt-clone.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'MongoDB' ],
        shortDescription: '_a ChatGPT clone web application.',
        longDescription: `The ChatGPT Clone is a streamlined AI chat app that replicates the experience of interacting with OpenAI's ChatGPT. It allows users to engage in conversations with an AI model, providing insightful and responsive answers. \n\nPerfect for exploring AI-driven interactions, this clone offers a straightforward way to experience and test AI capabilities in real time.`,
        githubLink: 'https://github.com/Scynes/nextjs-chatgpt-clone',
        liveLink: 'https://nextjs-chatgpt-clone-five.vercel.app'
    },
    {
        title: 'Blueprint Assessment',
        imgSrc: 'blueprint-assessment.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL' ],
        shortDescription: '_a technical frontend assessment.',
        longDescription: `A timed assessment focused on building a responsive, dynamic UI using modern web technologies. \n\nIt involved problem-solving, implementing design patterns, and ensuring cross-browser compatibility to meet real-world requirements.`,
        githubLink: 'https://github.com/Scynes/blueprint-assessment',
        liveLink: 'https://blueprint-assessment.vercel.app/'
    }
    
]