import React from 'react';
import Slider from './Slider';
import Producer from './Producer';
import Category from './Category';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMiniXMark } from 'react-icons/hi2';

const Sidebar = () => {
  return (
    <div className='w-[250px] text-[#365758] '>
      <div className='flex items-center gap-6 mb-20  '>
        <div className='leaf-design w-[20px] h-[26px] bg-[#28E3E9]'></div>
        <h1 className='font-semibold text-3xl text-[#116A6C]'>Blüten</h1>
      </div>
      <button className='bg-[#62C3C6]/10 w-full py-1 font-semibold text-2xl text-[#045A5C]'>
        Filter
      </button>
      <Slider heading={'Preis'} min={15} max={50} />
      <Producer />
      <Slider heading={'THC Gehalt'} min={11} max={40} />
      <Slider heading={'CBD Gehalt'} min={11} max={40} />
      <Category />
      <div className='flex justify-between items-center mt-8  pb-8 border-b  border-[#62C3C6]/30'>
        <h1 className='mx-auto font-semibold text-lg'>Terpene</h1>
        <IoIosArrowDown />
      </div>
      <div className='flex items-center gap-1 my-8'>
        <HiMiniXMark className='text-[#28E3E9]' />
        <p className='text-[#0D0D0D]'>alle Filter zurücksetzen</p>
      </div>
    </div>
  );
};

export default Sidebar;
