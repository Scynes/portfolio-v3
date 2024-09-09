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
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'CSS' ],
        shortDescription: '_a technical frontend assessment.',
        longDescription: `A timed assessment focused on building a responsive, dynamic UI using modern web technologies. \n\nIt involved problem-solving, implementing design patterns, and ensuring cross-browser compatibility to meet real-world requirements.`,
        githubLink: 'https://github.com/Scynes/blueprint-assessment',
        liveLink: 'https://blueprint-assessment.vercel.app/'
    },
    {
        title: 'Brewtiful',
        imgSrc: 'brewtiful.png',
        technologies: [ 'React', 'TypeScript', 'CSS', 'HTML' ],
        shortDescription: '_a demo website for a local coffee shop.',
        longDescription: `Brewtiful is a demo website created for a local coffee shop. Built with React, it showcases the shop's menu, detailed product descriptions, and contact information.\n\nFeatures include browsing the menu, viewing details of each coffee item, and contacting the shop for inquiries or feedback. It’s a practical example of a modern, user-friendly interface for a local business.`,
        githubLink: 'https://github.com/Scynes/showcase-coffee-shop-react',
        liveLink: 'https://showcase-coffee-shop-react.vercel.app'
    },
    {
        title: 'Expense Tracker',
        imgSrc: 'expense-tracker.png',
        technologies: [ 'TypeScript', 'React', 'HTML', 'CSS' ],
        shortDescription: '_a simple todo app but for expenses.',
        longDescription: `Expense Tracker is a TypeScript and React application designed to help you manage and track your expenses efficiently. \n\nIt features expense input with validation, categorization for spending insights, and interactive UI with data visualizations. Built with Vite for a fast development experience, it serves as a practical showcase of TypeScript and React skills.`,
        githubLink: 'https://github.com/Scynes/expense-tracker',
        liveLink: 'https://expense-tracker-scynes.vercel.app'
    }
    
]