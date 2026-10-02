import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");
    const guests = formData.get("guests");
    const message = formData.get("message");

    const whatsappMessage = `Hello Serenity Stay,

I would like to enquire about a stay.

Name: ${name}
Phone: ${phone}
Check-in: ${checkin || "Not specified"}
Check-out: ${checkout || "Not specified"}
Guests: ${guests || "Not specified"}

Message:
${message || "No additional message"}

Thank you.`;

    const whatsappUrl = `https://wa.me/919831016122?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        {/* LEFT SIDE */}

        <div className="contact-info">
          <p className="section-label">PLAN YOUR STAY</p>

          <h2>Get in Touch</h2>

          <p className="contact-intro">
            Planning a stay in Darjeeling? Get in touch with us to check
            availability and know more about your stay at Serenity Stay.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <h3>Location</h3>

              <p>
                Bokshi Jhora,
                <br />
                Near Batasia Loop,
                <br />
                Darjeeling
              </p>
            </div>

            <div className="contact-detail">
              <h3>Phone</h3>

              <a href="tel:+919831016122">+91 98310 16122</a>
            </div>

            <div className="contact-detail">
              <h3>WhatsApp</h3>

              <a
                href="https://wa.me/919831016122"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME + PHONE */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            {/* CHECK-IN + CHECK-OUT */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkin">Check-in</label>

                <input type="date" id="checkin" name="checkin" />
              </div>

              <div className="form-group">
                <label htmlFor="checkout">Check-out</label>

                <input type="date" id="checkout" name="checkout" />
              </div>
            </div>

            {/* GUESTS */}

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>

              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                placeholder="Number of guests"
              />
            </div>

            {/* MESSAGE */}

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us anything you'd like us to know..."
              ></textarea>
            </div>

            {/* SUBMIT */}

            <button type="submit" className="contact-submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
