import { BsArrowRight } from 'react-icons/bs';

const Path = () => {
  return (
    <div className='flex justify-between items-start mt-20 mb-8 text-[#62C3C6]'>
      <div className='flex items-center gap-4'>
        <span className='cursor-pointer'>Home</span>
        <BsArrowRight />
        <span className='cursor-pointer'>Livebestand</span>
        <BsArrowRight />
        <span className='text-[#045A5C] font-bold cursor-pointer'>Cannabis Blüten</span>
      </div>
      <div className='flex flex-col gap-3'>
        <p className=' text-[#365758]'>GKV mit Kostenübernahme?</p>
        <button className='leaf border-2 font-medium text-[#045A5C] border-[#62C3C6]'>
          Preisoptionen
        </button>
      </div>
    </div>
  );
};

export default Path;
