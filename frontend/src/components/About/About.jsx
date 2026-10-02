import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="about-label">Welcome to Serenity Stay</p>

          <h2>
            A peaceful corner
            <br />
            in the hills.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-intro">
            Serenity Stay is a warm and comfortable homestay in Darjeeling,
            created for travellers looking to slow down, breathe in the mountain
            air, and enjoy the beauty of the hills.
          </p>

          <p>
            Whether you're visiting Darjeeling with family, friends, or simply
            looking for a quiet escape, our aim is to make your stay
            comfortable, welcoming, and memorable.
          </p>

          <a href="#rooms" className="about-link">
            Discover your stay →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
