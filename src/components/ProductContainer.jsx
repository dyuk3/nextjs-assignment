import ProductCard from './ProductCard';

const ProductContainer = () => {
  return (
    <div className='mt-20 grid grid-cols-3 gap-5'>
      {/* Here we can have an array of products and by mapping on them we can display their product cards */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductContainer;
