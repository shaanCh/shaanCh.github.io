import { getStream } from './data.ts';
import { USER } from './data.ts';
import { TYPE_SPEED_CMD } from './data.ts';
import renderNeofetch from './commands/neofetch.tsx';
import { commandHelp } from './commands/help.ts';
import { commandClear } from './commands/clear.ts';
import { commandAbout } from './commands/about.ts';
import { commandProjects } from './commands/projects.ts';
import { commandSkills } from './commands/skills.ts';
import { commandContact } from './commands/contact.ts';
import { commandBanner } from './commands/banner.ts';

let pendingPromptEl: HTMLElement | null = null;
let activeInput: HTMLInputElement | null = null;
let busy: boolean = false;


export function createEl(tag: string, className: string, html?: string) {
    const element = document.createElement(tag);
    if(className) element.className = className;
    if(html) element.innerHTML = html;
    return element;
}


async function sleep(sleepyTimeMS: number){await new Promise(r => setTimeout(r, sleepyTimeMS))}

function buildWelcomeMessage() {
    const welcome = createEl('p', 'output welcome')
    welcome.textContent = `Last login: ${new Date().toString().slice(0,24)}`
    return welcome;
}

export function buildPS1() {
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
    promptLine.removeChild(cursor);
}

function helperBuildInputLine(){
    const inputLine = createEl('div', 'cmd-input') as HTMLInputElement;
    inputLine.contentEditable = "true";

    return inputLine;
}

// function typeWriterOutput(node: HTMLElement, speed: number){

// }

function appendLivePrompt(){
    if(pendingPromptEl) pendingPromptEl.remove();

    //Builing the prompt line
    const line = createEl('div', 'prompt-line');
    line.appendChild(buildPS1());

    // Building the input line
    const inp = helperBuildInputLine();
    line.appendChild(inp);

    //Building the blinking cursor
    const cursor = createEl('span', 'cursor');
    line.appendChild(cursor);

    // adding event listener for user input to detect keypresses and handle command execution
    inp.addEventListener('keydown', (e) => userInputKeypress(e));

    //Making sure if user clicks anywhere on the terminal body, the input gets focused so they can start typing
    const termBody = document.querySelector('.termBody');
    termBody!.addEventListener('click', () => {inp.focus()});

    //Adding prompt line to stream and setting active input and pending prompt references for later use
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(line);
    pendingPromptEl = line;
    activeInput = inp as HTMLInputElement;
    inp.focus();
}

async function userInputKeypress(e: KeyboardEvent){
    if(e.key === 'Enter'){
        e.preventDefault();
        const value = (activeInput!.textContent ?? '').trim();
        //replace with static text
        const parent = activeInput!.parentElement!;
        const cursor = parent.querySelector('.cursor')!;
        const typed = createEl('span', 'command-typed');
        typed.textContent = value;
        parent.replaceChild(typed, activeInput!);
        if(cursor) cursor.remove();
        pendingPromptEl = null;
        activeInput = null;
        await handleCommand(value);
        if(!busy) appendLivePrompt();
    }
}

async function handleCommand(trimmed_input: string){
    busy = true;
    if(trimmed_input.length === 0) {
        busy = false;
        return; 
    }
    // const [name, ...args] = trimmed_input.split(/\s+/);
    const name = trimmed_input.split(/\s+/)[0];
    const cmd = name.toLowerCase();

    try{
        switch(cmd){
            case 'help': await commandHelp(); break;
            case 'about': await commandAbout(); break;
            case 'projects': await commandProjects(); break;
            case 'skills': await commandSkills(); break;
            case 'contact': await commandContact(); break;
            case 'clear': await commandClear(); break;
            case 'neofetch': await renderNeofetch(); break;
            case 'banner': await commandBanner(); break;
            default:
                const stream = getStream();
                if(!stream) return;
                const error = createEl('div', 'out error');
                error.textContent = `Command not found: ${cmd}`;
                stream.appendChild(error);
        }
    } catch (err){
        const e = createEl('div', 'out error');
        e.textContent = `Error executing command: ${err instanceof Error ? err.message : String(err)}`;
        const stream = getStream();
        if(!stream) return;
        stream.appendChild(e);
    } finally {
        busy = false;
    }
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
    await commandBanner();
    renderNeofetch();

    const hint = createEl('div', 'out hint');
    hint.innerHTML = `type <span class="accent">help</span> to see commands, or try <span class="accent">projects</span>, <span class="accent">about</span>, <span class="accent">contact</span>, <span class="accent">skills</span>`;
    stream.appendChild(hint);

    appendLivePrompt();

}
