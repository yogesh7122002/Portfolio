import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function SkillsSection({ sectionContent, groups }) {
  return (
    <section id="skills" className="section">
      <div className="container section-layout">
        <Reveal>
          <SectionHeader
            eyebrow={sectionContent.eyebrow}
            title={sectionContent.title}
            description={sectionContent.description}
          />
        </Reveal>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <article className="skill-card">
                <div className="skill-card-head">
                  <h3>{group.title}</h3>
                  <span className="skill-count">{group.items.length} skills</span>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
