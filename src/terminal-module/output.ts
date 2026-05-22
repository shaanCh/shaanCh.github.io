import { getStream } from './data.ts';
import { USER } from './data.ts';
import { TYPE_SPEED_CMD } from './data.ts';
import renderNeofetch from './commands/neofetch.tsx';

function createEl(tag: string, className: string, html?: string) {
    const element = document.createElement(tag);
    if(className) element.className = className;
    if(html) element.innerHTML = html;
    return element;
}


async function sleep(sleepyTimeMS: number){await new Promise(r => setTimeout(r, sleepyTimeMS))}

function buildWelcomeMessage() {
    const welcome = createEl('div', 'output welcome')
    welcome.textContent = `Last login: ${new Date().toString().slice(0,24)}`
    return welcome;
}

function buildPS1() {
    const ps1 = createEl('span', 'ps1');
    ps1.innerHTML = `<span class="user">${USER.handle}</span><span class="at">@</span><span class="host">${USER.host}</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span>`
    return ps1;
}

async function typeCommand(command: string, speed = TYPE_SPEED_CMD, callback?: () => void){
    const promptLine = document.querySelector('.prompt-line');
    if(!promptLine) return;
    const commandEl = createEl('span', 'command-typed');
    promptLine.appendChild(commandEl);
    const cursor = createEl('span', 'cursor cursor--inline');
    promptLine.appendChild(cursor);

    for(let i = 0; i < command.length; i++){
        commandEl.textContent += command[i];
        // scrolldown()
        await sleep(speed)
    }
    await callback?.();
}

export async function boot(){
    const stream = getStream();
    if(!stream) return;
    stream.innerHTML = '';

    const welcomeMessage = buildWelcomeMessage();
    stream.appendChild(welcomeMessage);

    const promptLine = createEl('div', 'prompt-line');
    promptLine.appendChild(buildPS1());
    
    stream?.appendChild(promptLine);
    await typeCommand('neofetch', TYPE_SPEED_CMD);
    renderNeofetch();
}

export { createEl };