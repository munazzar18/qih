"use client";

import React, { useState } from "react";
import Link from "next/link";

const Highlight = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      question: "Dr. Shaukat A. Bangash, CEO QIH, chairing Consultant's quarterly meeting",
      link: "/Dr-Shaukat-A-Bangash",
    },
    {
      question: "Psychiatry Department",
      link: "/about-us/highlights/Psychiatry-Department",
    },
    {
      question: "World Dietition Day",
      link: "/about-us/highlights/World-Dietition-day",
    },
    {
      question: "Nawai Waqt Column",
      link: "/about-us/highlights/Nawai-Waqt-Column",
    },
    {
      question: "Cochlear Implant",
      link: "/about-us/highlights/Cochlear-Implant",
    },
    {
      question: "Dentistry 2",
      link: "/about-us/highlights/Dentistry-2",
    },
    {
      question: "Dentistry 1",
      link: "/about-us/highlights/Dentistry-1",
    },
    {
      question: "PTV News",
      link: "/about-us/highlights/PTV-News",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="text-center">HighLights</h1>
      <div className="accordion" id="accordion03">
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-heading">
              <button
                className="card-link"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
                aria-controls={`collapse-${index}`}
              >
                {item.question}
              </button>
            </div>
            <div
              id={`collapse-${index}`}
              className={`collapse ${activeIndex === index ? "show" : ""}`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordion03"
            >
              <div className="card-body">
                <Link href={item.link}>Read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
