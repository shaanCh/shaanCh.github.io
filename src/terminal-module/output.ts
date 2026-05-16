import { USER } from './data.ts';

function createEl(tag: string, className: string, html?: string) {
    const element = document.createElement(tag);
    if(className) element.className = className;
    if(html) element.innerHTML = html;
    return element;
}

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

export async function boot(){
    const stream = document.getElementById('stream');
    if(!stream) return;
    stream.innerHTML = '';

    const welcomeMessage = buildWelcomeMessage();
    stream.appendChild(welcomeMessage);

    const promptLine = createEl('div', 'prompt-line');
    promptLine.appendChild(buildPS1());
    
    stream?.appendChild(promptLine);
}
