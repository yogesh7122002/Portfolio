import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function ContactSection({ sectionContent, personalInfo }) {
  return (
    <section id="contact" className="section section-last">
      <div className="container contact-shell">
        <Reveal>
          <SectionHeader
            eyebrow={sectionContent.eyebrow}
            title={sectionContent.title}
            description={sectionContent.description}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-card">
            <div className="contact-grid">
              <div>
                <span className="contact-label">Email</span>
                <a href={personalInfo.emailHref}>{personalInfo.email}</a>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <a href={personalInfo.phoneHref}>{personalInfo.phone}</a>
              </div>
              <div>
                <span className="contact-label">Location</span>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href={personalInfo.emailHref}>
                Send an email
              </a>
              <a className="button button-secondary" href={personalInfo.resumeFile} target="_blank" rel="noreferrer">
                View resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
