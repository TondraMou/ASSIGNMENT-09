
import { useState } from "react";

const faqData = [
  {
    question: "What is Lingo Bingo?",
    answer: "Lingo Bingo is a fun and interactive platform designed to help users learn and improve their vocabulary in different languages.",
  },
  {
    question: "How do I start learning?",
    answer: "To start learning, simply log in, choose your desired lesson, and begin exploring vocabulary with our interactive tools.",
  },
  {
    question: "Is Lingo Bingo free to use?",
    answer: "Yes, Lingo Bingo offers free access to its core features. However, premium content may require a subscription.",
  },
  {
    question: "Which languages are available?",
    answer: "We currently offer lessons in Japanese, Spanish, French, German, and more. Explore our website to see the full list!",
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, you can track your learning progress, review your vocabulary, and revisit completed lessons in your profile.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 w-11/12 mx-auto" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#caf12d] text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 glow-on-hover rounded-lg shadow-sm p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">
                  {item.question}
                </h3>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;