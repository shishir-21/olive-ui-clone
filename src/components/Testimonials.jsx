const Testimonials = () => {
  const cards = [
    {
      quote:
        "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
      name: "Megan L.",
      position: "top",
      avatar: "/images/testimonial-avatar-1.png",
    },
    {
      quote:
        "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
      name: "Tina B.",
      position: "middle",
      avatar: "/images/testimonial-avatar-2.png",
    },
    {
      quote:
        "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
      name: "Lila M.",
      position: "bottom",
      avatar: "/images/testimonial-avatar-3.png",
    },
  ];

  return (
    <section className="section testimonials-showcase">
      <div className="testimonials-showcase-grid">
        <div className="testimonials-photo-wrap">
          <img
            src="/images/testimonial-family-main.png"
            alt="Mother with two children"
            className="testimonials-photo-main"
          />
        </div>

        <div className="testimonials-copy-wrap">
          <h2>
            Real Mothers
            <br />
            Real Results
          </h2>
          <a
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            className="testimonials-reviews-link"
          >
            read all 3,147+ reviews
          </a>

          <div className="testimonials-floating-cards">
            {cards.map((card) => (
              <article
                key={card.name}
                className={`testimonial-float-card ${card.position}`}
              >
                <p>{card.quote}</p>
                <strong>{card.name}</strong>
                <div className="testimonial-stars">★★★★★</div>
                <img
                  src={card.avatar}
                  alt=""
                  className="testimonial-mini-avatar"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
