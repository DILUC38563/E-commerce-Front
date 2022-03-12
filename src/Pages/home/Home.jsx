import React from "react";
import Categories from "../../Components/categories/Categories";
import Navbar from "../../Components/navbar/Navbar";
import Slider from "../../Components/slider/Slider";
import Products from "../../Components/products/Products";
import Footer from "../../Components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}
