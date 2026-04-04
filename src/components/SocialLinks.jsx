function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4.25" fill="#0A66C2" />
      <path
        fill="#ffffff"
        d="M8.2 9.45H6.7V17.5H8.2V9.45Zm.15-2.52c0-.52-.39-.93-.9-.93-.52 0-.9.41-.9.93s.37.93.88.93h.01c.53 0 .91-.41.91-.93ZM17.5 12.55c0-2.16-1.15-3.17-2.69-3.17-1.24 0-1.79.69-2.1 1.17v-1.1h-1.5c.02.73 0 8.05 0 8.05h1.5V13c0-.24.01-.48.07-.64.19-.48.62-.97 1.35-.97.96 0 1.34.74 1.34 1.82v4.29h1.5c0 0 .03-4.28.03-4.95Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.37-1.344-3.37-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.505.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.399.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10.2 3.3L5.35 8.15a5.45 5.45 0 0 0 0 7.7l4.85 4.85"
        fill="none"
        stroke="#0b0b0f"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9 5.4L17.95 9.45"
        fill="none"
        stroke="#f5a623"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.95 14.55L13.9 18.6"
        fill="none"
        stroke="#f5a623"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 12H17.25"
        fill="none"
        stroke="#b9b9bd"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  LeetCode: LeetCodeIcon,
};

export default function SocialLinks({ socials, className = "" }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {socials.map((social) => {
        const Icon = iconMap[social.label];

        return (
          <a
            key={social.label}
            className="social-link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            {Icon ? <Icon /> : <span>{social.label.slice(0, 1)}</span>}
          </a>
        );
      })}
    </div>
  );
}
