import { testimonials } from "../data/siteContent";

// Testimonials gives real quotes from happy users
const Testimonials = () => {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow">Real mothers, real results</span>
        <h2>Parents trust Olive for healthier decisions</h2>
        <p className="section-subtitle">
          Join thousands of families who use Olive to shop with more clarity and
          less stress.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card card" key={item.name}>
            <div className="stars">★★★★★</div>
            <p>"{item.quote}"</p>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>

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
