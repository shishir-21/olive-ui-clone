import { useState } from "react";
import { faqs } from "../data/siteContent";

const Faq = () => {
  // Keep one answer open to make the section easy to scan.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-header">
        <span className="eyebrow">Frequently asked questions</span>
        <h2>Common questions from parents</h2>
        <p className="section-subtitle">
          This FAQ area matches the landing page style and shows simple frontend
          interaction with no backend logic.
        </p>
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
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
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
