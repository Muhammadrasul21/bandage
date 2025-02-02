import React, { useEffect, useState } from "react";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xatolik:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-[10px] items-center text-center mb-20">
        <p className="text-[#737373] text-xl tracking-[2px]">
          Featured Products
        </p>
        <p className="text-2xl font-bold tracking-[1px]">BESTSELLER PRODUCTS</p>
        <p className="text-[#737373] text-[14px] tracking-[2px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 place-items-center">
          <div className="w-[250px] h-[280px] flex flex-col gap-5 p-4 bg-white rounded-lg shadow-lg animate-pulse">
            <div className="w-full h-[150px] bg-gray-300 rounded-md"></div>

            <div className="w-3/4 h-[30px] bg-gray-300 rounded-md"></div>

            <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
            <div className="w-5/6 h-[20px] bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-[250px] h-[280px] flex flex-col gap-5 p-4 bg-white rounded-lg shadow-lg animate-pulse">
            <div className="w-full h-[150px] bg-gray-300 rounded-md"></div>

            <div className="w-3/4 h-[30px] bg-gray-300 rounded-md"></div>

            <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
            <div className="w-5/6 h-[20px] bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-[250px] h-[280px] flex flex-col gap-5 p-4 bg-white rounded-lg shadow-lg animate-pulse">
            <div className="w-full h-[150px] bg-gray-300 rounded-md"></div>

            <div className="w-3/4 h-[30px] bg-gray-300 rounded-md"></div>

            <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
            <div className="w-5/6 h-[20px] bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-[250px] h-[280px] flex flex-col gap-5 p-4 bg-white rounded-lg shadow-lg animate-pulse">
            <div className="w-full h-[150px] bg-gray-300 rounded-md"></div>

            <div className="w-3/4 h-[30px] bg-gray-300 rounded-md"></div>

            <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
            <div className="w-5/6 h-[20px] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px]">
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
              <div className="flex gap-[6px] mt-[10px]">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
