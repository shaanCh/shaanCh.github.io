import { createEl } from '../output'
import { CONTACT, getStream } from '../data'

function methodName(contactMethod: object){
    const key = Object.keys(contactMethod)[0];
    return `<span class="contact-method-name">${key}: </span> `
}

function methodLink(contactMethod: object){
    const url = Object.values(contactMethod)[0].url;
    const label = Object.values(contactMethod)[0].label;
    return `<a href="${url}" target="_blank">${label}</a>`
}
 
export async function commandContact(){
    const contactDiv = createEl('div', 'out section')
    const contactTitle = createEl('h3', '', 'Contact Me')

    contactDiv.appendChild(contactTitle)
    for(const contactMethod of CONTACT){
        const contactMethodDiv = createEl('div', 'contact-method')
        contactMethodDiv.innerHTML = `${methodName(contactMethod)}${methodLink(contactMethod)}`
        contactDiv.appendChild(contactMethodDiv)
    }
    const stream = getStream();
    if(!stream) return;
    stream.appendChild(contactDiv);
}