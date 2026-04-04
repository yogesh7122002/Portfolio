import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";

export default function HeroSection({
  heroData,
  personalInfo,
  socials,
  focusAreas,
  metrics,
  onNavigate,
}) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-layout">
        <Reveal>
          <div className="hero-copy">
            <span className="status-pill">{heroData.availability}</span>
            <p className="hero-kicker">{heroData.kicker}</p>
            <h1>{heroData.heading}</h1>
            <p className="hero-summary">{heroData.summary}</p>

            <div className="hero-actions">
              <button type="button" className="button button-primary" onClick={() => onNavigate("projects")}>
                View projects
              </button>
              <a className="button button-secondary" href={personalInfo.resumeFile} target="_blank" rel="noreferrer">
                Open resume
              </a>
            </div>

            <SocialLinks socials={socials} className="hero-links" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <aside className="hero-panel">
            <div className="panel-card panel-card-primary">
              <p className="panel-label">At a glance</p>
              <div className="panel-stack">
                <div>
                  <span className="panel-title">Location</span>
                  <span className="panel-value">{personalInfo.location}</span>
                </div>
                <div>
                  <span className="panel-title">Email</span>
                  <a className="panel-link" href={personalInfo.emailHref}>
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="panel-title">Primary stack</span>
                  <span className="panel-value">{heroData.primaryStack}</span>
                </div>
              </div>
            </div>

            <div className="panel-card">
              <p className="panel-label">Focus areas</p>
              <div className="tag-list">
                {focusAreas.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="container metrics-grid">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 80}>
            <div className="metric-card">
              <strong>{metric.value}</strong>
              <div className="metric-copy">
                <span>{metric.label}</span>
                {metric.detail ? <small>{metric.detail}</small> : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
