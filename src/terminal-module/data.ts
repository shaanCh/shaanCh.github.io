const USER ={
    name: 'Shaan Chauhan',
    handle: 'shaan',
    host: 'portfolio',
    role: 'Full Stack Intern',
    location: 'Boulder, CO',
    education: 'B.S Computer Science | Minor Electrical Engineering | University of Colorado Boulder',
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    frameworks: ['React', 'Node.js', 'Express', 'Django'],
    tools: ['Git', 'Docker', 'AWS', 'Linux'],
    interests: ['Web Development', 'Open Source', 'AI/ML', 'Cybersecurity'],
    github:     { url: "https://github.com/shaanCh",      label: "github.com/shaanCh" },
    linkedin:   { url: "https://linkedin.com/in/yourusername", label: "linkedin.com/in/yourusername" },
    email:      { url: "mailto:Shaan.Chauhan@colorado.edu",               label: "Shaan.Chauhan@colorado.edu" },
    website:    { url: "https://yoursite.com",                 label: "yoursite.com" },
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
  ["theme",    "toggle theme (green / amber)"],
  ["clear",    "clear the terminal"]
];


export { USER };
export { getStream };
export { TYPE_SPEED_CMD };
export { COMMANDS_HELP };