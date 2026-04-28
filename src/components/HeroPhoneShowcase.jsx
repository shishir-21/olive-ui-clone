const heroProducts = [
  {
    src: "/products/olive-product-5.png",
    alt: "Olive product scan preview",
  },
  {
    src: "/products/olive-product-2.png",
    alt: "Sea salt product preview",
  },
  {
    src: "/products/olive-product-4.png",
    alt: "Honey product preview",
  },
  {
    src: "/products/olive-product-3.png",
    alt: "Sparkling tonic product preview",
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
