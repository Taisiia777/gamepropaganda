/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-10 justify-center px-4 py-5 w-full rounded bg-zinc-800 max-md:max-w-full">
      <div className="max-md:max-w-full">{question}</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${question}`}
      >
        <img
          loading="lazy"
          src={`http://b.io/ext_${isOpen ? "62" : "63"}-`}
          alt={isOpen ? "Close" : "Open"}
          className="object-contain shrink-0 self-start w-8 aspect-[2]"
        />
      </button>
      {isOpen && (
        <div id={`answer-${question}`} className="w-full mt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;
