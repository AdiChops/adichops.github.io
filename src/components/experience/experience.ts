type Experience = {[key: string]: string | string[] };

export let experiences: Experience[] = [
    {
        company: 'Carleton University',
        position: 'Undergraduate Teaching Assistant',
        duration: '09.2021 - 12.2022',
        description: 'Assisted in teaching COMP 1406 (Introduction to Computer Science II - Java), COMP 1405/1406Z (Accelerated Introduction to Computer Science - Python and Java) as well as COMP 2406 (Fundamentals of Web Applications - HTML/CSS and Javascript). Held office hours to answer student questions, as well as organized and hosted assignment workshops to clarify assignment requirements.',
        accentColor: '#e91c24',
        bgImage: '/images/carleton.png',
        bgColor: '#e91c24',
        technologies: ["Javascript", "Java", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Git", "GitHub"]
    },
    {
        company: 'Amazon',
        position: 'Software Development Engineer Intern',
        duration: '05.2022 - 08.2022',
        description: 'Worked on secure software that runs on over 100k devices in over 100 countries across more than 20 companies. Built a communication tool that communicates important version changes to major stakeholders of the product, with the use of a Chrome extension as well as an automated email component. Integrated the tool to the preexisting deployment system.',
        accentColor: '#FF9800',
        bgImage: '/images/amazon.png',
        bgColor: '#fff',
        technologies: ["AWS", "Python", "Java", "JUnit", "Mockito", "Git", "HTML", "CSS", "Chrome Extension Development"]
    },
    {
        company: 'Royal Bank of Canada',
        position: 'Software Developer',
        duration: '05.2021 - 08.2021',
        description: 'Worked on client-facing applications that directly impacts a part of the 17 million clients that RBC serves. Performed testing of 5 different repositories, bringing test code coverage near 100%. Also separately participated in a co-op-led internal project to provide an interactive view of over 100 employees that were a part of the organization, focusing on the front-end as well as general tech stack building.',
        accentColor: '#0059b3',
        bgImage: '/images/rbc.svg',
        bgColor: '#fff',
        technologies: ["Java", "Spring", "JUnit", "Mockito", "MongoDB", "Angular", "Javascript", "Git", "HTML", "CSS", "Jira", "GitHub"]
    },
    {
        company: 'Environment and Climate Change Canada',
        position: 'Software Developer',
        duration: '01.2020 - 05.2020 / 05.2019 - 08.2019',
        description: 'Worked on over 5 different projects, including the inception of an internal project tracking tool. Performed and wrote tests to discover potential security vulnerabilities',
        accentColor: '#eb2d37',
        bgImage: '/images/canada.png',
        bgColor: '#fff',
        technologies: ["Javascript", "TFS", "HTML", "CSS", "C#", ".NET Framework MVC"]
    },
    {
        company: 'Employment and Social Development Canada',
        position: 'IM/IT Technician',
        duration: '05.2018 - 08.2018',
        description: 'Resolved over 70 support tickets, provided technical support and troubleshot various issues for a building with nearly 3 500 office workers',
        accentColor: '#eb2d37',
        bgImage: '/images/canada.png',
        bgColor: '#fff'
    }
];