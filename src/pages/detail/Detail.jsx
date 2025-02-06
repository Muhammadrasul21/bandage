import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center">
        <div className="w-full flex gap-10 p-4 bg-white rounded-lg shadow-lg animate-pulse">
          <div className="w-[600px] h-[450px] bg-gray-300 rounded-md"></div>
          <div className="flex flex-col gap-5 w-[700px]">
            <div className="w-3/4 h-[60px] bg-gray-300 rounded-md"></div>
            <div className="w-full h-[80px] bg-gray-300 rounded-md"></div>
            <div className="w-5/6 h-[50px] bg-gray-300 rounded-md"></div>
            <div className="w-2/3 h-[30px] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mt-[80px]">
        <div className="w-full lg:w-[500px] flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-contain rounded-lg p-4"
          />
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[500px]">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <p className="text-green-600 text-2xl font-semibold">
            ${product.price}
          </p>

          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`text-xl ${index < Math.round(product.rating.rate) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-gray-600 text-lg">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="border border-gray-500 text-gray-800 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
