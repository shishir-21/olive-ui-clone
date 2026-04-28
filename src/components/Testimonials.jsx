import { testimonials } from "../data/siteContent";

// Testimonials section - shows real parent quotes like the live Olive page
const Testimonials = () => {
  return (
    <section className="section">
      {/* Section header uses the same two-line promise as the original page */}
      <div className="section-header center-header">
        <h2>
          Real Mothers
          <br />
          Real Results
        </h2>
        <p className="section-subtitle">
          Join thousands of satisfied parents who trust Olive to help them make
          healthier choices for their families.
        </p>
      </div>

      {/* Each card has a simple avatar, quote, and parent name */}
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card card" key={item.name}>
            <div className="testimonial-avatar">{item.name.slice(0, 1)}</div>
            <p>"{item.quote}"</p>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>

      <a
        className="reviews-link"
        href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
      >
        read all 3,147+ reviews
      </a>
    </section>
  );
};

export default Testimonials;
