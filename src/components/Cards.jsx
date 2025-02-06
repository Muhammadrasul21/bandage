import React from "react";
import ProductItem from "./ProductItem";

const Cards = ({ products, loading }) => {
  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 place-items-center">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-[250px] h-[280px] flex flex-col gap-5 p-4 bg-white rounded-lg shadow-lg animate-pulse"
              >
                <div className="w-full h-[150px] bg-gray-300 rounded-md"></div>
                <div className="w-3/4 h-[30px] bg-gray-300 rounded-md"></div>
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
                <div className="w-5/6 h-[20px] bg-gray-300 rounded-md"></div>
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px]">
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Cards);
