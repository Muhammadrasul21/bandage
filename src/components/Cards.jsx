import React, { useEffect, useState } from 'react';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Mahsulotlarni yuklashda xatolik:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-[10px] items-center text-center mb-20">
        <p className="text-[#737373] text-xl tracking-[2px]">Featured Products</p>
        <p className="text-2xl font-bold tracking-[1px]">BESTSELLER PRODUCTS</p>
        <p className="text-[#737373] text-[14px] tracking-[2px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="font-bold ">{product.title.slice(0, 15)}...</h3>
              <p className="text-[#23856D] text-[14px]">${product.price}</p>
              <div className='flex gap-[6px] mt-[10px]'>
                <div className='w-4 h-4 rounded-full bg-[#23A6F0]'></div>
                <div className='w-4 h-4 rounded-full bg-[#23856D]'></div>
                <div className='w-4 h-4 rounded-full bg-[#E77C40]'></div>
                <div className='w-4 h-4 rounded-full bg-[#252B42]'></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
