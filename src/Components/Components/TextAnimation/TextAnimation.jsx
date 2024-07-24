import React, { useState, useEffect }  from 'react'
import './TextAnimation.css';


const TextAnimation = ({ts,textItems,boxClass}) => {

  const repeatedItems = [];
  for (let i = 0; i < 10; i++) {
    repeatedItems.push(...textItems);
  }

  const [number, setNumber] = useState(0);
  const maxNumber = 50;
  const [text, setText] = useState('mr-active');

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => (prevNumber + 0.5999) % (maxNumber + 0.5999));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (number >= 49.9) {
      setText('mr-unactive');
    } else if (number >= 50) {
      setText('mr-unactive');
    }else{
      setText('mr-active');
    }
  }, [number]);

 const c1=<div className={`${boxClass} mr-box flex flex-nowrap overflow-hidden whitespace-nowrap`}>
      <div className={`mr-wrapper flex flex-nowrap whitespace-nowrap gap-[0.625rem] ${text}`} style={{transform:`translateX(-${number}%)`}}>
      {repeatedItems.map((item, indexmr)=>(
        <div key={indexmr} className="mr-item flex flex-nowrap items-center gap-[0.625rem] whitespace-nowrap py-[0.938rem] uppercase">
           <svg className='p-3' width="44" height="44" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.5099 1.90177C9.71439 0.131232 12.2856 0.131229 12.4901 1.90176L12.6775 3.52475C12.8125 4.693 14.1781 5.25867 15.0996 4.528L16.3798 3.51292C17.7763 2.40556 19.5944 4.22368 18.4871 5.62023L17.472 6.9004C16.7413 7.82188 17.307 9.18753 18.4753 9.32246L20.0982 9.5099C21.8688 9.71439 21.8688 12.2856 20.0982 12.4901L18.4753 12.6775C17.307 12.8125 16.7413 14.1781 17.472 15.0996L18.4871 16.3798C19.5944 17.7763 17.7763 19.5944 16.3798 18.4871L15.0996 17.472C14.1781 16.7413 12.8125 17.307 12.6775 18.4753L12.4901 20.0982C12.2856 21.8688 9.71439 21.8688 9.5099 20.0982L9.32246 18.4753C9.18753 17.307 7.82189 16.7413 6.9004 17.472L5.62023 18.4871C4.22368 19.5944 2.40556 17.7763 3.51292 16.3798L4.528 15.0996C5.25867 14.1781 4.693 12.8125 3.52475 12.6775L1.90177 12.4901C0.131232 12.2856 0.131229 9.71439 1.90176 9.5099L3.52475 9.32246C4.693 9.18753 5.25867 7.82189 4.528 6.9004L3.51292 5.62023C2.40556 4.22368 4.22368 2.40556 5.62023 3.51292L6.9004 4.528C7.82189 5.25867 9.18753 4.693 9.32246 3.52475L9.5099 1.90177Z"/>
             </svg> 
          <span className='font-bold'>{item.text}</span>
        </div>
         ))}
      </div>
 </div>
 let n;

       if (ts === 'c1') {
           n=c1;
       }else{
           n=null;
       }

  return (
    <>{n}</>
  )
}

export default TextAnimation
