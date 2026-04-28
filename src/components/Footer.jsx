// Footer component - shows the final call to action and bottom navigation
import { footerLinks } from "../data/siteContent";

// Footer section appears at the bottom of the page with:
// - Final CTA (Call to Action) to sign up
// - Brand logo and links section
// - Copyright information
const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Final call to action section - encourages users to sign up */}
      <section className="final-cta card">
        <div>
          <span className="eyebrow">100% independent. Always.</span>
          <h2>Protect your family from hidden toxins</h2>
          <p className="section-subtitle">
            Olive never needs brand deals or ads in this UI concept. The design
            stays focused on trust, food safety, and family-first decisions.
          </p>
        </div>

        {/* Main sign up button - primary action */}
        <a
          className="button button-primary"
          href="https://signup.oliveapp.com/olive-onboarding/"
        >
          Sign up for Olive today
        </a>
      </section>

      {/* Footer navigation bar with logo and links */}
      <div className="footer-bar">
        {/* Logo link back to top */}
        <a className="brand" href="#top" aria-label="Olive home">
          <span className="brand-mark">O</span>
          <span>Olive</span>
        </a>

        {/* List of helpful footer links - Blog, Contact, Privacy, etc */}
        <div className="footer-links">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright and description text at the very bottom */}
      <div className="footer-copy">
        <span>© 2026 Olive Inc.</span>
        <span>Designed as a frontend clone for Olive app landing page.</span>
      </div>
    </footer>
  );
};

export default Footer;
