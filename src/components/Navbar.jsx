import { navLinks } from "../data/siteContent";

// Navbar component - the top navigation bar visible on all pages
// Shows Olive logo, navigation menu, sign in link, and download button
const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo and brand name - links back to top of page */}
      <a className="brand" href="#top" aria-label="Olive home">
        <span className="brand-mark">O</span>
        <span>Olive</span>
      </a>

      {/* Main navigation menu links */}
      <nav className="nav-links" aria-label="Main navigation">
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
