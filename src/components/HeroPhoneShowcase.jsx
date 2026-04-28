const heroProducts = [
  {
    src: "/products/san-pellegrino-store.webp",
    alt: "San Pellegrino bottle",
  },
  {
    src: "/products/san-pellegrino-details.webp",
    alt: "San Pellegrino details",
  },
  {
    src: "/products/san-pellegrino-store.webp",
    alt: "San Pellegrino in store",
  },
  {
    src: "/products/san-pellegrino-details.webp",
    alt: "San Pellegrino app screen",
  },
];

const HeroPhoneShowcase = () => {
  return (
    <div className="hero-phone-stage" aria-label="Olive app product preview">
      <div className="ghost-card ghost-card-one">
        <img src={heroProducts[0].src} alt="" />
      </div>
      <div className="ghost-card ghost-card-two">
        <img src={heroProducts[1].src} alt="" />
      </div>
      <div className="ghost-card ghost-card-three">
        <img src={heroProducts[2].src} alt="" />
      </div>
      <div className="ghost-card ghost-card-four">
        <img src={heroProducts[3].src} alt="" />
      </div>

      <div className="hero-phone-frame">
        <div className="hero-phone-island" aria-hidden="true">
          <span />
        </div>
        <div className="hero-phone-window">
          {/* Track slides the product photo like the original hero. */}
          <div className="hero-phone-track">
            {heroProducts.map((product) => (
              <img src={product.src} alt={product.alt} key={product.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPhoneShowcase;
