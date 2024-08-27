import { IoIosArrowDown } from 'react-icons/io';
import { BsToggle2On } from 'react-icons/bs';
import { TfiMenuAlt } from 'react-icons/tfi';

import SearchBar from './SearchBar';

const FilterSection = () => {
  return (
    <div className='flex gap-4 justify-end w-full ml-auto text-[#365758]'>
      <SearchBar />
      <div className='bg-[#62C3C6]/30 flex items-center gap-2 py-[2px] px-3 font-semibold rounded-md  cursor-pointer'>
        <span>Sortieren nach</span>
        <IoIosArrowDown size={20} />
      </div>
      <div className='bg-[#62C3C6]/30 flex items-center gap-2 py-[2px] px-3 font-semibold rounded-md  cursor-pointer'>
        <span>Verfügbarkeit</span>
        <BsToggle2On className='text-[#62C3C6] cursor-pointer' size={20} />
      </div>
      <div className='bg-[#62C3C6]/30 flex items-center p-2 rounded-md  cursor-pointer'>
        <TfiMenuAlt size={20} />
      </div>
    </div>
  );
};

export default FilterSection;
