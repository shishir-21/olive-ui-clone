import { navLinks } from "../data/siteContent";

// Navbar shows the top brand, links, and download button
const Navbar = () => {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Olive home">
        <span className="brand-mark">O</span>
        <span>Olive</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-signin" href="https://www.oliveapp.com/sign-in">
          Sign in
        </a>
        <a
          className="button button-primary"
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
        >
          Get Olive
        </a>
      </div>
    </header>
  );
};

export default Navbar;
