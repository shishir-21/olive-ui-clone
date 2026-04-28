import { footerLinks } from "../data/siteContent";

// Footer component - shows the final CTA, footer links, email form, and policies
const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Final call to action uses the same promise as the live Olive footer */}
      <section className="footer-cta">
        <h2>Keep your family safe with Olive</h2>
        <div className="footer-benefits">
          <span>Effortless food scanning</span>
          <span>Peace of mind for parents</span>
          <span>Healthy product recommendations</span>
        </div>
        <a
          className="button button-primary"
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
        >
          Download for iOS
        </a>
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
