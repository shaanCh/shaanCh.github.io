import { getStream } from './data.ts';
import { USER } from './data.ts';
import { TYPE_SPEED_CMD } from './data.ts';
import renderNeofetch from './commands/neofetch.tsx';
import { commandHelp } from './commands/help.ts';

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
    promptLine.removeChild(cursor);
}

function appendLivePrompt(){
    if(pendingPromptEl) pendingPromptEl.remove();

    const line = createEl('div', 'prompt-line');
    line.appendChild(buildPS1());

    const inp = createEl('input', 'cmd-input');
    inp.setAttribute('id', 'cmd-input');
    inp.setAttribute('autocomplete', 'off');
    inp.setAttribute('autocorrect', 'off');
    inp.setAttribute('autocapitalize', 'off');
    inp.setAttribute('spellcheck', 'false');
    inp.setAttribute('aria-label', 'command line input');

    // const userOutputText  = createEl('div', 'cmd-output');
    line.appendChild(inp);
    // line.appendChild(userOutputText);

    const cursor = createEl('span', 'cursor');
    line.appendChild(cursor);

    inp.addEventListener('keydown', userInputKeypress);

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
        const value = activeInput!.value.trim();
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
    const [name, ...args] = trimmed_input.split(/\s+/);
    const cmd = name.toLowerCase();

    try{
        switch(cmd){
            case 'help': await commandHelp(); break;
            case 'about':
                // show about info
                break;
            case 'projects':
                // show projects
                break;
            case 'contact':
                // show contact info
                break;
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
    renderNeofetch();

    const hint = createEl('div', 'out hint');
    hint.innerHTML = `type <span class="accent">help</span> to see commands, or try <span class="accent">projects</span>, <span class="accent">about</span>, <span class="accent">contact</span>.`;
    stream.appendChild(hint);

    appendLivePrompt();

}
