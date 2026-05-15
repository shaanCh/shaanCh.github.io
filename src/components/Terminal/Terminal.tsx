import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";
import "./Terminal.css"

const MyTerminal = () => {
    return (
        <div className="terminal">
            <TerminalHeader />
            <TerminalBody />
        </div>
    );
}

export default MyTerminal;