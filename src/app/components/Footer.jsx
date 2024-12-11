import React, { useState } from 'react';

const Footer = () => {
  const [showServices, setShowServices] = useState(false);
  const [showPetFood, setShowPetFood] = useState(false);

  const ourService = [
    'Track order',
    'returns',
    'Shipping Info',
    'Certificates',
  ];

  const petWiseFood = [
    'Dog',
    'cat',
    'mammals',
    'hamsters',
    'Eagle',
    'owl',
    'gold fish',
  ];

  const socialMedia = [
    { img: '/images/facebook-small-icon.png' },
    { img: '/images/instagram-black-icon.png' },
    { img: '/images/instagram-icon.png' },
    { img: '/images/linkedin.png' },
  ];

  const Test = ({ mainDivClass }) => (
    <div className={`bg-[#195F6B] text-white text-center py-4 ${mainDivClass}`}>
      <div className='flex justify-center space-x-6'>
        <span className='cursor-pointer hover:underline'>Privacy Policy</span>
        <span className='cursor-pointer hover:underline w-[1px] bg-white'></span>
        <span className='cursor-pointer hover:underline'>T & C</span>
        <span className='cursor-pointer hover:underline w-[1px] bg-white'></span>
        <span className='cursor-pointer hover:underline'>FAQ</span>
        <span className='cursor-pointer hover:underline w-[1px] bg-white'></span>
        <span className='cursor-pointer hover:underline'>Return Policy</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden absolute bottom-[-430px] bg-[url('/images/white-footer-desktop-bg.png')] pt-[100px] w-full bg-no-repeat bg-cover bg-center lg:block">
        <div className='px-20 py-12 flex justify-between items-start'>
          <div className='flex flex-col gap-4 w-1/4'>
            <img src='/images/dubidoo.png' className='w-[250px]' />
            <span className='text-[#195F6B] font-medium text-xs'>
              © 2021 PetStore. All Rights Reserved.
            </span>
            <span className='font-normal text-sm mt-5 opacity-50'>
              Egestas nec etiam maecenas aliquam a, lorem ornare eget non nec
              placerat elit a enim fermentum ac integer eget ante mattis cursus
              purus volutpat
            </span>
            <div className='flex items-center gap-2.5 font-semibold text-base'>
              <img src='/images/mail-icon.png' alt='' className='w-5 h-4' />
              <span>sayhi@dubidoo.com</span>
            </div>
            <div className='flex gap-2.5 text-base'>
              <img src='/images/phone-icon.png' alt='' className='w-5 h-4' />
              <span>(252) 555-0126</span>
            </div>
          </div>
          <div className='flex flex-col gap-2.5'>
            <span className='text-[#195F6B] font-bold text-[22px]'>
              Our Service
            </span>
            <div className='flex flex-col gap-1'>
              {ourService.map((item, index) => (
                <span key={index} className=' font-medium text-base opacity-50'>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2.5'>
            <span className='text-[#195F6B] font-bold text-[22px]'>
              pet wise food
            </span>
            <div className='grid grid-rows-5 grid-flow-col gap-y-1 gap-x-20'>
              {petWiseFood.map((item, index) => (
                <span key={index} className=' font-medium text-base opacity-50'>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2.5'>
            <span className='text-[#195F6B] font-bold text-[22px]'>
              social media
            </span>
            <div className='flex gap-1 justify-between'>
              {socialMedia.map((item, index) => (
                <img key={index} src={item.img} alt='' />
              ))}
            </div>
          </div>
        </div>
        <Test mainDivClass='text-xs' />
      </div>

      <div className="block lg:hidden absolute bottom-[-330px] md:bottom-[-360px] w-full bg-[url('/images/white-footer-mobile-bg.png')] pt-[100px] md:pt-[150px] bg-no-repeat bg-cover ">
        <div className='px-5 flex flex-col gap-5'>
          <div className='flex flex-col gap-2.5'>
            <img src='/images/dubidoo.png' className='w-[120px]' />
            <span className='text-[#195F6B] font-medium text-[8px]'>
              © 2021 PetStore. All Rights Reserved.
            </span>
          </div>
          <span className='font-normal text-[10px] opacity-80'>
            Egestas nec etiam maecenas aliquam a, lorem ornare eget non nec
            placerat elit a enim fermentum ac integer eget ante mattis cursus
            purus volutpat
          </span>
          <div className='flex flex-col gap-2.5'>
            <span className='text-[#195F6B] font-bold text-xs'>
              social media
            </span>
            <div className='flex gap-2.5'>
              {socialMedia.map((item, index) => (
                <img key={index} src={item.img} alt='' />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2.5'>
            <button
              onClick={() => setShowServices(!showServices)}
              className='w-full flex justify-between items-center bg-white border rounded-lg text-[#195F6B] text-xs font-bold p-2.5 border-none'
            >
              <span>Our Service</span>
              <span className='font-semibold text-lg'>
                {showServices ? (
                  '-'
                ) : (
                  <img src='/images/plus-icon.png' className='w-2.5 h-2.5' />
                )}
              </span>
            </button>
            {showServices && (
              <div className='flex flex-col gap-2 bg-white'>
                {ourService.map((item, index) => (
                  <span
                    key={index}
                    className=' font-medium text-xs opacity-50 px-2.5 uppercase'
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowPetFood(!showPetFood)}
              className='w-full flex justify-between items-center bg-white border rounded-lg text-[#195F6B] text-xs font-bold p-2.5 border-none'
            >
              <span>Pet Wise Food</span>
              <span className='font-semibold text-lg'>
                {showPetFood ? (
                  '-'
                ) : (
                  <img src='/images/plus-icon.png' className='w-2.5 h-2.5' />
                )}
              </span>
            </button>
            {showPetFood && (
              <div className='flex flex-col gap-2 bg-white'>
                {petWiseFood.map((item, index) => (
                  <span
                    key={index}
                    className=' font-medium text-xs opacity-50 px-2.5 uppercase'
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className='flex justify-center gap-5 pb-5'>
            <div className='flex gap-2.5 font-medium text-[10px]'>
              <img src='/images/mail-icon.png' alt='' />
              <span>sayhi@dubidoo.com</span>
            </div>
            <div className='w-0.5 bg-black' />
            <div className='flex gap-2.5 font-medium text-[10px]'>
              <img src='/images/phone-icon.png' alt='' />
              <span>(252) 555-0126</span>
            </div>
          </div>
        </div>
        <Test mainDivClass='text-[8px]' />
      </div>
    </>
  );
};

export default Footer;
