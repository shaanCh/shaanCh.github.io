import { getStream } from '../data.ts'

export function commandClear(){
    const stream = getStream()
    if(!stream) return;
    stream.innerHTML = '';
}