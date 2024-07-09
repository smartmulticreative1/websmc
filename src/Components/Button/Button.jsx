import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';
import CardCover from '../CardCover/CardCover';

function Button({btn,children,to,className,sicon}) {

  const btnNon=<div className={`btn-smc ${className}`}>
  <span>
      {children}
  </span>
  </div>
  ;
  const btn1=<Link to={to} className={`btn-smc sm:h-auto h-[2.5rem] ${className}`}>
  <span className='sm:px-[0.938rem] sm:py-[0.688rem] px-[0.438rem] sm:text-[1.25rem] text-[0.75rem]'>
      {children}
  </span>
  </Link>
  ;
  const btn2=<button type="submit" className={`btn-smc ${className}`}>
  <span>
      {children}
  </span>
  </button>
  ;
  const btn3=<Link to={to} className={`btn-smc ${className} flex flex-nowrap gap-4 hover:scale-90 transition-all`}>
     <CardCover selectCard='cc6' bg="bg-[#144688] p-2 flex item-center"><img src={sicon} alt="" /></CardCover>
     <CardCover selectCard='cc6' bg="bg-[#144688] py-2 px-8">{children}</CardCover>
  </Link>
  ;
  const btn4=<Link to={to} className={`btn-smc ${className} flex flex-nowrap gap-4`}>
     <CardCover selectCard='cc6' bg="bg-[#144688] p-[0.625rem] text-[1.25rem] font-bold">{children}</CardCover>
  </Link>
  ;
  
  let btns;

  if (btn === 'btnNon') {
    btns=btnNon;
  } else
  if (btn === 'btn1') {
    btns=btn1;
  } else if (btn === 'btn2'){
    btns=btn2;
  }else if (btn === 'btn3'){
    btns=btn3;
  }else if (btn === 'btn4'){
    btns=btn4;
  }
  return (
    <>
      {btns}
    </>
  )

}


export default Button;
