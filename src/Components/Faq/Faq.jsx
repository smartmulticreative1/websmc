import React, { useState } from 'react';
import arrowFaq from "../../assets/img/arrow-faq.svg"


const Faq = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="qna_wrapper relative flex flex-col w-full">
      {faqItems.map((item, index) => (
        <div key={index} className={activeIndex === index ? 'qna_items qna_items-active' : 'qna_items'}>
          <div 
            className="qna_title cursor-pointer relative z-10 bg-[#144688] p-[0.938rem_1.563rem] rounded-[10px] border-[5px] border-black flex flex-nowrap items-center justify-between gap-[0.625rem]" 
            onClick={() => handleToggle(index)}
          >
            <p className='text-white font-bold text-[1.25rem]'>{item.title}</p>
            <img className='btn-faq' src={arrowFaq} alt="icon" />
          </div>
          <div 
            className="qna_detail bg-[#FFDD60] p-[0.938rem_1.563rem] rounded-[10px] border-[5px] border-black translate-y-[-3rem] translate-x-[0.8rem] flex flex-col overflow-hidden"
            style={{
              maxHeight: activeIndex === index ? '1000px' : '',
              height: activeIndex === index ? '' : '4rem',
              // opacity: activeIndex === index ? '1' : '0',
              transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
            }}
          >
            <p className='mt-[2rem]' style={{display: activeIndex === index ? 'block' : 'none'}}>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;