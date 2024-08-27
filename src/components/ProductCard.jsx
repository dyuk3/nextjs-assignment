import Image from 'next/image';
import ProdImage from '../assets/Img.png';
import someImg from '../assets/Bestrahlt.png';

const ProductCard = () => {
  return (
    <div className='border-2  border-[#28E3E9] flex flex-col gap-2 rounded-tl-3xl rounded-br-3xl cursor-pointer'>
      <div className='flex items-center gap-2 bg-[#A10C0C]/5 rounded-3xl w-1/2 mt-4 ml-4 px-2'>
        <div className='w-1 h-1 rounded-full bg-[#A10C0C]'></div>
        <span className='font-light text-xs  text-[#A10C0C]'>nicht lieferbar</span>
      </div>
      <div>
        <Image src={ProdImage} alt='product' />
      </div>
      <div className='p-6 flex flex-col gap-3 items-start justify-center bg-[#62C3C6]/30 rounded-br-3xl'>
        <p className='bg-[#62C3C64D]/30 rounded-[4px] py-[2px] p-[10px] text-[#365758] font-semibold text-base'>
          Canify
        </p>
        <div className='flex justify-between gap-2 w-full'>
          <p className='bg-white rounded-[4px] px-4 py-0.5 text-[#116A6C] w-full text-center'>
            THC 18%
          </p>
          <p className='bg-[#62C3C6] px-4 py-0.5 text-white rounded-[4px] w-full text-center'>
            CBD 1%
          </p>
          <Image src={someImg} alt='img' className='object-contain' />
        </div>
        <h2 className='text-lg font-semibold text-[#116A6C]'>Cannabis Flos 18/1 PT Mango</h2>
        <div className='flex justify-between w-full items-center -mb-2 text-[#365758]'>
          <p>Kultivar</p>
          <p>Mango</p>
        </div>
        <div className='flex justify-between w-full items-center text-[#365758]'>
          <p>Genetik</p>
          <p>Hybrid</p>
        </div>
        <div className='flex justify-between items-center w-full  '>
          <div className='flex flex-col'>
            <span className='font-extrabold text-2xl text-[#116A6C] flex gap-1'>
              {' '}
              <p className='text-[#62C3C6] text-2xl font-extrabold'>€ </p>11,66
            </span>
            <span className='text-[#365758] font-light text-xs'>pro Gramm</span>
          </div>
          <div className='bg-[#ECFEAA] leaf  text-sm '>in den Warenkorb</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
