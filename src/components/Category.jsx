const Category = () => {
  return (
    <div className=''>
      <div className='mt-10 border-b border-[#62C3C6]/30 pb-4'>
        <h1 className='font-semibold text-lg text-center'>Genetik</h1>
        <div className='flex gap-1 my-4 w-full'>
          <p className='category-item text-[#FCFCFA] bg-[#62C3C6] w-full'>Indica</p>
          <p className='category-item w-full'>Sativa</p>
          <p className='category-item w-full'>Hybrid</p>
        </div>
      </div>
      <div className='mt-10 border-b border-[#62C3C6]/30 pb-4'>
        <h1 className='font-semibold text-lg text-center'>Bestrahltung</h1>
        <div className='flex gap-1  my-4 w-full'>
          <p className='category-item text-[#FCFCFA] bg-[#62C3C6]  '>bestrahlt</p>
          <p className='category-item px-1 w-full   '>nicht bestrahlt</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
