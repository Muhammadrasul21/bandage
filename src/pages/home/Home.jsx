import Cards from "@/components/Cards";
import FooterHead from "@/components/FooterHead";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Pick from "@/components/Pick";
import Posts from "@/components/Posts";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Pick />
      <Cards />
      <Info />
      <Posts />
      <FooterHead />
    </>
  );
};

export default Home;
