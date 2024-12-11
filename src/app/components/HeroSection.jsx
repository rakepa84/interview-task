import React from 'react';
import Slider from 'react-slick';

const HeroSection = () => {
  const sliderData = [
    {
      title: 'The only thing you  need is all here',
      content:
        'Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.',
      btnText: 'shop now',
    },
    {
      title: 'The only thing you  need is all here',
      content:
        'Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.',
      btnText: 'shop now',
    },
    {
      title: 'The only thing you  need is all here',
      content:
        'Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.',
      btnText: 'shop now',
    },
    {
      title: 'The only thing you  need is all here',
      content:
        'Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.',
      btnText: 'shop now',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          padding: '15px',
          marginTop: '25px',
          bottom: '-15px',
        }}
      >
        <ul className='custom-appendDots' style={{ margin: '0px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#666666',
            display: 'inline-block',
            margin: '0 5px',
          }}
        />
      );
    },
  };

  return (
    <div className="bg-[url('/images/hero-food-section-mobile.png')] md:bg-[url('/images/hero-food-section-desktop.png')] bg-center bg-cover h-full md:h-screen px-5 md:px-20 flex items-center">
      <div className='slider-container overflow-hidden hero-section-slider-div '>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              key={index}
              className='!flex !flex-col !gap-1.5 md:!gap-2.5 items-start text-[#112025] mb-10 pt-5 md:pt-0'
            >
              <h1 className='text-lg md:text-4xl font-bold max-w-[250px] md:max-w-[400px]'>
                {item.title}
              </h1>
              <span className=' text-[10px] md:text-sm font-normal max-w-[200px] md:max-w-[300px]'>
                {item.content}
              </span>
              <button className='px-[18px] md:px-9 py-[9px] md:py-[18px] bg-[#112025] text-white rounded-full font-medium text-[10px] md:text-base uppercase md:mt-5'>
                {item.btnText}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
