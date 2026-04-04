import { useEffect, useMemo, useState } from "react";
import "./App.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  aboutSection,
  contactSection,
  education,
  experience,
  experienceSection,
  focusAreas,
  heroData,
  highlightsCard,
  metrics,
  navigation,
  personalInfo,
  projects,
  projectsSection,
  skillGroups,
  skillsSection,
  socials,
} from "./data/portfolioData";
import useActiveSection from "./hooks/useActiveSection";
import useTheme from "./hooks/useTheme";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navigation.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="page-grid" />

      <SiteHeader
        navigation={navigation}
        activeSection={activeSection}
        menuOpen={menuOpen}
        scrolled={scrolled}
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={scrollToSection}
        resumeHref={personalInfo.resumeFile}
        brand={personalInfo.name}
      />

      <main>
        <HeroSection
          heroData={heroData}
          personalInfo={personalInfo}
          socials={socials}
          focusAreas={focusAreas}
          metrics={metrics}
          onNavigate={scrollToSection}
        />
        <AboutSection content={aboutSection} />
        <ExperienceSection sectionContent={experienceSection} items={experience} />
        <ProjectsSection sectionContent={projectsSection} projects={projects} />
        <SkillsSection sectionContent={skillsSection} groups={skillGroups} />
        <HighlightsSection education={education} highlights={highlightsCard} />
        <ContactSection sectionContent={contactSection} personalInfo={personalInfo} />
      </main>

      <SiteFooter socials={socials} />
    </div>
  );
}

export default App;
