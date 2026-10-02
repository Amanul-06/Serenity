import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* BRAND */}

        <div className="footer-brand">
          <h2>Serenity Stay</h2>

          <p>
            A peaceful homestay experience in the heart of Darjeeling,
            surrounded by the beauty of the hills.
          </p>
        </div>

        {/* NAVIGATION */}

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#location">Location</a>
        </div>

        {/* CONTACT */}

        <div className="footer-contact">
          <h3>Visit Us</h3>

          <p>
            Bokshi Jhora,
            <br />
            Near Batasia Loop,
            <br />
            Darjeeling
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bokshi+Jhora%2C+Near+Batasia+Loop%2C+Darjeeling"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Serenity Stay. All rights reserved.</p>

        <p>Darjeeling, West Bengal</p>
      </div>
    </footer>
  );
}

export default Footer;
