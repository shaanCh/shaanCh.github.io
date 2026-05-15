import "./TerminalHeader.css"
const TerminalHeader = () => {
  return (
    <div className="termHead_bar">
        <div className="termHead_buttons">
            <span className="termHead_button termHead_button--red"></span>
            <span className="termHead_button termHead_button--yellow"></span>
            <span className="termHead_button termHead_button--green"></span>
        </div>
        <div className="termHead_title">shaan@portfolio: ~</div>
        <div className="termHead_clock">--:--</div>
    </div>
  )
}

export default TerminalHeader       