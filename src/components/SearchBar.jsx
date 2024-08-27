import { FiSearch } from 'react-icons/fi';

// A resuable searchbar component
const SearchBar = () => {
  return (
    <form className='px-4 p-1 bg-[#EEF7F7] rounded-full w-[360px] flex items-center justify-between  text-[#62C3C6]'>
      <input
        type='text'
        placeholder='Suchen'
        className='bg-inherit text-[#62C3C6] placeholder-current outline-none'
      />
      <button>
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
