import { useEffect, useState } from "react";

const heroProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/product-1.webp",
    details: "/images/product-1-details.webp",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/images/product-2.webp",
    details: "/images/product-2-details.webp",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/images/product-3.webp",
    details: "/images/product-3-details.webp",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/images/product-4.webp",
    details: "/images/product-4-details.webp",
  },
];

const HeroPhoneShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sideIndex = activeIndex + heroProducts.length;
  const sideProducts = [...heroProducts, ...heroProducts, ...heroProducts];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroProducts.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="hero-phone-stage"
      style={{ "--side-index": sideIndex }}
      aria-label="Olive app product preview"
    >
      <div className="hero-side-track" aria-hidden="true">
        {sideProducts.map((product, index) => (
          <span
            className={index === sideIndex ? "ghost-card is-active" : "ghost-card"}
            key={`${product.id}-${index}`}
          >
            <img src={product.image} alt="" />
          </span>
        ))}
      </div>

      <div className="hero-phone-frame">
        <div className="hero-phone-island" aria-hidden="true">
          <span />
        </div>

        <div className="hero-phone-window">
          {/* One index moves every product screen. */}
          <div className="hero-phone-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {heroProducts.map((product) => (
              <img src={product.image} alt={product.name} key={product.id} />
            ))}
          </div>
        </div>

        <div className="hero-detail-window">
          {/* Details use the same index as the product. */}
          <div className="hero-detail-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {heroProducts.map((product) => (
              <img src={product.details} alt={`${product.name} details`} key={`${product.id}-details`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPhoneShowcase;
