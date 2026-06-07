import { getStream } from "../data.ts";
import { createEl } from "../output";

export async function commandAbout(){
    const aboutDiv = createEl('div', 'out section');
    const title = createEl('h3', '', 'About Me');
    aboutDiv.appendChild(title);

    const aboutText = createEl('div', 'about-text');
    aboutText.innerHTML =  `<p>Hey, I'm Shaan! I'm glad you found my website and I hope you like the interactive design. I'm definetly not a frontend developer, but my curiosity took the best of me and I wanted to try and build the same terminal design I invisioned in my head with the least amount of AI help as I could. Shoutout Jeff at ITL for motivating me to start and try and finish this project. I present to you the <span class="bold">Terminal Portfolio Project</span>.</p>` +
    `<p>I'm a student at <span class="university">CU Boulder</span>, and I love coding and circuits. My projects include both hardware and software components because I love the vast capability of what you can create with easy cheap components. My goal in the future is to create a product that can help thousands if not millions of people with their daily lives and I hope to acheive that through my extensive knowlege of coding, electronics, curiosity, and motivation. The startup world will know my name.</p>` +
    `<p>Besides my technical side, I love being outside and active. I spend a lot of my time at the gym or prepping my next healthy meal. I'm not just the regular old "Gym BRO", I genuinly believe that health is wealth and I try to live by that motto as best as I can. My physical goals are to look and feel more atheletic, daily stretching, eating and feeling healthy. Let me recommend these food for your diet immediately: <span class="spinach">spinach</span>, <span class="beet-juice">beet juice</span>, <span class="tumeric">tumeric</span>, <span class="walnuts">walnuts</span>, <span class="fish">fish</span>. If artificial intelligence takes my job then no worries I can go back to my roots and become a physical trainer instead, so let me know if you'd like a free session to help me jumpstart my backup career. </p>`;
    aboutDiv.appendChild(aboutText);

    const stream = getStream();
    if(!stream) return;
    stream.appendChild(aboutDiv);
}