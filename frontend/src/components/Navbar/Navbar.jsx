import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Brand */}

      <a href="#home" className="navbar-brand" onClick={closeMenu}>
        <img src="/logo.png" alt="Serenity Stay logo" className="navbar-logo" />

        <span className="brand-name">Serenity Stay</span>
      </a>

      {/* Desktop Navigation */}

      <div className="navbar-links">
        <a href="#home">Home</a>

        <a href="#gallery">Gallery</a>

        <a href="#videos">Videos</a>

        <a href="#location">Location</a>

        <a href="#contact">Contact</a>
      </div>

      {/* Desktop CTA */}

      <a href="#contact" className="navbar-button">
        Check Availability
      </a>

      {/* Mobile Menu Button */}

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X size={26} strokeWidth={1.8} />
        ) : (
          <Menu size={26} strokeWidth={1.8} />
        )}
      </button>

      {/* Mobile Navigation */}

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#videos" onClick={closeMenu}>
          Videos
        </a>

        <a href="#location" onClick={closeMenu}>
          Location
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contact" className="mobile-menu-button" onClick={closeMenu}>
          Check Availability
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
