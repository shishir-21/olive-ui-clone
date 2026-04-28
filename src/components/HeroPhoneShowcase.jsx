const heroProducts = [
  {
    src: "/products/olive-product-5.png",
    detail: "/products/olive-product-5-details.png",
    alt: "Olive product scan preview",
  },
  {
    src: "/products/olive-product-2.png",
    detail: "/products/olive-product-5-details.png",
    alt: "Sea salt product preview",
  },
  {
    src: "/products/olive-product-4.png",
    detail: "/products/olive-product-5-details.png",
    alt: "Honey product preview",
  },
  {
    src: "/products/olive-product-3.png",
    detail: "/products/olive-product-5-details.png",
    alt: "Sparkling tonic product preview",
  },
];

const sideProducts = [
  "/products/olive-product-1.png",
  "/products/olive-product-2.png",
  "/products/olive-product-3.png",
  "/products/olive-product-4.png",
  "/products/olive-product-5.png",
  "/products/olive-product-6.png",
  "/products/olive-product-7.png",
  "/products/olive-product-8.png",
];

const HeroPhoneShowcase = () => {
  const repeatedSideProducts = [...sideProducts, ...sideProducts];

  return (
    <div className="hero-phone-stage" aria-label="Olive app product preview">
      <div className="hero-side-loop" aria-hidden="true">
        {repeatedSideProducts.map((src, index) => (
          <span className="ghost-card" key={`${src}-${index}`}>
            <img src={src} alt="" />
          </span>
        ))}
      </div>

      <div className="hero-phone-frame">
        <div className="hero-phone-island" aria-hidden="true">
          <span />
        </div>

        <div className="hero-phone-window">
          {/* Product image loop. */}
          <div className="hero-phone-track">
            {heroProducts.map((product) => (
              <img src={product.src} alt={product.alt} key={product.alt} />
            ))}
          </div>
        </div>

        <div className="hero-detail-window">
          {/* Detail screen loop. */}
          <div className="hero-detail-track">
            {heroProducts.map((product) => (
              <img src={product.detail} alt="" key={`${product.alt}-detail`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPhoneShowcase;
