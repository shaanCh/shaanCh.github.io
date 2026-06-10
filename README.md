 Terminal Portfolio

> Welcome to my portfolio. I hope this design is interactive, intuitive, and fun to play around with. Hopefully you learn a thing or two about how I made this, walking through the code!

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E) 
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=plastic&logo=figma&logoColor=white)

```
 ███████╗██╗  ██╗ █████╗  █████╗ ███╗   ██╗     ██████╗██╗  ██╗ █████╗ ██╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗
 ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗  ██║    ██╔════╝██║  ██║██╔══██╗██║   ██║██║  ██║██╔══██╗████╗  ██║
 ███████╗███████║███████║███████║██╔██╗ ██║    ██║     ███████║███████║██║   ██║███████║███████║██╔██╗ ██║
 ╚════██║██╔══██║██╔══██║██╔══██║██║╚██╗██║    ██║     ██╔══██║██╔══██║██║   ██║██╔══██║██╔══██║██║╚██╗██║
 ███████║██║  ██║██║  ██║██║  ██║██║ ╚████║    ╚██████╗██║  ██║██║  ██║╚██████╔╝██║  ██║██║  ██║██║ ╚████║
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

---

## How it was built + AI usage?

I had the initial terminal design in my head for a long time and I knew I wanted it to be unique and interactive unlike a typical AI generated portfolio website. I'm not a designer by any means as you can tell from my initial figma design below and I had never created anything visually appealing with frontend frameworks.


<img width="623" height="515" alt="image" src="https://github.com/user-attachments/assets/b4b641aa-fa0e-4ed1-b4f2-feaa88b4f780" />


This is when I had decided to use AI. I promted claude-design my idea of the design and specifically told it: **Design requirements: - Single HTML file, no frameworks, vanilla JS only**. It had then generated one file that resembled my project close enough to what I wanted visually. 

From that point on, I was on my own. I dissected 1113 lines of code into an organized project with my choice of framework - React and TypeScript. That in of itself taught me so many different concepts I had never known. I had written each new concept I learned into my notes with pen and paper, making sure that if I was using a specifc line in the HTML file, I understood every single part of it. AI was not used for anything other than understanding coding principles and asking deeper questions about concepts. 

We live in an age where AI is literally used for everything, especially for minimal projects like these where Ai can easily "one shot" this type of code. It's up to the person to decide whether they are ok with not knowing how their code works or taking the time to understand from a powerful tool the very concepts you are passionatly interested in. I chose the latter. 

---

## What it does

On load, the page boots like a real shell session: a `Last login:` line, a typed-out `neofetch` command, and the classic neofetch two-column output — ASCII art on the left of my professional headshot, labeled system info on the right. After the boot animation finishes, a blinking cursor on a `shaan@portfolio:~$` prompt waits for input.

From there, it's interactive. Type a command, hit Enter, get styled output. Click anywhere in the window to refocus the input.

### Available commands

| command    | does                                                |
| ---------- | --------------------------------------------------- |
| `help`     | list every available command                        |
| `about`    | a short bio                                         |
| `projects` | selected projects with stack + year + description   |
| `skills`   | languages, frameworks, tools — with ASCII bar charts |
| `contact`  | every link you'd want to follow                     |
| `banner`   | reprint the ASCII banner of my name                 |
| `neofetch` | details of my life same as intro                    |
| `clear`    | clear the screen                                    |

## Future Goals

Add these new commands + effects

| effect/command    | does                                                |
| ---------- | --------------------------------------------------- |
| typewritter effect     | Terminal output gets printed smoothly like a typewriter                       |
| `timeline`    | shows my history as a student/devolper over the years                                         |
| `theme` | changes theme of terminal to users choosing  |

- domain name and hosting
- Mobile screens 


... to be continued

## Security
Not vulnerable to xss or anything else - at least that I know of
