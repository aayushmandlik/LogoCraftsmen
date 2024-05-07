import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../constents";
import { Helmet } from "react-helmet";

const AccordionSection = ({
  faq,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="px-8 py-2 md:px-24 md:py-2">
      <div
        className="flex justify-between w-full cursor-pointer p-3 md:p-5 bg-slate-200 "
        onClick={toggleSection}
      >
        <div>{faq.question}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>

      {isActiveSection && <div className="p-3 md:p-4 m-0 ">{faq.answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Helmet>
        <title>FAQ | Frequently Asked Questions | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore our Frequently Asked Questions (FAQ) page to find answers to common queries about our logo design, vector conversion, and embroidery services. Learn about our turnaround times, file formats, guarantees, pricing structures, and more. Logo Craftsmen is committed to providing transparent information to help you understand our design process and services."
        />
        <meta
          name="keywords"
          content="logo design, vector conversion, embroidery services, turnaround time, file formats, design guarantees, design revisions, pricing structure, embroidery on specific fabrics, rush services, Logo Craftsmen, design consultation, design process, client satisfaction"
        />
        <link rel="canonical" href="https://logocraftsmen.com/faqs" />
      </Helmet>

      <div className="py-10 md:py-10 border-b border-gray-100">
        <div className="pb-10 md:pb-12 w-full text-center ">
          <h2 className="sm:text-3xl font-medium w-full text-center text-2xl">
            Questions and Answers
          </h2>
        </div>

        <div className="">
          {faqs.map((faq, index) => (
            <AccordionSection
              faq={faq}
              key={index}
              isActiveSection={index === activeIndex}
              setActiveIndex={setActiveIndex}
              sectionIndex={index}
            />
          ))}
        </div>

        <div>
          <div className="mt-10 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 text-center m-10">
              <h1 className="text-3xl font-semibold mb-4">
                Still have questions about how Logo Craftsmen can help you?
              </h1>
              <p className="text-lg mb-6">Ask us now</p>
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
