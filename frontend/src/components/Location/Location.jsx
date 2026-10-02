import "./Location.css";

function Location() {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Bokshi+Jhora%2C+Near+Batasia+Loop%2C+Darjeeling";

  return (
    <section className="location" id="location">
      <div className="location-content">
        <div className="location-text">
          <p className="section-label">FIND US</p>

          <h2>Location</h2>

          <p className="location-address">
            Bokshi Jhora, Near Batasia Loop, Darjeeling
          </p>

          <p className="location-description">
            Serenity Stay is located near the iconic Batasia Loop, offering a
            peaceful stay surrounded by the beauty of Darjeeling while keeping
            you close to some of the town's most memorable sights.
          </p>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-link"
          >
            Open in Google Maps →
          </a>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps?q=Bokshi+Jhora,+Near+Batasia+Loop,+Darjeeling&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Serenity Stay location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
