import { createEl } from "../output";
import { getStream } from "../data";
import { COMMANDS_HELP } from "../data";

export function commandHelp(){
    const helpDiv = createEl('div', 'out section');
    const title = createEl('h3', '', 'Available Commands');
    helpDiv.appendChild(title);
    const grid = createEl('div', 'help-grid');

    for (const [cmd, desc] of COMMANDS_HELP){
        const cmdEl = createEl('div', 'cmd');
        cmdEl.textContent = cmd;
        const descEl = createEl('div', 'desc');
        descEl.textContent = desc;
        grid.appendChild(cmdEl);
        grid.appendChild(descEl);
    }
    helpDiv.appendChild(grid);
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(helpDiv);
}