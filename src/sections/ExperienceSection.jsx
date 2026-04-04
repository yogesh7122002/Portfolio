import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function ExperienceSection({ sectionContent, items }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={sectionContent.eyebrow}
            title={sectionContent.title}
            description={sectionContent.description}
          />
        </Reveal>

        <div className="experience-list">
          {items.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 90}>
              <article className="experience-card">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <div className="experience-body">
                  <div className="experience-header">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
