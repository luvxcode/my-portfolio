import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'lovesharma93018@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Love Sharma, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: '' },
    { name: 'linkedin', url: '' },
    { name: 'facebook', url: '' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'CyberSecurity',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'SentinelAuth',
        slug: 'sentinel-auth',
        techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [],
        liveUrl: '',
        year: 2024,
        description: 'Zero-Trust Identity & SSO Platform. Architected a full-stack identity provider supporting OAuth2.0/OIDC Single Sign-On, JWT access/refresh token rotation, and TOTP-based multi-factor authentication.',
        role: `Implemented RBAC, Argon2 password hashing, Redis-backed session revocation, and adaptive rate limiting to defend against session hijacking and credential stuffing; containerized with Docker.`,
    },
    {
        title: 'ShieldGate',
        slug: 'shield-gate',
        techStack: ['Node.js', 'Express.js', 'MongoDB', 'Nginx', 'Docker'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
        liveUrl: '',
        year: 2024,
        description: 'API Security Gateway & WAF. Built a reverse-proxy API gateway that inspects and filters incoming traffic for SQL Injection, XSS, and CSRF patterns before requests reach backend services.',
        role: `Designed configurable rate-limiting, IP reputation blocklisting, and default security headers (CSP, HSTS); exposed a React dashboard for real-time traffic and threat visibility.`,
    },
    {
        title: 'VulnScope',
        slug: 'vuln-scope',
        techStack: ['Python', 'React.js', 'FastAPI', 'PostgreSQL'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [],
        liveUrl: '',
        year: 2024,
        description: 'Automated Web Vulnerability Scanner. Developed a full-stack scanning platform that crawls target web applications and automatically tests for OWASP Top 10 vulnerabilities, including SQLi, XSS, and broken authentication.',
        role: `Built a FastAPI backend orchestrating scan jobs and Nmap-based recon, with a React dashboard scoring findings by severity and exporting remediation-ready PDF reports.`,
    },
    {
        title: 'CryptVault',
        slug: 'crypt-vault',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [],
        liveUrl: '',
        year: 2024,
        description: 'End-to-End Encrypted File & Secrets Manager. Built a secure secrets/file storage platform using client-side AES-256 encryption so plaintext data never reaches the server, with RSA-wrapped keys for secure sharing between users.',
        role: `Implemented zero-knowledge architecture with automatic secret rotation, strict CSP and secure cookie flags, and dependency vulnerability scanning in the CI/CD pipeline.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'B.Tech in Computer Science and Engineering',
        company: 'Amity University Madhya Pradesh',
        duration: '2024 - 2028 (3rd Year Student)',
    },
];
