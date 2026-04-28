import { useState } from "react";
import { faqs } from "../data/siteContent";

// FAQ section - parents can click a question to see the answer
const Faq = () => {
  // Keep the first question open so visitors know the FAQ is interactive
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      {/* Header matches the icon, title, and app button from Olive */}
      <div className="section-header center-header">
        <div className="olive-icon">O</div>
        <h2>Frequently Asked Questions by Parents</h2>
        <a
          className="button button-primary"
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
        >
          Download for iOS
        </a>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <article className={`faq-item card${isOpen ? " faq-item--open" : ""}`} key={item.question}>
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{isOpen ? "-" : "+"}</span>
              </button>

              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
