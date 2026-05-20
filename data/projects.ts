export type Project = {
  id: string;
  title: string;
  category: "WordPress" | "React" | "Apps";
  year: string;
  summary: string;
  image: string;
  client: string;
  duration: string;
  role: string;
  location: string;
  intro: string;
  challenge: string;
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
  image: "https://udaykumarportfolio.netlify.app/static/media/vaartha.d94550b9028e664abdd7.png",
  client: "Vaartha Publications",
  duration: "Ongoing",
  role: "WordPress & React Native Developer",
  location: "Hyderabad",
  summary:
    "Developed custom Sage-based WordPress platforms, custom plugins and a React Native mobile application integrated with WordPress APIs for Vaartha digital news platforms.",
    
  intro:
    "A large-scale digital news platform where I contributed to frontend development, custom WordPress functionality, plugin development, mobile application integration and day-to-day platform maintenance for both Telugu and Hindi news portals.",

  challenge:
    "The platform required scalable and responsive news websites, smooth article publishing workflows, custom interactive features for readers and reliable API-driven content delivery for mobile users while handling continuous daily traffic and content updates.",

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
    "React Native",
    "JavaScript",
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
    image:
      "https://udaykumarportfolio.netlify.app/static/media/restornlogo.3f7ac3db43bcaadf1328.png",
    client: "Restaurant Brand Concept",
    duration: "6 Weeks",
    role: "Frontend Developer",
    location: "Remote",
    summary:
      "Modern React interface with clean sections, responsive layout and smooth frontend interactions.",
    intro:
      "A bold restaurant-style landing experience focused on visual storytelling, simple booking paths and a premium first impression.",
    challenge:
      "The project needed strong presentation on mobile and desktop while keeping the interface lightweight, fast and easy to extend for future campaigns.",
    solution:
      "I created a modular React layout with strong visual rhythm, responsive content blocks and polished interactions that keep the experience smooth without overloading the page.",
    results: [
      "Modular sections that are easy to reuse for campaigns.",
      "Responsive hero, menu and booking-focused content flow.",
      "Cleaner visual hierarchy for calls to action.",
      "Improved presentation quality with motion and spacing.",
    ],
    stack: [ "HTML", "CSS", "JavaScript", "React JS", "Bootstrap" , "Responsive Design"],
    links: {
      contact: "/#contact",
    },
  },
  {
    id: "reader-app",
    title: "Reader Mobile App",
    category: "Apps",
    year: "2025",
    image: "/projects/reader-app.svg",
    client: "Digital News Readers",
    duration: "Product Build",
    role: "React Native Developer",
    location: "Hyderabad",
    summary:
      "React Native Android app for readers using WordPress REST APIs for dynamic content delivery.",
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
    id: "wordpress-showcase",
    title: "Client Showcase Website",
    category: "WordPress",
    year: "2024",
    image: "https://udaykumarportfolio.netlify.app/static/media/movie1.a3a1e2e2f6abc885c6f3.png",
    client: "Business Showcase Client",
    duration: "4 Weeks",
    role: "WordPress Developer",
    location: "Remote",
    summary:
      "Responsive WordPress business website with custom design, service pages and polished UI.",
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
