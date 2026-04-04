import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function AboutSection({ content }) {
  return (
    <section id="about" className="section">
      <div className="container section-layout about-layout">
        <Reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="about-content">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="strength-list">
              {content.strengths.map((item) => (
                <article key={item} className="strength-card">
                  <span className="strength-marker" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
