"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="mb-4 ">
      <button
        className={`w-full p-4 flex justify-between items-center text-left transition-colors ${
          isOpen ? "bg-green-900 text-white" : "bg-gray-50 text-teal-900"
        }`}
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          } text-teal-900`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 bg-gray-100 rounded-md mt-2">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItemProps[] = [
    {
      question: "How Many Laser Resurfacing Treatments Are Needed?",
      answer:
        "The cost varies based on the severity of sun damage, scarring, or wrinkles and your tolerance for downtime.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "Who are not suitable For The Frictional CO2 Laser Treatment?",
      answer:
        "Reasons to avoid fractional laser treatment may include the use of photosensitivity-increasing medications, certain anticoagulants, recent Accutane use, chemotherapy, healing difficulties, scarring history, bleeding disorders, and pregnancy.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "Is There Any Side Effect?",
      answer:
        "The CO2 laser treatment treats dull and uneven skin tones. The procedure helps reduce acne scars and anti-aging signs such as fine lines and wrinkles.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "What type of skin conditions can be treated?",
      answer:
        "CO2 laser treatment can treat acne scars, wrinkles, pigmentation, and other skin concerns.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "How long does it take to see results?",
      answer:
        "The procedure provides immediate results. However, multiple sessions are needed to achieve optimal benefits.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question:
        "Can only one skin resurfacing treatment be enough for visible results?",
      answer:
        "Some patients can find visible results within 2 or 3 sessions. However, to get lasting results, it is always recommended to ask your specialist.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "Is the process painful?",
      answer:
        "The treatment can provide mild discomfort or sensation; the effect will disappear over time, even on the same day.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question:
        "What food should be avoided after fractional CO2 laser treatment for skin resurfacing?",
      answer:
        "The treatment is performed non-surgically; there is no need to avoid anything. However, in some cases, doctors may suggest that patients avoid certain items, including caffeine, alcohol, carbohydrates, spicy foods, cigarettes, or high-sodium foods.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "Does CO2 skin resurfacing laser treatment hurt?",
      answer:
        "Yes, the procedure effectively tightens and smooths the skin’s surface to provide clear, wrinkle-free skin.",
      isOpen: false,
      onClick: () => {},
    },
    {
      question: "How long is the procedure?",
      answer:
        "The treatment may take 30 minutes to an hour, depending on the circumstances and requirements.",
      isOpen: false,
      onClick: () => {},
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-teal-900 mb-6 text-center">
        FAQs – Frequently Asked Questions
      </h2>

      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
