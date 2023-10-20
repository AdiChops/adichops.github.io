type Experience = {[key: string]: string | string[] };

export let experiences: Experience[] = [
    {
        company: 'Carleton University',
        position: 'Undergraduate Teaching Assistant',
        duration: 'September 2021 - December 2022',
        description: 'Assisted in teaching COMP 1406 (Introduction to Computer Science II - Java), COMP 1405/1406Z (Accelerated Introduction to Computer Science - Python and Java) as well as COMP 2406 (Fundamentals of Web Applications - HTML/CSS and Javascript). Held office hours to answer student questions, as well as organized and hosted assignment workshops to clarify assignment requirements.',
        accentColor: '#e91c24',
        bgImage: '/images/carleton.png',
        bgColor: '#e91c24',
        technologies: ["Javascript", "Java", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Git", "GitHub"]
    },
    {
        company: 'Amazon',
        position: 'Software Development Engineer Intern',
        duration: 'May 2022 - August 2022',
        description: 'Worked on secure software that runs on over 100k devices in over 100 countries across more than 20 companies. Built a communication tool that communicates important version changes to major stakeholders of the product, with the use of a Chrome extension as well as an automated email component. Integrated the tool to the prexisting deployment system.',
        accentColor: '#FF9800',
        bgImage: '/images/amazon.png',
        bgColor: '#fff',
        technologies: ["AWS", "Python", "Java", "JUnit", "Mockito", "Git", "HTML", "CSS", "Chrome Extension Development"]
    },
    {
        company: 'Royal Bank of Canada',
        position: 'Software Developer',
        duration: 'May 2021 - August 2021',
        description: 'Worked on secure software that runs on over 100k devices in over 100 countries across more than 20 companies. Built a communication tool that communicates important version changes to major stakeholders of the product, with the use of a Chrome extension as well as an automated email component. Integrated the tool to the prexisting deployment system.',
        accentColor: '#0059b3',
        bgImage: '/images/rbc.svg',
        bgColor: '#fff',
        technologies: ["Java", "Spring", "JUnit", "Mockito", "MongoDB", "Angular", "Javascript", "Git", "HTML", "CSS", "Jira", "GitHub"]
    },
];