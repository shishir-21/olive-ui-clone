import { useState } from "react";
import { faqs } from "../data/siteContent";

// FAQ section - parents can click a question to see the answer
const Faq = () => {
  // Keep the first question open so visitors know the FAQ is interactive
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      {/* Header matches the icon, title, and app button from Olive */}
      <div className="faq-shell">
        <div className="section-header center-header faq-header">
          <h2>
            Frequently Asked
            <br />
            Questions by Parents
            <img
              src="/images/faq-olive-icon.png"
              alt=""
              aria-hidden="true"
              className="faq-heading-olive"
            />
          </h2>
          <a
            className="button faq-download-btn"
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          >
            Download for iOS
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={item.question}>
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
      </div>
    </section>
  );
};

export default Faq;
