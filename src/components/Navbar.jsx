import { navLinks } from "../data/siteContent";

// Navbar component - the top navigation bar visible on all pages
// Shows Olive logo, live-site navigation links, sign in link, and app button
const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo and brand name - links back to top of page */}
      <a className="brand" href="#top" aria-label="Olive home">
        <img src="/logo.png" alt="Olive logo" style={{ height: "55px", objectFit: "contain", transform: "scale(1.3)", marginLeft: "20px" }} />

      </a>

      {/* Main navigation menu links */}
      <nav className="nav-links" aria-label="Main navigation">
        <span className="nav-group-label">Solutions</span>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right side action buttons - Sign in and Get Olive */}
      <div className="nav-actions">
        {/* Link to sign in page */}
        <a className="nav-signin" href="https://www.oliveapp.com/sign-in">
          Sign in
        </a>
        {/* Primary button - download app on App Store */}
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
