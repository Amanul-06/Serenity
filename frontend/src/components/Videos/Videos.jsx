import { useState } from "react";
import "./Videos.css";

const videos = [
  "https://www.youtube.com/watch?v=XYwP-QndGG0&pp=ygUKZGFyamVlbGluZw%3D%3D",
  "https://www.youtube.com/shorts/HXmFcOCuikI",
  "https://www.youtube.com/watch?v=uhyuhYx45g4&pp=ygUKZGFyamVlbGluZw%3D%3D",
  "https://www.youtube.com/shorts/QzgidV3L0AE",
];

function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^?&/]+)/,
  );

  return match ? match[1] : "";
}

function isShort(url) {
  return url.includes("/shorts/");
}

function Videos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((currentIndex + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  const leftIndex = (currentIndex - 1 + videos.length) % videos.length;
  const rightIndex = (currentIndex + 1) % videos.length;

  const renderVideo = (url, position) => {
    const videoId = getYouTubeId(url);
    const short = isShort(url);

    return (
      <div
        className={`video-card video-${position} ${
          short ? "video-short" : "video-landscape"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Serenity Stay video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <section className="videos" id="videos">
      <div className="videos-heading">
        <p className="section-label">EXPERIENCE SERENITY STAY</p>

        <h2>Videos</h2>

        <p>
          Take a closer look at Serenity Stay, Darjeeling, through our videos.
        </p>
      </div>

      <div className="videos-carousel">
        <button
          className="videos-arrow videos-arrow-left"
          onClick={previousVideo}
          aria-label="Previous video"
        >
          ‹
        </button>

        <div className="videos-display">
          {renderVideo(videos[leftIndex], "left")}

          {renderVideo(videos[currentIndex], "main")}

          {renderVideo(videos[rightIndex], "right")}
        </div>

        <button
          className="videos-arrow videos-arrow-right"
          onClick={nextVideo}
          aria-label="Next video"
        >
          ›
        </button>

        <div className="videos-counter">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>

          <span className="counter-divider">/</span>

          <span>{String(videos.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default Videos;
