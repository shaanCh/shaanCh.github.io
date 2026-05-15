 Terminal Portfolio

> Welcome to my portfolio. I hope this design is interactive, intuitive, and fun to play around with. Hopefully you learn a thing or two about how I made this, walking through the code!

![status](https://img.shields.io/badge/status-live-4af626?style=flat-square&labelColor=0d1117)
![stack](https://img.shields.io/badge/stack-vanilla%20JS-5ec8ff?style=flat-square&labelColor=0d1117)
![size](https://img.shields.io/badge/footprint-single%20file-d27cff?style=flat-square&labelColor=0d1117)
![license](https://img.shields.io/badge/license-MIT-ffb454?style=flat-square&labelColor=0d1117)

```
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

---

## Why a terminal?

I've always been quietly obsessed with terminals. There's a particular kind of magic in a window that's just text on a black background — no chrome, no carousel of CTAs, no third-party tracker phoning home before the page paints. You type. It responds. That's the whole contract.

That contract has been the most durable user interface in computing. The teletype gave way to the glass TTY, the glass TTY gave way to the xterm, xterm gave way to iTerm and Alacritty and WezTerm — and despite five decades of "this will replace the command line" predictions, the prompt is still where serious work happens. Kernels are still configured through it. Servers are still administered through it. Half the modern web is shipped through `git push`. Every "AI agent" of the last two years ultimately boils down to a program that reads a line, runs a command, and prints a line back. The REPL is the original conversational interface.

What draws me in isn't nostalgia, though — it's the **velocity**. A well-tuned shell is the fastest UI on a computer. There's no waiting for animations to ease out, no hunting for the right menu, no modal asking if you're sure. You think in verbs and the machine thinks in verbs, so the impedance mismatch is roughly zero. The same keystroke does the same thing today as it did in 1979. That's an extraordinary amount of accumulated muscle memory to inherit for free.

This portfolio is a love letter to that lineage. It's a fully working portfolio — `about`, `projects`, `skills`, `contact` — but rendered through the interface that taught me what software could feel like.

---

## What it does

On load, the page boots like a real shell session: a `Last login:` line, a typed-out `neofetch` command (~40ms/char), and the classic neofetch two-column output — ASCII art on the left, labeled system info on the right. After the boot animation finishes, a blinking cursor on a `user@portfolio:~$` prompt waits for input.

From there, it's interactive. Type a command, hit Enter, get styled output. Use `↑`/`↓` to cycle history. Press `Tab` to autocomplete. `Ctrl+L` clears the screen. `Ctrl+C` cancels the current line. Click anywhere in the window to refocus the input.

### Available commands

| command    | does                                                |
| ---------- | --------------------------------------------------- |
| `help`     | list every available command                        |
| `about`    | a short bio                                         |
| `projects` | selected projects with stack + year + description   |
| `skills`   | languages, frameworks, tools — with ASCII bar charts |
| `contact`  | every link you'd want to follow                     |
| `whoami`   | print the current user                              |
| `date`     | print the current date                              |
| `echo`     | echo arguments back                                 |
| `ls`       | list the home directory                             |
| `pwd`      | print the working directory                         |
| `cat`      | read a "file" (`about.txt`, `skills.md`, etc.)      |
| `banner`   | reprint the ASCII banner                            |
| `neofetch` | re-run the boot animation                           |
| `theme`    | switch palette (`green` / `amber` / `blue`)         |
| `sudo`     | denied — with the proper message                    |
| `clear`    | clear the screen                                    |
| `exit`     | … there is no exit                                  |

Unknown input falls through to a proper `zsh: command not found: <name>` and a hint to try `help`.
