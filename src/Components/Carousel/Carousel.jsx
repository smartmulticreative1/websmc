import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import prevImg from '../../assets/img/btn-prev.svg';
import nextImg from '../../assets/img/btn-next.svg';

const Carousel = ({cs, children, cls}) => {

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            src={prevImg}
            alt="Previous"
            className={className}
            style={{ ...style, width:'30px', height:'30px', display: "block", zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            src={nextImg}
            alt="Next"
            className={className}
            style={{ ...style, width:'30px', height:'50px', display: "block", zIndex: 1 }}
            onClick={onClick}
        />
    );
};


  const setc1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  const setc2 = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const c1= <div className={cls}>
        <Slider {...setc1}>
            {children}
        </Slider>
  </div>;

  const c2= <div className={cls}>
  <Slider {...setc2}>
      {children}
  </Slider>
  </div>;

  let n;

        if (cs === 'c1') {
            n=c1;
        }else if (cs === 'c2') {
          n=c2;
        }

  return (
    <>
    {n}
    </>
  );
}

export default Carousel;
