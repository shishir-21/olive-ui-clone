import { footerLinks } from "../data/siteContent";

// Footer component - shows the final CTA, footer links, email form, and policies
const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Final call to action uses the same promise as the live Olive footer */}
      <section className="footer-cta">
        <img
          src="/images/footer-cta-family.png"
          alt="Family enjoying dinner together"
          className="footer-cta-bg"
        />
        <div className="footer-cta-overlay" />

        <div className="footer-cta-content">
          <h2>
            Keep your family
            <br />
            safe with Olive
          </h2>
          <ul className="footer-cta-points">
            <li>Effortless food scanning</li>
            <li>Peace of mind for parents</li>
            <li>Healthy product recommendations</li>
          </ul>
          <a
            className="button button-secondary"
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          >
            Download for iOS
          </a>
        </div>

        <span className="footer-cta-line top-left" aria-hidden="true" />
        <span className="footer-cta-line mid-right" aria-hidden="true" />
        <span className="footer-cta-line bottom-right" aria-hidden="true" />
      </section>

      <div className="footer-bar">
        <a className="brand" href="#top" aria-label="Olive home">
          <span className="brand-mark">O</span>
          <span>Olive</span>
        </a>

        {/* Link groups match the Explore and About columns from Olive */}
        <div className="footer-links">
          {footerLinks.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}

          <div className="footer-link-group">
            <h3>Subscribe</h3>
            <p>Get the latest lab testing data sent directly to your inbox.</p>
            <form className="subscribe-form">
              <input aria-label="Email address" placeholder="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <span>Copyright 2026 Olive Inc.</span>
        <a href="https://www.oliveapp.com/terms-of-service">Terms of Service</a>
        <a href="https://www.oliveapp.com/privacy-policy">Privacy Policy</a>
        <a href="https://www.oliveapp.com/refund-policy">Refund Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
