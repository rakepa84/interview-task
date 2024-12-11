import React from 'react';

const StayConnected = () => {
  const checkBoxData = [
    { name: 'Dog' },
    { name: 'Cat' },
    { name: 'Small Pets' },
    { name: 'Fish' },
    { name: 'Birds' },
  ];

  return (
    <>
      <div className='flex gap-2.5 bg-[#EFF0F4] max-w-screen-xl mx-5 lg:mx-auto p-5 xl:py-10 lg:px-20 rounded-[20px] relative'>
        <div className='flex flex-col gap-5 max-w-full lg:max-w-[45%] pb-[280px] xl:pb-40'>
          <div className='flex flex-col gap-2.5'>
            <span className='font-medium text-3xl text-black'>
              Stay connected with us.
            </span>
            <span className='font-normal text-base text-[#666666]'>
              Choose your pet and subscribe! Receive exclusive discounts to
              always buy at the best price in Petshop.
            </span>
          </div>

          <div className='hidden lg:flex justify-between'>
            {checkBoxData.map((item, index) => (
              <div key={index} className='flex items-center gap-2.5'>
                <input type='checkbox' />
                <label htmlFor='' className='font-medium text-base'>
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          <div className='grid lg:hidden grid-cols-3 gap-y-2.5'>
            {checkBoxData.map((item, index) => (
              <div key={index} className='flex items-center gap-1.5'>
                <input type='checkbox' />
                <label htmlFor='' className='font-medium text-xs'>
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          <div className='relative max-w-full xl:max-w-[70%]'>
            <input
              type='text'
              placeholder='Signup for Newsletter'
              className='bg-white rounded-full px-5 py-4 w-full font-semibold text-base '
            />
            <button className='uppercase bg-[#112025] rounded-full font-semibold text-base text-white px-5 py-2.5 absolute right-2 top-1.5'>
              submit
            </button>
          </div>
        </div>
        <img
          src='/images/white-dog.png'
          alt=''
          className='absolute bottom-20 lg:bottom-0 right-5 md:right-20 xl:right-10 w-[200px] h-[200px] lg:w-auto lg:h-auto'
        />
      </div>
    </>
  );
};

export default StayConnected;
