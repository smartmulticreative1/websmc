import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import prevImg from '../../assets/img/btn-prev.svg';
import nextImg from '../../assets/img/btn-next.svg';

// swiperjs
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Import required modules
import { Navigation } from 'swiper/modules';


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

  const cwork= <>
  <Swiper
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
  modules={[Navigation]}
  loop={true}
  className="mySwiper xl:w-[85%] w-full md:min-h-[34.188rem]"
>
{React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  <div className="custom-navigation xl:px-4 px-0 w-full h-0 flex gap-[1rem] lg:justify-between justify-center lg:translate-y-[-20rem]">
    <div className="cursor-pointer custom-prev">
      <img src={prevImg} alt="Previous" />
    </div>
    <div className="cursor-pointer custom-next">
      <img src={nextImg} alt="Next" />
    </div>
  </div>
  </>;

const ctesti= <>
<Swiper
navigation={{
  nextEl: '.custom-next',
  prevEl: '.custom-prev',
}}
modules={[Navigation]}
loop={true}
className="mySwiper xl:w-[85%] w-full md:min-h-[34.188rem]"
>
{React.Children.map(children, (child, index) => (
      <SwiperSlide key={index}>{child}</SwiperSlide>
    ))}
  </Swiper>
<div className="custom-navigation xl:px-4 px-0 w-full h-0 flex gap-[1rem] lg:justify-between justify-center lg:translate-y-[-30rem]">
  <div className="cursor-pointer custom-prev">
    <img src={prevImg} alt="Previous" />
  </div>
  <div className="cursor-pointer custom-next">
    <img src={nextImg} alt="Next" />
  </div>
</div>
</>;

  let n;

        if (cs === 'c1') {
            n=c1;
        }else if (cs === 'c2') {
          n=c2;
        }else if (cs === 'cwork') {
          n=cwork;
        }else if (cs === 'ctesti') {
          n=ctesti;
        }
        
  return (
    <>
    {n}
    </>
  );
}

export default Carousel;
