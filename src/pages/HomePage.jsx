import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Banner1 from "../components/Banner1";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
    </>
  );
};

export default Home;
