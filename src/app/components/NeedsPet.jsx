import React, { useState } from 'react';
import Slider from 'react-slick';

const NeedsPet = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderData = [
    {
      img: '/images/black-and-white-dog.png',
      btnText: 'FOR DOGS & DOGS LOVER',
      btnClass: '!border-black',
    },
    {
      img: '/images/bright-parrot-perch.png',
      btnText: 'BIRDS LOVER',
      btnClass: '!text-white !border-white',
    },
    {
      img: '/images/dog-toys-and-food-background.png',
      btnText: 'PET ACCESORIES',
      btnClass: '!border-black ',
      imgDivClass: 'flex justify-center items-center',
    },
    {
      img: '/images/mouse-icon.png',
      btnText: 'HEMI & RAT TA TAT',
      btnClass: '!border-black',
    },
    {
      img: '/images/black-and-white-dog.png',
      btnText: 'FOR NEW BORN',
      btnClass: '!border-black',
    },
    {
      img: '/images/kitty-in-nature.png',
      btnText: 'MEOW MEOW',
      btnClass: '!text-white !border-white',
    },
  ];

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    beforeChange: (_current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <div>
      <div className='mx-20 py-5 flex justify-between items-center'>
        <div className='flex flex-col font-medium text-[30px]'>
          <span className='text-[#112025]'>Everything Your</span>
          <span className='text-[#16BAC6]'>Pet Needs</span>
        </div>
        <span className='flex items-center gap-2.5 font-medium text-[16px] text-[#112025] opacity-50'>
          view all products
          <img src='/images/thin_long_right-icon.png' alt='' />
        </span>
      </div>

      <div className='slider-container overflow-hidden needs-pet-slider mb-5'>
        <Slider {...settings}>
          {sliderData &&
            sliderData.length > 0 &&
            sliderData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className={`text-center bg-center bg-cover w-full h-[300px] md:h-[500px] overflow-hidden p-5 !rounded-lg transition-transform duration-500 transform ${
                    item.imgDivClass
                  } ${
                    index === activeSlide ? 'scale-105' : 'scale-90 blur-[2px]'
                  }`}
                >
                  <button
                    className={`border border-solid uppercase p-2.5 ${item.btnClass} `}
                  >
                    {item.btnText}
                  </button>
                </div>
              </React.Fragment>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default NeedsPet;
