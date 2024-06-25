import React from 'react';


const CustomArrow = ({ className, style, onClick, arrowType }) => {
  const arrowSrc = arrowType === 'next' ? '/btn-next.svg' : '/btn-next.svg';
  
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'none', padding: '10px' }}
      onClick={onClick}
    >
      <img src={arrowSrc} alt={`${arrowType} arrow`} style={{ width: '30px', height: '30px' }} />
    </div>
  );
}

export default CustomArrow;
