const USER ={
    name: 'Shaan Chauhan',
    handle: 'shaan',
    host: 'portfolio',
    role: 'Full Stack Intern @ Keysight Technologies',
    location: 'Boulder, CO',
    education: 'B.S Computer Science | Minor Electrical Engineering | University of Colorado Boulder',
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    frameworks: ['React', 'Node.js', 'Express', 'Django'],
    tools: ['Git', 'Docker', 'AWS', 'Linux'],
    interests: ['Web Development', 'Open Source', 'AI/ML', 'Cybersecurity'],
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
  { name: "lumen",      year: "2025", stack: "TypeScript · Next.js · Postgres", desc: "Real-time collaborative document editor with CRDT-based sync and 30ms median round-trip." },
  { name: "starpath",   year: "2024", stack: "Rust · WebGL · WASM",             desc: "Browser-based celestial navigation simulator. Renders 120k stars at 60fps with custom shaders." },
  { name: "pico-shell", year: "2024", stack: "C · POSIX",                       desc: "Minimal UNIX shell in ~1.2k LOC. Pipes, redirection, job control, and a tiny line editor." },
  { name: "ferncast",   year: "2023", stack: "Go · gRPC · React",               desc: "Self-hosted podcast feed aggregator with full-text search across 8M+ episodes." },
  { name: "noteboard",  year: "2023", stack: "Python · FastAPI · htmx",         desc: "Plaintext-first note app with bidirectional links. Used daily by ~200 students on campus." },
];

const SKILLS = [
  { title: "Languages",       items: [["TypeScript",9],["Python",9],["Rust",6],["Go",7],["C/C++",6],["SQL",8]] },
  { title: "Frontend",        items: [["React",9],["Next.js",8],["CSS/Tailwind",8],["WebGL",6]] },
  { title: "Backend",         items: [["Node.js",8],["FastAPI",8],["Postgres",8],["Redis",7]] },
  { title: "Infra / Tooling", items: [["Docker",8],["Linux",9],["AWS",7],["Git",10]] },
];

const CONTACT = [
    {email:      { url: "mailto:Shaan.Chauhan@colorado.edu",  label: "Shaan.Chauhan@colorado.edu" }},
    {github:     { url: "https://github.com/shaanCh",      label: "github.com/shaanCh" }},
    {linkedin:   { url: "https://linkedin.com/in/yourusername", label: "linkedin.com/in/yourusername" }},
    {website:    { url: "https://yoursite.com",                 label: "yoursite.com" }}
]


export { USER };
export { getStream };
export { TYPE_SPEED_CMD };
export { COMMANDS_HELP };
export { PROJECTS };
export { SKILLS };
export { CONTACT }