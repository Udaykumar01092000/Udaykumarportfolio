export type Project = {
  id: string;
  title: string;
  category: "WordPress" | "React" | "Apps";
  year: string;
  summary: string;
  summaryHighlights?: string[];
  images: [string, ...string[]];
  client: string;
  duration: string;
  role: string;
  location: string;
  intro: string;
  challenge: string;
  challengeHighlights?: string[];
  solution: string;
  results: string[];
  stack: string[];
  links: {
    demo?: string;
    app?: string;
    contact: string;
  };
};

export const projects: Project[] = [
 {
  id: "vaartha-newsroom",
  title: "Vaartha Digital",
  category: "WordPress",
  year: "2026",
  images: ["/projects/vaartha.png"],
  client: "Vaartha Publications",
  duration: "Ongoing",
  role: "WordPress & React Native Developer",
  location: "Hyderabad",
  summary:
    "Developed custom Sage-based WordPress platforms, custom plugins and a React Native mobile application integrated with WordPress APIs for Vaartha digital news platforms.",
  summaryHighlights: [
    "custom Sage-based WordPress platforms",
    "custom plugins",
    "React Native mobile application",
    "WordPress APIs",
  ],
    
  intro:
    "A large-scale digital news platform where I contributed to frontend development, custom WordPress functionality, plugin development, mobile application integration and day-to-day platform maintenance for both Telugu and Hindi news portals.",

  challenge:
    "The platform required scalable and responsive news websites, smooth article publishing workflows, custom interactive features for readers and reliable API-driven content delivery for mobile users while handling continuous daily traffic and content updates.",

  challengeHighlights: [
    "scalable and responsive news websites",
    "API-driven content delivery"
  ],

  solution:
    "I developed custom Sage WordPress themes for vaartha.com and hindi.vaartha.com, created custom plugins including an article voting system with shortcode widget integration, monitored platform performance, supported editorial workflows and built a React Native mobile application connected through WordPress REST APIs for dynamic content delivery.",

  results: [
    "Built and maintained custom Sage-based WordPress themes for Vaartha digital platforms.",
    
    "Developed custom WordPress plugins including an article voting system with vote percentage tracking and shortcode widget integration.",
    
    "Integrated WordPress REST APIs with a React Native mobile application for news readers.",
    
    "Improved publishing workflow support for Hindi content writers and monitored smooth article publishing operations.",
    
    "Maintained platform stability and monitored website performance for continuous news delivery.",
    
    "Created responsive and scalable frontend structures tailored for digital news consumption.",
  ],

  stack: [
    "WordPress",
    "Sage",
    "PHP",
    "REST API",
    "HTML",
    "CSS",
    "MySQL",
  ],

  links: {
    demo: "https://vaartha.com/",
    app: "https://play.google.com/store/apps/details?id=com.mycompany.vaartha&pcampaignid=web_share",
    contact: "/#contact",
  },
},
  {
    id: "restorn",
    title: "Restorn",
    category: "React",
    year: "2025",
    images: ["/projects/restornlogo.png", "/projects/restorn2.png", "/projects/restorn3.png"],
    client: "Swiggy Clone Concept",
    duration: "6 Weeks",
    role: "Frontend Developer",
    location: "Remote",
    summary:
    "A responsive Swiggy clone built with React JS, featuring restaurant discovery, dish search, filtering and cart functionality using live API data.",
    summaryHighlights: [
      "responsive Swiggy clone",
      "React JS",
      "restaurant discovery",
      "dish search",
      "cart functionality",
      "live API data",
    ],
     intro:
      "This project is a modern Swiggy-inspired food delivery interface where I redesigned the complete UI using React JS, CSS and Bootstrap while integrating restaurant and food APIs for dynamic content.",
    challenge:
      "The main challenge was handling dynamic API data smoothly while creating a responsive and clean user experience for restaurant browsing, food search and cart interactions across all devices.",
    solution:
      "I built a modular React application with responsive layouts, restaurant and dish search features, location-based restaurant filtering and cart management using React Redux for smooth state handling.",
    results: [
      "Integrated Swiggy-style APIs for dynamic restaurant and food data.",
      "Implemented restaurant and dish search functionality.",
      "Built location-based restaurant filtering experience.",
      "Added cart functionality using React Redux state management.",
      "Created a fully responsive UI for mobile and desktop devices.",
    ],
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "React JS", "React Redux", "Responsive Design"],
    links: {
      demo: "https://restorn.netlify.app/",
      contact: "/#contact",
    },
  },
  {
    id: "reader-app",
    title: "Vaartha Digital Mobile App",
    category: "Apps",
    year: "2026",
    images: [ "/vaartha_mobile2.png","/vaartha_mobile1.png", "/projects/vaartha.png"],
    client: "Digital News Readers",
    duration: "Product Build",
    role: "React Native Developer",
    location: "Hyderabad",
    summary:
      "React Native Android app for readers using WordPress REST APIs for dynamic content delivery.",
    summaryHighlights: [
      "React Native Android app",
      "WordPress REST APIs",
      "dynamic content delivery",
    ],
    intro:
      "A mobile-first reading experience designed to surface fresh stories quickly and deliver WordPress content cleanly on Android devices.",
    challenge:
      "The app needed to pull dynamic news data from WordPress while keeping reading, navigation and updates smooth for users on mobile networks.",
    solution:
      "I integrated WordPress REST APIs with a React Native app structure, organized reader-friendly screens and focused on content access, responsiveness and reliable data flow.",
    results: [
      "Dynamic content delivery from WordPress into mobile screens.",
      "Simpler article browsing and reader-focused navigation.",
      "Mobile-ready structure for future feature expansion.",
      "Consistent UI flow tailored to Android readers.",
    ],
    stack: ["React Native", "WordPress REST API", "JavaScript", "Android"],
    links: {
      app: "https://play.google.com/store/apps/details?id=com.mycompany.vaartha&pcampaignid=web_share",
      contact: "/#contact",
      },
  },
  {
    id: "uhq-adda-admin",
    title: "UHQ Adda Admin Panel",
    category: "React",
    year: "2026",
    images: ["/projects/uhqadda1.png", "/projects/uhqadda2.png", "/projects/uhqadda3.png"],
    client: "Quiz App Management System",
    duration: "Product Build",
    role: "Frontend Developer",
    location: "Remote",
    summary:
      "A React JS admin dashboard built for managing a quiz application with user management, question handling, subscriptions and payment tracking features.",
    summaryHighlights: [
      "Quiz app admin dashboard",
      "Question and category management",
      "Subscription and Razorpay tracking",
    ],
    intro:
      "UHQ Adda Admin Panel was created for managing a React Native quiz application where admins can control users, quiz questions, subscriptions and application content from a centralized dashboard.",
    challenge:
      "The platform required a structured admin experience capable of handling dynamic quiz data, CSV uploads, subscriptions, category management and payment-related tracking while keeping the dashboard simple and responsive.",
    solution:
      "I developed the complete frontend admin panel using React JS by integrating backend APIs provided by another developer and building responsive dashboard modules for authentication, quiz management, subscriptions and user administration.",
    results: [
      "Implemented secure admin signup and login flow.",
      "Built quiz question management with CSV upload and manual form submissions.",
      "Added question activation, deactivation and soft delete functionality.",
      "Integrated subscription package management with Razorpay payment tracking.",
      "Created category management and category assignment workflows.",
      "Developed user and subscription tracking interfaces for admins.",
      "Integrated APIs using Axios for dynamic dashboard operations.",
      "Responsive dashboard optimized for desktop and tablet usage.",
      "Deployed and hosted the application on Netlify.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Material UI",
      "Bootstrap",
      "Axios/API Integration",
      "Netlify",
      "Responsive Design"
    ],
    links: {
      demo: "https://uhqadda.netlify.app/",
      contact: "/#contact",
    },
  },
  {
    id: "wordpress-showcase",
    title: "Client Showcase Website",
    category: "WordPress",
    year: "2024",
    images: [
      "https://udaykumarportfolio.netlify.app/static/media/movie1.a3a1e2e2f6abc885c6f3.png",
      "/projects/client-showcase.svg",
    ],
    client: "Business Showcase Client",
    duration: "4 Weeks",
    role: "WordPress Developer",
    location: "Remote",
    summary:
      "Responsive WordPress business website with custom design, service pages and polished UI.",
    summaryHighlights: [
      "Responsive WordPress business website",
      "custom design",
      "service pages",
      "polished UI",
    ],
    intro:
      "A brand presentation site created to highlight services, trust signals and company capability through a clear and polished content structure.",
    challenge:
      "The website had to feel professional and modern while staying manageable for content updates and flexible enough for future service growth.",
    solution:
      "I built a responsive WordPress experience with service-led page structures, clean UI styling and practical content blocks that help the client communicate clearly.",
    results: [
      "Stronger service presentation with cleaner page structure.",
      "Improved responsive layout quality across devices.",
      "Flexible content blocks for ongoing updates.",
      "More polished visual consistency for the brand.",
    ],
    stack: ["React JS", "HTML", "CSS", "JavaScript", "Responsive Design"],
    links: {
      contact: "/#contact",
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
