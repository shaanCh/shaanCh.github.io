import { getStream, PROJECTS } from '../data';
import { createEl } from '../output.ts'

export async function commandProjects(){
    const projectsDiv = createEl('div', 'out section');
    const title = createEl('h3', '', 'Projects');
    projectsDiv.appendChild(title);

    const projectsList = createEl('div', 'projects-list');
    for(const proj of PROJECTS){
        const card = createEl('div', 'project');
        card.innerHTML = `
        <div class="title-row">
            <span class="name">${proj.name}</span>
            <span class="year">${proj.year}</span>
            <span class="stack">${proj.stack}</span>
        </div>
        <div class="desc">${proj.desc}</div>`;
        projectsList.appendChild(card);

    }
    projectsDiv.appendChild(projectsList);
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(projectsDiv);
}