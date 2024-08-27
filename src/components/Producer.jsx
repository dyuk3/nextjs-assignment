import { IoIosArrowUp } from 'react-icons/io';

const listItems = ['ADREXpharma', 'Aurora', 'Avaay', 'Bedrocan', 'Cannamedical'];

const Producer = () => {
  return (
    <div className='w-full mt-10 border-b-2 border-[#62C3C6]/30 '>
      <div className=' flex justify-between items-center my-4 '>
        <h1 className='font-semibold text-lg mx-auto'>Herstellar</h1>
        <IoIosArrowUp className='cursor-pointer text-[#62C3C6]' size={20} />
      </div>
      <div className='flex flex-col gap-2'>
        {listItems.map((item, index) => (
          <div className='flex gap-4 ' key={index}>
            <input
              type='checkbox'
              className='  accent-[#62C3C6]/30 rounded-lg w-4 h-4 outline-1 outline-[#62C3C6] outline cursor-pointer '
              name={item}
              value={item}
              // id={item + index}
            />
            <label className='' htmlFor={item + index}>
              {item}
            </label>
          </div>
        ))}
      </div>
      <button className='leaf-design border-2 border-[#ECFEAA] text-[#045A5C] py-[6px] px-5 mt-4 mb-6 w-full'>
        mehr anzeigen
      </button>
    </div>
  );
};

export default Producer;
