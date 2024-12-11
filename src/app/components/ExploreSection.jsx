import Image from 'next/image';
import React from 'react';

const ExploreSection = () => {
  return (
    <section className='max-w-8xl mx-auto py-10 px-5 lg:px-10 mt-8 bg-white'>
      <div
        className='explore_now_section relative w-full lg:h-[430px] xl:h-[550px] xxl:h-[700px] bg-cover bg-center lg:block hidden'
        style={{ backgroundImage: "url('/images/Explore-Pet-Food.png')" }}
      >
        <div className='flex items-start justify-end w-full h-full lg:pr-16'>
          <div className='explore_desc max-w-sm xl:max-w-lg text-left space-y-6 lg:mt-36 xl:mt-28 pl-5'>
            <h2 className='lg:text-2xl xl:text-4xl font-bold text-[#112025]'>
              Dogs do speak, but only to those who know how to listen.
            </h2>
            <p className='text-sm text-gray-600'>
              Sweet roll ice cream powder candy canes ice cream donut pudding
              biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
              fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding
              biscuit caramels topb
            </p>
            <button
              type='button'
              className='text-white uppercase bg-[#112025] hover:bg-[#112025] font-medium rounded-full text-sm xl:text-base lg:w-[150px] xl:w-[204px] text-center lg:h-[40px] xl:h-[60px] me-2 mb-2'
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col lg:hidden'>
        <Image
          src='/images/premium-organic-dog-food-desktop-banner.png'
          alt='premium organic dog food banner'
          className='rounded-lg object-cover w-[348px] h-[250px]'
          width={328}
          height={250}
        />
        <div className='px-4 mt-4'>
          <h2 className='text-[16px] font-bold text-[#112025] text-left pr-10'>
            Dogs do speak, but only to those who know how to listen.
          </h2>
          <p className='text-[10px] font-normal leading-[18px] text-[#112025] text-left pr-4 pt-3'>
            Sweet roll ice cream powder candy canes ice cream donut pudding
            biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
            fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding
            biscuit caramels topb
          </p>
          <div className='flex mt-6'>
            <button
              type='button'
              className='text-white bg-[#112025] hover:bg-[#112025] font-medium rounded-full text-xs w-[111px] text-center h-[36px] me-2 mb-2'
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
