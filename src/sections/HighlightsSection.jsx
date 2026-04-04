import Reveal from "../components/Reveal";

export default function HighlightsSection({ education, highlights }) {
  return (
    <section className="section">
      <div className="container split-grid">
        <Reveal>
          <article className="info-card">
            <span className="section-eyebrow">{education.eyebrow}</span>
            <h3>{education.title}</h3>
            <p>{education.institute}</p>
            <div className="info-row">
              <span>{education.period}</span>
              <strong>{education.cgpa}</strong>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="info-card">
            <span className="section-eyebrow">{highlights.eyebrow}</span>
            <h3>{highlights.title}</h3>
            <ul className="simple-list">
              {highlights.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
