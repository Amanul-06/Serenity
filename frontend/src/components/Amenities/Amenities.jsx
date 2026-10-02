import "./Amenities.css";

const amenities = [
  {
    icon: "🍽️",

    title: "All Four Meals Included",

    description:
      "Enjoy breakfast, lunch, evening snacks, and dinner throughout your stay.",
  },

  {
    icon: "🏔️",

    title: "Beautiful Darjeeling Views",

    description:
      "Wake up to the peaceful mountain surroundings and beautiful views.",
  },

  {
    icon: "🛏️",

    title: "Comfortable Stay",

    description:
      "Relax in clean, comfortable rooms designed for a peaceful stay.",
  },

  {
    icon: "🤝",

    title: "Warm Hospitality",

    description: "A welcoming homestay experience where you can feel at home.",
  },

  {
    icon: "🚿",

    title: "24/7 Hot Water",

    description:
      "Hot water is available around the clock for a comfortable stay.",
  },

  {
    icon: "📺",

    title: "TV in Every Room",

    description:
      "Every room is equipped with a TV for your entertainment and relaxation.",
  },

  {
    icon: "📶",

    title: "Wi-Fi Available",

    description:
      "Stay connected with Wi-Fi available for guests throughout their stay.",
  },

  {
    icon: "🔥",

    title: "Room Heater on Request",

    description:
      "Room heaters are available on request to keep you warm during chilly days.",
  },

  {
    icon: "🚰",

    title: "Drinking Water Provided",

    description:
      "Drinking water is provided for your convenience throughout your stay.",
  },

  {
    icon: "🛁",

    title: "Attached Bathrooms",

    description:
      "Enjoy the convenience and privacy of an attached bathroom with your room.",
  },
  {
    icon: "👨‍👩‍👧‍👦",

    title: "Family-Friendly Stay",

    description:
      "A comfortable and welcoming environment for families, couples, and groups.",
  },

  {
    icon: "📍",

    title: "Convenient Location",

    description:
      "A convenient base for exploring Darjeeling and its surrounding attractions.",
  },
];

function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="amenities-heading">
        <p className="section-label">EVERYTHING YOU NEED</p>

        <h2>Amenities</h2>

        <p>
          Simple comforts and thoughtful hospitality to make your stay in
          Darjeeling relaxing and memorable.
        </p>
      </div>

      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div className="amenity-card" key={index}>
            <div className="amenity-icon">{amenity.icon}</div>

            <h3>{amenity.title}</h3>

            <p>{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;
