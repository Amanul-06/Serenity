import { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "/Hero/hero-1.png",
  "/Hero/hero-2.png",
  "/Hero/hero-3.png",
  "/Hero/hero-4.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Images */}
      <div className="hero-slideshow">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Serenity Stay view ${index + 1}`}
            className={`hero-image ${
              index === currentImage ? "hero-image-active" : ""
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-subtitle">A peaceful stay in Darjeeling</p>

        <h1>
          Stay in the heart of
          <br />
          the Queen of the Hills.
        </h1>

        <p className="hero-description">
          Experience comfort, warmth, and beautiful mountain views at Serenity
          Stay.
        </p>

        <div className="hero-actions">
          <a href="#rooms" className="hero-button">
            Explore Rooms
          </a>

          <a href="#contact" className="hero-link">
            Check Availability →
          </a>
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              index === currentImage ? "hero-dot-active" : ""
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
