import React, { useState } from 'react';

const Faq = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="qna_wrapper flex flex-col gap-[1.563rem]">
      {faqItems.map((item, index) => (
        <div key={index} className="qna_items">
          <div 
            className="qna_title flex flex-nowrap items-center justify-between gap-[0.625rem]" 
            onClick={() => handleToggle(index)}
          >
            <p>{item.title}</p>
            <img src="" alt="icon" />
          </div>
          <div 
            className="qna_detail flex flex-col overflow-hidden"
            style={{
              maxHeight: activeIndex === index ? '1000px' : '0',
              opacity: activeIndex === index ? '1' : '0',
              transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
            }}
          >
            <p>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;