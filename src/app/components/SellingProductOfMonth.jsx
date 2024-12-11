import React from 'react';
import SellingProductCard from './common/SellingProductCard';
import Image from 'next/image';
import productList from './data/SellingProduct.json';

const SellingProductOfMonth = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-0 md:px-6'>
        <div className='flex justify-between items-center mb-10 px-6 md:px-0 md:mb-16'>
          <div>
            <p className='text-[10px] md:text-[16px] text-[#112025] opacity-[50%] uppercase'>
              Best From Our Clients Review
            </p>
            <h3 className='text-base md:text-[30px] font-medium mt-2 text-[#112025]'>
              Best Selling Product Of The Month
            </h3>
          </div>
          <a
            href='#products'
            className='text-[#112025] text-sm font-medium opacity-[50%] uppercase hidden md:flex items-center justify-center gap-[10px]'
          >
            View All Product{' '}
            <Image
              src='/images/arrow.png'
              width={20}
              height={7}
              alt='Right arrow'
            />
          </a>
        </div>

        <div className='max-w-full overflow-x-auto scrollbar_manual mt-0 md:mt-4'>
          <div className='flex spaxe-x-3 md:space-x-4'>
            {productList.map((product, index) => (
              <SellingProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProductOfMonth;
