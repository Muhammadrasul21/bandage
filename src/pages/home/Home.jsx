import Cards from "@/components/Cards";
import FooterHead from "@/components/FooterHead";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Pick from "@/components/Pick";
import Posts from "@/components/Posts";
import React, { useEffect, useState } from "react";
import { request } from "@/api/index";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await request.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Pick />
      <div className="flex flex-col gap-[10px] items-center text-center mb-20">
        <p className="text-[#737373] text-xl tracking-[2px]">
          Featured Products
        </p>
        <p className="text-2xl font-bold tracking-[1px]">BESTSELLER PRODUCTS</p>
        <p className="text-[#737373] text-[14px] tracking-[2px]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <Cards products={products} loading={loading} />
      <Info />
      <Posts />
      <FooterHead />
    </>
  );
};

export default Home;
