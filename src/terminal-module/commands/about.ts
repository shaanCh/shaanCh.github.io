import { getStream, USER } from "../data.ts";
import { createEl } from "../output";

export async function commandAbout(){
    const aboutDiv = createEl('div', 'out section');
    const title = createEl('h3', '', 'About Me');
    aboutDiv.appendChild(title);
    const p1 = createEl('div', '');
    p1.innerHTML = `Hi, I'm <span class="white">${USER.name}</span> — a <span class="accent">${USER.role.toLowerCase()}</span> based in <span class="amber">${USER.location}</span>.`;
    const p2 = createEl('div', '');
    p2.style.marginTop = '6px';
    p2.textContent = `I build tools that respect the people who use them: fast, legible, and a little bit playful. I care a lot about systems thinking, good defaults, and the boring middle layer of software that nobody writes about.`;
    const p3 = createEl('div', '');
    p3.style.marginTop = '6px';
    p3.innerHTML = `Currently studying at <span class="magenta">${USER.education}</span>. Off the keyboard I'm usually <span class="muted">${USER.interests}</span>.`;
    aboutDiv.append(p1, p2, p3);
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(aboutDiv);
}