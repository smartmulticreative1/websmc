import React from 'react'
import './Label.css';

function Label({lbl,children,className}) {

  const lbl1=<div className="lebel-cover relative">
  <div className={`${className} relative w-full h-full z-10 rounded-[4px] py-2 px-7`}>
    {children}
  </div>
  <div className="bg-[#fff] absolute w-full h-full left-[-0.3rem] top-[0.3rem] border-[1px] solid border-black rounded-[4px]"></div>
</div>
  ;
  const lblDflt={children};
  let lbls;

  if (lbl === 'lbl1') {
    lbls=lbl1;
  } else if (lbl === 'lblDflt') {
    lbls=lblDflt;
  }
  return (
    <>
      {lbls}
    </>
  )

}


export default Label;
