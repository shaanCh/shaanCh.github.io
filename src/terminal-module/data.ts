const USER ={
    name: 'Shaan Chauhan',
    handle: 'shaan',
    host: 'portfolio',
    role: 'Full Stack Intern @ Keysight Technologies',
    location: 'Boulder, CO',
    education: 'B.S Computer Science | Minor Electrical Engineering | University of Colorado Boulder',
    languages: ['JavaScript', ' Python', ' C#', ' C/C++'],
    frameworks: ['React ', '· Node.js ', '· Typescript ', '· Vue.js ', '· ASP.NET WEB API ', '· Flask '],
    tools: ['Git ', '· Docker ', '· CI/CD ', '· Linux ', '· AI/ML ', '· Raspberry Pi'],
    interests: ['Web Development ', '· Open Source ', '· Circuits ', '· Cybersecurity/HackTheBox ', '· IOT ', '· Sushi'],
    github:     { url: "https://github.com/shaanCh",      label: "github.com/shaanCh" },
    linkedin:   { url: "https://www.linkedin.com/in/shaan-chauhan", label: "linkedin.com/shaanChauhan" },
    email:      { url: "mailto:Shaan.Chauhan@colorado.edu",               label: "Shaan.Chauhan@colorado.edu" },
    website:    { url: "https://shaanCh.github.io",                 label: "ShaanChauhan.com" },
};

function getStream(){
    return document.getElementById('stream');
}

const TYPE_SPEED_CMD = 150;

const COMMANDS_HELP = [
  ["help",     "show this list of commands"],
  ["about",    "a short bio"],
  ["projects", "selected projects & work"],
  ["skills",   "languages, frameworks, tools"],
  ["contact",  "where to find me"],
  ["whoami",   "print current user"],
//   ["theme",    "toggle theme (green / amber)"],
  ["clear",    "clear the terminal"]
];
const PROJECTS = [
  { name: "CarFINDa", year: "2026", stack: "Python · TypeScript · Next.js · Supabase · Playwright ",  desc: "AI-powered used car intelligence platform that aggregates listings from multiple marketplaces, scores every vehicle against real federal safety and emissions data, and gives you a conversational AI advisor that explains scores, flags bad deals, and generates data-backed negotiation strategies — all from a single natural language search.", url: "https://github.com/shaanCh/CarFINDa" },
  { name: "AxonIQ",   year: "2025", stack: "ESP32 · React · Hardware",               desc: "Mini Startup Idea - Built an attachable IoT acceleration‑sensing system with real‑time server communication, earning the Audience Choice Award and developed in collaboration with founders, C‑suite leaders, and fellow entrepreneurs. Clicking on this will to lead you to the same slide deck we used to present to over 200 people in the Boulder Startup Community", url: "https://canva.link/fh0vg4z99kl2de6" },
  { name: "EcoVision",      year: "2025", stack: "Python · TypeScript · React · Firebase", desc: "Intelligent recycling assistant that uses computer vision and AI to help users identify recyclable items, learn proper disposal methods, and track their environmental impact.", url:"https://github.com/shaanCh/EcoVision" },
  { name: "App-Control-LED",   year: "2023", stack: "Python · Dart · Flutter",  desc: "Created a Android Mobile app that let me control my LED's remotely from the comfort of my bed.", url:"https://github.com/shaanCh/Flutter-App-Control-LED" },
  { name: "Personal-Portfolio-Website",   year: "2026", stack: "React · Typescript · CSS",  desc: "Check out how I made this website!", url:"https://github.com/shaanCh/shaanCh.github.io" },
];

const SKILLS = [
  { title: "Languages",       items: [["Javascript",8],["Python",9],["C#",8],["Go",7],["C/C++",6],["SQL",7]] },
  { title: "Frontend",        items: [["React",9],["Vue.js", 8],["CSS/Tailwind",7],["Typescript",7]] },
  { title: "Backend",         items: [["Node.js",8],["FastAPI",8],["Postgres",5],["Redis",4]] },
  { title: "Infra / Tooling", items: [["Docker",8],["Linux",9],["CI/CD",7],["Git",8]] },
];

const CONTACT = [
    {email:      { url: "mailto:Shaan.Chauhan@colorado.edu",  label: "Shaan.Chauhan@colorado.edu" }},
    {github:     { url: "https://github.com/shaanCh",      label: "github.com/shaanCh" }},
    {linkedin:   { url: "https://www.linkedin.com/in/shaan-chauhan", label: "linkedin.com/in/shaan-chauhan" }},
    {website:    { url: "https://shaanCh.github.io",                 label: "shaanChauhan.com" }}
]


export { USER };
export { getStream };
export { TYPE_SPEED_CMD };
export { COMMANDS_HELP };
export { PROJECTS };
export { SKILLS };
export { CONTACT }