import React, { useState } from 'react';
import { Check, Minus } from 'lucide-react';

const FAQAccordionSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "How Long Does It Take To Build A Website?",
      answer: "Timelines Depend On The Spec Of The Website Project, But Here Are Some Guidelines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What Size Companies Do You Produce Web Designs For?",
      answer: "We work with companies of all sizes, from startups to enterprise-level organizations. Our flexible approach allows us to scale our services to meet the unique needs and budgets of each client, whether you're a small business looking for your first website or a large corporation needing a complex digital platform."
    },
    {
      question: "Do You Redesign Existing Websites?",
      answer: "Yes, we specialize in website redesigns and improvements. We can help modernize your existing site, improve its performance, enhance user experience, and ensure it meets current web standards. We'll work with you to identify areas for improvement while preserving what's already working well."
    },
    {
      question: "Do You Work Internationally?",
      answer: "Absolutely! We work with clients around the world. Thanks to modern communication tools and our streamlined processes, we can effectively collaborate with international clients across different time zones. We have experience working with businesses in various countries and understanding different market requirements."
    },
    {
      question: "How Much Does A Website Cost?",
      answer: "Website costs vary significantly based on complexity, features, and requirements. A simple website might start from a few thousand dollars, while complex e-commerce or enterprise solutions can cost significantly more. We provide detailed quotes after understanding your specific needs and objectives."
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const isOpen = (index) => openItems.has(index);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className=" mx-auto text-sm bg-slate-50 w-fit py-1 px-4 rounded-full text-black font-bold   mb-4">Frequently Asked Question</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            The Answers To Your Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                aria-expanded={isOpen(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                
                <div className="flex-shrink-0">
                  {/* Toggle icons */}
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                    {isOpen(index) ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordionSection;