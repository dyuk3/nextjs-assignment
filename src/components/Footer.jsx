import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#1A8D91] w-full rounded-t-3xl'>
      <div className='max-w-[1320px] mx-auto py-10 flex justify-between gap-4'>
        <div className='font-light text-white/50 text-xs flex flex-col gap-3'>
          <p>AGB</p>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>
        <div className='text-white flex flex-col flex-wrap'>
          <p className='flex items-center gap-2'>
            <span className='leaf-design w-[10px] h-[16px] bg-[#28E3E9]'></span>
            Rezept einlösen
          </p>
          <p className='flex items-center gap-2'>
            <span className='leaf-design w-[10px] h-[16px] bg-[#28E3E9]'></span>
            Live Bestand
          </p>
          <p className='flex items-center gap-2'>
            <span className='leaf-design w-[10px] h-[16px] bg-[#28E3E9]'></span>
            Videosprechstunde
          </p>
          <p className='flex items-center gap-2'>
            <span className='leaf-design w-[10px] h-[16px] bg-[#28E3E9]'></span>
            FAQs
          </p>
          <p className='flex items-center gap-2'>
            <span className='leaf-design w-[10px] h-[16px] bg-[#28E3E9]'></span>
            Kontakt
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='font-light text-white/50 text-xs flex flex-col gap-3'>Standort</span>
          <p className='font-bold text-white'>
            Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='font-light text-white/50 text-xs flex flex-col gap-3'>Telefon</span>
          <p className='font-bold text-white'>0223 545 5250</p>
        </div>
        <div className='flex flex-col'>
          <span className='font-light text-white/50 text-xs flex flex-col gap-3 mb-4'>
            Öffnungszeiten
          </span>
          <span className='font-light text-white/50 text-xs flex flex-col gap-3'>Mo-Fr</span>
          <p className='font-bold text-white mb-2'>09:00 – 18:00 Uhr</p>
          <span className='font-light text-white/50 text-xs flex flex-col gap-3'>Sa</span>
          <p className='font-bold text-white'>09:00 – 14:00 Uhr</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
