import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "@/context";

const ProductItem = ({ product }) => {
  // product ni propsdan to'g'ri olish
  const [state, dispatch] = useStateValue();

  const isLiked = (product) => {
    return state.wishlist?.some((item) => item.id === product.id);
  };

  const handleLikeToggle = () => {
    dispatch({ type: "TOGGLE_LIKE", payload: product });
  };

  return (
    <div className="border relative rounded-lg p-4 flex flex-col items-center text-center bg-white">
      <div className="">
        <Link to={`/detail/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4 cursor-pointer"
          />
        </Link>
        <button
          onClick={handleLikeToggle}
          className="absolute top-2 right-1 text-2xl"
        >
          {isLiked(product) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="font-bold">{product.title.slice(0, 15)}...</h3>
        <p className="text-[#23856D] text-[14px]">${product.price}</p>
        <div className="flex gap-[6px] mt-[10px]">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
