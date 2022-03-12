import "./products.css";
// import { popularProducts } from "../../data";
import Product from "../product/Product";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products({ cat, filter, sort }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://e-commerce-srvr.herokuapp.com/product?category=${cat}`
            : "https://e-commerce-srvr.herokuapp.com/product"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filter, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) => [
        ...prev.sort((a, b) => a.createdAt - b.createdAt),
      ]);
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev.sort((a, b) => a.price - b.price)]);
    } else {
      setFilterProducts((prev) => [
        ...prev.sort((a, b) => b.createdAt - a.createdAt),
      ]);
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? filterProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 6)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
}
