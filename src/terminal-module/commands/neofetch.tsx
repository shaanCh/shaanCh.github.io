import ReactDOM from 'react-dom/client';
import { createEl } from '../output.ts';
import AsciiArtFace from '../../components/Terminal/NeoFetch/Ascii.tsx';

function renderNeofetch() {
    const stream = document.getElementById('stream');
    if(!stream) return;
    const neofetchContainer = createEl('div', 'neofetch-container');
    const rootContainer = ReactDOM.createRoot(neofetchContainer);
    rootContainer.render(<AsciiArtFace />);
    stream.appendChild(neofetchContainer);
}

export default renderNeofetch;