const productPhotos = [
  {
    src: "/products/san-pellegrino-store.webp",
    alt: "San Pellegrino bottle in store",
  },
  {
    src: "/products/san-pellegrino-details.webp",
    alt: "San Pellegrino Olive details screen",
  },
];

const facts = [
  ["!", "Contaminants", "7", "bad"],
  ["F", "Fluoride", "Yes", "bad"],
  ["S", "PFAS", "No", "good"],
  ["D", "Microplastics", "Minimal", "good"],
  ["pH", "pH Level", "5.7", ""],
];

const contaminants = [
  {
    name: "Nitrate",
    value: "0.75 mg/L",
    note: "A substance frequently derived from agricultural runo...",
    limit: "5x limit",
    tone: "bad",
  },
  {
    name: "Sulfate",
    value: "430 mg/L",
    note: "Sulfates are naturally found in drinking water and can...",
    limit: "2x limit",
    tone: "bad",
  },
  {
    name: "Gross Beta",
    value: "5.3 pCi/L",
    note: "Assesses the cumulative beta radiation released by v...",
    limit: "1x limit",
    tone: "good",
  },
];

const ProductPhone = () => {
  return (
    <div className="product-phone" aria-label="San Pellegrino product details">
      <div className="phone-handle" aria-hidden="true" />

      <div className="phone-product">
        <div className="phone-photo-window">
          {/* CSS moves these photos automatically. */}
          <div className="phone-photo-track">
            {productPhotos.map((photo) => (
              <img src={photo.src} alt={photo.alt} key={photo.src} />
            ))}
          </div>
        </div>

        <div className="phone-title-block">
          <h3>San Pellegrino Sparkling Natural Mineral Water (...</h3>
          <p>Sanpellegrino</p>
          <div className="score-row">
            <span className="score-dot" aria-hidden="true" />
            <strong>52/100</strong>
            <span>Limit</span>
          </div>
        </div>

        <button className="heart-button" aria-label="Add to favorites">
          <span aria-hidden="true">♡</span>
        </button>
      </div>

      <div className="phone-facts">
        {facts.map(([icon, label, value, tone]) => (
          <div className="phone-fact" key={label}>
            <span className="fact-icon">{icon}</span>
            <span>{label}</span>
            <strong>{value}</strong>
            {tone && <span className={`status-dot ${tone}`} aria-hidden="true" />}
          </div>
        ))}
      </div>

      <h3 className="phone-section-title">Contaminants</h3>

      <div className="contaminant-list">
        {contaminants.map((item) => (
          <article className="contaminant-card" key={item.name}>
            <div>
              <h4>{item.name}</h4>
              <p>{item.value}</p>
              <em>{item.note}</em>
            </div>
            <span className={`limit-pill ${item.tone}`}>{item.limit}</span>
          </article>
        ))}
      </div>

      <nav className="phone-tabs" aria-label="App tabs">
        {["History", "Search", "Scan", "Map", "Profile"].map((tab) => (
          <span className={tab === "Scan" ? "phone-tab active" : "phone-tab"} key={tab}>
            <i aria-hidden="true" />
            {tab}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default ProductPhone;
