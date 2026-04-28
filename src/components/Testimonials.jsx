import { testimonials } from "../data/siteContent";

// Testimonials section - shows real customer reviews and success stories
// Displays 5-star ratings with customer quotes about their experiences using Olive
const Testimonials = () => {
  return (
    <section className="section">
      {/* Section header introducing the testimonials */}
      <div className="section-header">
        <span className="eyebrow">Real mothers, real results</span>
        <h2>Parents trust Olive for healthier decisions</h2>
        <p className="section-subtitle">
          Join thousands of families who use Olive to shop with more clarity and
          less stress.
        </p>
      </div>

      {/* Grid of testimonial cards - Each card shows stars, quote, and customer name */}
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card card" key={item.name}>
            {/* Five star rating */}
            <div className="stars">★★★★★</div>
            {/* Customer quote */}
            <p>"{item.quote}"</p>
            {/* Customer name */}
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>

      {/* Link to read all customer reviews on App Store */}
      <a
        className="reviews-link"
        href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
      >
        Read all 3,147+ reviews
      </a>
    </section>
  );
};

export default Testimonials;
