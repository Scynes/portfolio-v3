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
        title: 'News Blog',
        imgSrc: 'news-blog.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a demo landing page for a news website.',
        longDescription: `This is a creative demo representation of a news website’s landing page, showcasing a blend of modern design elements. \n\nIt offers excellent practice in layout design using both flex and grid, highlighting innovative approaches to organizing content and enhancing user experience.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/6/news-landing-page/'
    },
    {
        title: 'Tip Splitter',
        imgSrc: 'tip-splitter.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_an app for splitting tips among a group.',
        longDescription: `This is a web app designed to help calculate how to split a large tip among a group of people. \n\nIt provides hands-on practice with DOM manipulation and event listeners, dynamically updating the display based on user input.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/7/tip-splitter/'
    },
    {
        title: 'Landing Page',
        imgSrc: 'company-landing.png',
        technologies: [ 'HTML', 'CSS', 'JavaScript' ],
        shortDescription: '_a full landing page for a mock company.',
        longDescription: `This is a complete design for a mock company, featuring a friendly layout with clear navigation and item representation. \n\nIt was a fun project focused on simple design approaches, offering a great experience in creating a clean and engaging user interface.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/9/company-landing-page/'
    },
    {
        title: 'Password Generator',
        imgSrc: 'password-generator.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a tool for generating passwords.',
        longDescription: `I built a responsive application designed to create random passwords based on user input. \n\nIt’s a valuable exercise in solving DOM manipulation challenges with plain JavaScript, without relying on frameworks.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/11/password-generator/'
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
        title: 'Huddle Landing',
        imgSrc: 'huddle-landing.png',
        technologies: [ 'HTML', 'CSS', 'JavaScript' ],
        shortDescription: '_a landing page for a huddle group.',
        longDescription: `This is a simple landing page designed to promote a mock huddle group. \n\nThis project offered practical experience with layout design, focusing on creating an engaging and visually appealing landing page.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/13/huddle-landing-page/'
    },    
    {
        title: 'Expense Tracker',
        imgSrc: 'expense-tracker.png',
        technologies: [ 'TypeScript', 'React', 'HTML', 'CSS' ],
        shortDescription: '_a simple todo app but for expenses.',
        longDescription: `Expense Tracker is a TypeScript and React application designed to help you manage and track your expenses efficiently. \n\nIt features expense input with validation, categorization for spending insights, and interactive UI with data visualizations. Built with Vite for a fast development experience, it serves as a practical showcase of TypeScript and React skills.`,
        githubLink: 'https://github.com/Scynes/expense-tracker',
        liveLink: 'https://expense-tracker-scynes.vercel.app'
    },
    {
        title: 'Advicer',
        imgSrc: 'advice-generator.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a simple app that fetches advice from an API.',
        longDescription: `The Advice Generator Application is a practice project focused on fetching API data and manipulating the DOM. \n\nIt offers a valuable learning experience for using grid layouts with small components, enhancing skills in API integration and UI design.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/2/advice-generator-app/'
    },
    {
        title: 'Plan Price',
        imgSrc: 'pricing-component.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a UX-friendly pricing component for plans.',
        longDescription: `This is a demo component that's designed to display plan options in a user-friendly layout, typical of web hosting websites. \n\nIt’s a practical example of using grid and flexbox for dynamic and responsive design, offering insights into effective layout techniques.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/4/plan-pricing-component/'
    },   
]