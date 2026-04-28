// Footer shows the final call to action and the site bottom bar
import { footerLinks } from "../data/siteContent";

// Footer shows the final call to action and the site bottom text links
const Footer = () => {
  return (
    <footer className="footer-section">
      <section className="final-cta card">
        <div>
          <span className="eyebrow">100% independent. Always.</span>
          <h2>Protect your family from hidden toxins</h2>
          <p className="section-subtitle">
            Olive never needs brand deals or ads in this UI concept. The design
            stays focused on trust, food safety, and family-first decisions.
          </p>
        </div>

        <a
          className="button button-primary"
          href="https://signup.oliveapp.com/olive-onboarding/"
        >
          Sign up for Olive today
        </a>
      </section>

      <div className="footer-bar">
        <a className="brand" href="#top" aria-label="Olive home">
          <span className="brand-mark">O</span>
          <span>Olive</span>
        </a>

        <div className="footer-links">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-copy">
        <span>© 2026 Olive Inc.</span>
        <span>Designed as a frontend clone for Olive app landing page.</span>
      </div>
    </footer>
  );
};

export default Footer;
