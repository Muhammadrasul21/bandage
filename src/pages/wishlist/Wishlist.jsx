import Cards from "@/components/Cards";
import { useStateValue } from "@/context";
import React, { useEffect } from "react";
import empty from "@/assets/empty.jpg"

const Wishlist = () => {
  const [state] = useStateValue();
  const wishlist = state.wishlist || [];

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, []);

  return (
    <div className="container">
      {wishlist.length > 0 ? (
        <>
          <div className="flex flex-col gap-[10px] items-center text-center mb-8">
            <p className="text-4xl tracking-[2px]">Your wishlist</p>
          </div>
          <Cards products={wishlist} />
        </>
      ) : (
        <div className="w-full flex items-center justify-center">
          <img src={empty} alt="" />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
