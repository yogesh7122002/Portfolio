import SocialLinks from "./SocialLinks";

export default function SiteFooter({ socials }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>"Keep building, keep learning, and let consistency create the difference."</p>
        <SocialLinks socials={socials} />
      </div>
    </footer>
  );
}
