import { useEffect } from "react";
import { boot } from '../../terminal-module';
import './TerminalBody.css';

const TerminalBody = () => {
  useEffect(() => {
    boot();
  }, []);
  return (
    <div className="termBody">
        <div className="stream" id="stream"></div>
    </div>
  )
}

export default TerminalBody