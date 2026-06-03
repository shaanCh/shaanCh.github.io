import { USER } from '../../../terminal-module/data'

const NeoFetch_info = () => {
    const headerStr = `${USER.handle}@${USER.host}`;
    const rule = "-".repeat(headerStr.length);


  return (
    <div className='nf-info'>
        <div className="header"><span className="u">{USER.handle}</span><span className="at">@</span><span className="host">{USER.host}</span></div>
        <div className="rule">{rule}</div>
        <div className="nf-row"><span className="k">Name</span><span className="v">{USER.name}</span></div>
        <div className="nf-row"><span className="k">Role</span><span className="v">{USER.role}</span></div>
        <div className="nf-row"><span className="k">Location</span><span className="v">{USER.location}</span></div>
        <div className="nf-row"><span className="k">Education</span><span className="v">{USER.education}</span></div>
        <div className="nf-row"><span className="k">Languages</span><span className="v">{USER.languages}</span></div>
        <div className="nf-row"><span className="k">Frameworks</span><span className="v">{USER.frameworks}</span></div>
        <div className="nf-row"><span className="k">Tools</span><span className="v">{USER.tools}</span></div>
        <div className="nf-row"><span className="k">Interests</span><span className="v">{USER.interests}</span></div>
        <div className="nf-row"><span className="k">GitHub</span><span className="v"><a href={USER.github.url} target="_blank" rel="noopener noreferrer">{USER.github.label}</a></span></div>
        <div className="nf-row"><span className="k">LinkedIn</span><span className="v"><a href={USER.linkedin.url} target="_blank" rel="noopener noreferrer">{USER.linkedin.label}</a></span></div>
        <div className="nf-row"><span className="k">Email</span><span className="v"><a href={USER.email.url} target="_blank" rel="noopener noreferrer">{USER.email.label}</a></span></div>
        <div className="nf-row"><span className="k">Website</span><span className="v"><a href={USER.website.url} target="_blank" rel="noopener noreferrer">{USER.website.label}</a></span></div>
        <div className="palette-wrap" aria-hidden="true">
        <div className="swatch-row"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></ span ></ div >
        <div className="swatch-row dim"><span></span><span></span><span></span><span></span><span></span><span></span><span></ span>< span ></ span ></ div >
        </div>
      </div>
  )
}

export default NeoFetch_info