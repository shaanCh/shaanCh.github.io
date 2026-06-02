import { getStream } from "../data.ts";
import { createEl } from "../output";
import { SKILLS } from "../data";

function helperSkillName(skillName: string | number){
    return `<span class="skill-name">${skillName}</span>`
}

function helperBar(level: number | string, max = 10) {
  const filled = "█".repeat(Number(level));
  const empty  = "░".repeat(max - Number(level));
  return `<span class="bar">${filled}<span class="empty">${empty}</span></span>`;
}

export async function commandSkills(){
    const skillsDiv = createEl('div', 'out section');
    const title = createEl('h3', '', 'Skills');
    skillsDiv.appendChild(title);

    const skillsGrid = createEl('div', 'skills-grid');
    for(const category of SKILLS){
        const catDiv = createEl('div', 'skill-category');
        let skillRows = `<div class="title">${category.title}</div>`
        skillRows += `<div class="items">`;
        for(const [skill, level] of category.items){
            skillRows += `<div>${helperSkillName(skill)}${helperBar(level)}</div>`;
        }
        skillRows += `</div>`;
        catDiv.innerHTML = skillRows;
        skillsGrid.appendChild(catDiv);
    }
    skillsDiv.appendChild(skillsGrid);
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(skillsDiv);
}