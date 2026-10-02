import { useEffect, useState } from "react";
import "./Gallery.css";

const galleryImages = [
  "/Gallery/gallery1.jpg",
  "/Gallery/gallery2.jpg",
  "/Gallery/gallery3.jpg",
  "/Gallery/gallery4.jpg",
  "/Gallery/gallery5.jpg",
  "/Gallery/gallery6.jpg",
  "/Gallery/gallery7.jpg",
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % galleryImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const leftIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;

  const rightIndex = (currentIndex + 1) % galleryImages.length;

  return (
    <section className="gallery" id="gallery">
      {/* =========================
          HEADING
      ========================= */}

      <div className="gallery-heading">
        <p className="section-label">EXPLORE SERENITY STAY</p>

        <h2>Gallery</h2>

        <p>
          A glimpse of the comfort, views, and experiences waiting for you at
          Serenity Stay.
        </p>
      </div>

      {/* =========================
          CAROUSEL
      ========================= */}

      <div className="gallery-carousel">
        {/* Previous Button */}

        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Images */}

        <div className="gallery-images">
          {/* Left Image */}

          <div className="gallery-side gallery-left">
            <img src={galleryImages[leftIndex]} alt="Serenity Stay" />
          </div>

          {/* Main Image */}

          <div className="gallery-main">
            <img src={galleryImages[currentIndex]} alt="Serenity Stay" />
          </div>

          {/* Right Image */}

          <div className="gallery-side gallery-right">
            <img src={galleryImages[rightIndex]} alt="Serenity Stay" />
          </div>
        </div>

        {/* Next Button */}

        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>

        {/* Counter */}

        <div className="gallery-counter">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>

          <span className="counter-divider">/</span>

          <span>{String(galleryImages.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
