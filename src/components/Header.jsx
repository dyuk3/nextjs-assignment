import { BsCart2 } from 'react-icons/bs';
import SearchBar from './SearchBar';

const headerItems = ['Rezept einlösen', 'Live Bestand', 'Videosprechstunde', 'FAQs', 'Kontakt'];

const Header = () => {
  return (
    <div className='flex justify-between items-center py-4'>
      <SearchBar />
      {headerItems.map((item, index) => (
        <div key={index} className='flex items-center gap-2'>
          <div className='leaf-design w-[10px] h-[16px] bg-[#62C3C6]/30'></div>
          <p className='cursor-pointer'> {item}</p>
        </div>
      ))}
      <div className='relative'>
        <BsCart2 size={20} className='text-[#62C3C6] cursor-pointer' />
        <div className='absolute -top-2 -right-4 bg-gray-500/20 rounded-[50%] px-2 text-sm'>1</div>
      </div>
      <div className='bg-[#ECFEAA] leaf cursor-pointer'>Anmelden</div>
    </div>
  );
};

export default Header;
