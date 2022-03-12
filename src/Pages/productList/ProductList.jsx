import "./productList.css";
import styled from "styled-components";
import Navbar from "../../Components/navbar/Navbar";
import Products from "../../Components/products/Products";
import Footer from "../../Components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Select = styled.select`
  margin: 0.5rem;
`;
const Option = styled.option``;

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({ ...filter, [e.target.name]: value });
  };
  return (
    <div className="productList">
      <Navbar />
      <h1 className="productTitle">{cat}</h1>
      <div className="productFilter">
        <div className="filter">
          <h2>Filter Products:</h2>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>pink</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
            <Option>3XL</Option>
            <Option>4XL</Option>
            <Option>5XL</Option>
          </Select>
        </div>
        <div className="filter">
          <h2>Sort Products:</h2>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort} />
      <Footer />
    </div>
  );
}
