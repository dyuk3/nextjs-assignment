import React from 'react';
import Sidebar from './Sidebar';
import FilterSection from './FilterSection';
import ProductContainer from './ProductContainer';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from 'react-icons/hi2';

const MainSection = () => {
  return (
    <div className='flex gap-20'>
      <Sidebar />
      <div className='w-full'>
        <FilterSection />
        <ProductContainer />
        {/* pagination section */}
        <div className='flex items-center gap-4 justify-end w-full my-8 text-[#045A5C]'>
          <HiMiniArrowLongLeft className='page-arrows' size={20} />
          <h3 className=' pagination-item'>1</h3>
          <h3 className=' pagination-item'>2</h3>
          <h3 className=' pagination-item'>3</h3>
          <h3 className=' pagination-item'>...</h3>
          <h3 className=' pagination-item'>12</h3>
          <HiMiniArrowLongRight className='page-arrows' size={20} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
