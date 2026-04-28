import { useState } from "react";
import { faqs } from "../data/siteContent";

// FAQ section - frequently asked questions with expandable answers
// Users can click on questions to open/close answers
// One answer stays open by default to show the section has content
const Faq = () => {
  // Track which question is currently open (default is first one at index 0)
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      {/* Section header with title and description */}
      <div className="section-header">
        <span className="eyebrow">Frequently asked questions</span>
        <h2>Common questions from parents</h2>
        <p className="section-subtitle">
          This FAQ area matches the landing page style and shows simple frontend
          interaction with no backend logic.
        </p>
      </div>

      {/* FAQ items list - loop through each question and answer */}
      <div className="faq-list">
        {faqs.map((item, index) => {
          // Check if this item is currently open
          const isOpen = index === openIndex;

          return (
            <article className={`faq-item card${isOpen ? " faq-item--open" : ""}`} key={item.question}>
              {/* Clickable question button that opens/closes the answer */}
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                {/* Show + when closed, − when open */}
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>

              {/* Answer text - only shows when this item is open */}
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
