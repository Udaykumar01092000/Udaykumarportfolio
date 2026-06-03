export type Project = {
  id: string;
  title: string;
  category: string;
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
    id: "uhq-adda-admin",
    title: "UHQ Adda Admin Panel",
    category: "React",
    year: "2026",
    images: ["/projects/uhqadda-1.jpg", "/projects/uhqadda-2.webp", "/projects/uhqadda-3.webp"],
    client: "Quiz App Management System",
    duration: "1-2 Weeks",
    role: "React & Next.js Frontend Developer",
    location: "Remote",
    summary:
      "A React and Next.js admin dashboard built for managing a quiz application with user management, question handling, subscriptions and payment tracking features.",
    summaryHighlights: [
      "React and Next.js admin dashboard",
      "Question and category management",
      "Subscription and Razorpay tracking",
    ],
    intro:
      "UHQ Adda Admin Panel was created as a React and Next.js dashboard for managing a React Native quiz application where admins can control users, quiz questions, subscriptions and application content from a centralized system.",
    challenge:
      "The platform required a structured admin experience capable of handling dynamic quiz data, CSV uploads, subscriptions, category management and payment-related tracking while keeping the dashboard simple and responsive.",
    solution:
      "I developed the complete frontend admin panel using React and Next.js by integrating backend APIs provided by another developer and building responsive dashboard modules for authentication, quiz management, subscriptions and user administration.",
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
      "Next.js",
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
    id: "uhq-adda-mobile-app",
    title: "UHQ Adda Mobile App",
    category: "Apps",
    year: "2026",
    images: [
      "/projects/uhq-mobile-1.png",
    ],
    client: "Quiz Learning Platform",
    duration: "3-4 Weeks",
    role: "React Native Developer",
    location: "Remote",

    summary:
      "A React Native quiz application built for students to purchase quiz category packages, attempt timed exams, track results and access dynamically managed quiz content from the admin dashboard.",

    summaryHighlights: [
      "Quiz category subscription system",
      "Timed quiz and random question generation",
      "Razorpay payment integration",
    ],

    intro:
      "UHQ Adda Mobile App was developed as a quiz-based learning platform where users can register, purchase quiz category subscriptions and attempt timed tests directly from their mobile devices. The application is fully connected with the UHQ Adda Admin Panel for dynamic quiz management.",

    challenge:
      "The application required a smooth mobile experience capable of handling user authentication, category-based subscriptions, payment integration, dynamic quiz generation, timer-based exams and result tracking while syncing data from the admin dashboard.",

    challengeHighlights: [
      "Dynamic quiz data management",
      "Subscription-based quiz access",
      "Timer-based exam system",
      "Razorpay payment integration",
    ],

    solution:
      "I developed the complete React Native mobile application with authentication flows, category-based quiz subscriptions, Razorpay payment integration, random question generation and result tracking features. The app was integrated with APIs connected to the admin panel where administrators manage categories, subscriptions, questions and quiz data.",

    results: [
      "Built secure user login and signup functionality.",
      "Integrated dynamic quiz categories managed from the admin dashboard.",
      "Implemented category-based subscription package system.",
      "Added monthly, quarterly, half-yearly and yearly package selection flows.",
      "Integrated Razorpay payment gateway for subscription purchases.",
      "Created random question generation from large question databases.",
      "Developed timer-based quiz attempt functionality.",
      "Displayed quiz results immediately after exam completion.",
      "Implemented previous test history and result tracking screens.",
      "Connected mobile app with admin panel APIs for dynamic operations.",
      "Built responsive mobile UI optimized for Android devices.",
    ],

    stack: [
      "React Native",
      "JavaScript",
      "REST API",
      "Axios",
      "Android",
      "React Navigation",
      "Async Storage",
      "Razorpay",
      "Authentication",
      "Responsive Mobile UI"
    ],

    links: {
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
    duration: "1 Weeks",
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
  // {
  //   id: "eleven-cricket",
  //   title: "Eleven Cricket",
  //   category: "WordPress",
  //   year: "2024",
  //   images: [
  //     "/projects/elevencricket-1.webp"
  //   ],
  //   client: "Eleven Cricket via iBridge Digital",
  //   duration: "2-3 Weeks",
  //   role: "Web Designer & Frontend Developer at iBridge Digital",
  //   location: "Remote",
  //   summary:
  //     "A complete cricket e-commerce website delivered for an iBridge Digital client, built for browsing and purchasing cricket equipment, jerseys and accessories with categorized product management, WooCommerce integration and WhatsApp customer support.",
  //   summaryHighlights: [
  //     "Multi-category cricket e-commerce platform",
  //     "Bats, pads, gloves, jerseys and accessories management",
  //     "WooCommerce and WhatsApp integration",
  //   ],
  //   intro:
  //     "Eleven Cricket was redesigned and developed while I was working at iBridge Digital for a client in the cricket equipment space. The platform was built as a modern e-commerce website where users can explore and purchase products from various brands through organized categories, responsive product pages, WooCommerce shopping functionality and direct WhatsApp communication support.",
  //   challenge:
  //     "The project required transforming the existing website into a professional online cricket store capable of handling multiple product categories, brand-based product browsing, responsive shopping experiences and seamless customer communication while maintaining a clean and modern UI.",
  //   solution:
  //     "While working at iBridge Digital, I redesigned the complete website using WordPress and customized the frontend using HTML, CSS and JavaScript. WooCommerce was integrated for e-commerce operations including product listings, cart management and checkout functionality. Products were organized into categories such as bats, pads, gloves, jerseys, cricket balls and accessories from multiple brands to improve browsing and purchasing experiences.",
  //   results: [
  //     "Built a complete cricket e-commerce shopping experience.",
  //     "Created categorized product sections for bats, pads, gloves, jerseys, balls and accessories.",
  //     "Implemented multi-brand product browsing and management.",
  //     "Integrated WooCommerce for cart, checkout and product handling.",
  //     "Added WhatsApp integration for direct customer inquiries and support.",
  //     "Improved navigation structure and product discoverability.",
  //     "Designed responsive layouts optimized for mobile and desktop users.",
  //     "Enhanced overall website appearance with modern UI styling and layouts.",
  //     "Expanded website content with additional product and informational pages.",
  //     "Improved customer engagement and online visibility for the business.",
  //   ],
  //   stack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "WordPress",
  //     "WooCommerce",
  //     "WhatsApp API",
  //     "Responsive Design"
  //   ],
  //   links: {
  //     demo: "https://elevencricket.com/",
  //     contact: "/#contact",
  //   },
  // },

  {
  id: "movie-flex",
  title: "Movie Flex",
  category: "React",
  year: "2025",
  images: [
    "/projects/movieflx1.png"
  ],
  client: "Movie Streaming UI Concept",
  duration: "2-3 Weeks",
  role: "Frontend Developer",
  location: "Remote",

  summary:
    "A React JS movie search and browsing application built using movie APIs with dynamic movie sliders, trailer playback, category filtering and responsive entertainment-focused UI.",

  summaryHighlights: [
    "Movie search and trailer playback",
    "Dynamic movie sliders and category sections",
    "API-driven React entertainment platform",
  ],

  intro:
    "Movie Flex is a modern movie browsing and entertainment platform inspired by streaming applications. The project was developed using React JS and movie APIs to provide users with movie discovery, search functionality, trailer playback and categorized content browsing.",

  challenge:
    "The application required smooth handling of dynamic API data, responsive UI sections, movie search functionality, category-based filtering and seamless navigation between movie listings and detailed information pages.",

  challengeHighlights: [
    "Dynamic movie API integration",
    "Responsive entertainment UI",
    "Movie search and filtering system",
    "Trailer playback experience",
  ],

  solution:
    "I developed the complete frontend application using React JS, Bootstrap and API integrations for fetching movie data dynamically. The platform includes movie sliders, search functionality, categorized movie sections, detailed movie pages and responsive layouts optimized for different screen sizes.",

  results: [
    "Integrated movie APIs for dynamic content fetching.",
    "Built responsive movie sliders and carousel sections.",
    "Implemented movie search functionality for quick discovery.",
    "Created detailed movie pages with trailer playback support.",
    "Added category sections for Popular Movies, TV Shows and Upcoming Movies.",
    "Developed responsive layouts optimized for desktop and mobile users.",
    "Improved user engagement with visually rich movie browsing experience.",
    "Implemented smooth navigation using React Router.",
    "Designed modern entertainment-focused UI components.",
  ],

  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Bootstrap",
    "Axios",
    "Fetch API",
    "React Router",
    "Responsive Design"
  ],

  links: {
    demo: "https://movieflxbinge.netlify.app/",
    contact: "/#contact",
  },
  }
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
