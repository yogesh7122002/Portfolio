import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

export default function ProjectsSection({ sectionContent, projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={sectionContent.eyebrow}
            title={sectionContent.title}
            description={sectionContent.description}
          />
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="project-card">
                <span className="project-note">{project.note}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
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
