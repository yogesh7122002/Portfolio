function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.2 14.4A8.8 8.8 0 0 1 9.6 3.8A9.5 9.5 0 1 0 20.2 14.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M12 2.8v2.3M12 18.9v2.3M21.2 12h-2.3M5.1 12H2.8M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1L5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader({
  navigation,
  activeSection,
  menuOpen,
  scrolled,
  theme,
  onToggleTheme,
  onToggleMenu,
  onNavigate,
  resumeHref,
  brand,
}) {
  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="container header-inner">
        <button className="brand" type="button" onClick={() => onNavigate("home")}>
          {brand}
        </button>

        <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}>
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? "nav-link nav-link-active" : "nav-link"}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="button button-ghost nav-resume" href={resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        <div className="header-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
            onClick={onToggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
