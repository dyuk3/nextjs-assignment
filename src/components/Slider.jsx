'use client';

import { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = (props) => {
  const { heading, min, max } = props;
  const [values, setValues] = useState([min, max]);
  console.log(heading);
  return (
    <div className='w-full border-b border-[#62C3C6]/30 mt-10 '>
      <h1 className='text-lg text-center font-semibold '>{heading} </h1>
      <ReactSlider
        onChange={setValues}
        value={values}
        min={1}
        max={100}
        className='w-full h-1 bg-[#62C3C6]/30 mt-5'
      />
      <div className='flex justify-between my-8'>
        <div className='bg-[#819191]/10 py-1 px-3 rounded-2xl w-full'>{values[0]} €</div>
        <span className='px-2'>-</span>
        <div className='bg-[#819191]/10 py-1 px-3 rounded-2xl w-full'>{values[1]} €</div>
      </div>
    </div>
  );
};

export default Slider;
