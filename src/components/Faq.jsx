import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  { question: "question 1", answer: "answer 1" },
  { question: "question 2", answer: "answer 2" },
  { question: "question 3", answer: "answer 3" },
  { question: "question 4", answer: "answer 4" },
];

const Faq = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <h2 className="py-6 mb-6">Preguntas frecuentes</h2>
      {faqData.map((item, i) => (
        <div className="flex flex-col shadow rounded border border-gray-400">
          <div className="flex flex-row">
            <div className="p-4">
              <h3>{item.question}</h3>
            </div>
            <button
              aria-label="question-expander"
              className="text-xl p-4 focus:outline-none"
              onClick={() => setExpand(!expand)}
            >
              {expand ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
          <div className={expandClass}>
            <p className="px-4 pb-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
