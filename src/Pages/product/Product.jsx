import "./product.css";
import axios from "axios";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cartRedux.js";
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px 0;
  cursor: pointer;
`;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://e-commerce-srvr.herokuapp.com/product/find/" + id
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div className="productPage">
      <Navbar />
      <div className="page">
        <img src={product.img} alt="" className="pageImg" />
        <div className="pageInfo">
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <h3>₹{product.price}</h3>
          <div className="pageFilter">
            <div className="filter">
              <h4>Color</h4>
              {product.color?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </div>
            <div className="filter">
              <h4>Size</h4>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </div>
          </div>
          <div className="add-cart">
            <RemoveIcon
              style={{
                margin: 10,
                cursor: "pointer",
                background: "white",
                borderRadius: "50%",
              }}
              onClick={() => handleQuantity("dec")}
            />
            <p>{quantity}</p>
            <AddIcon
              style={{
                margin: 10,
                cursor: "pointer",
                background: "white",
                borderRadius: "50%",
              }}
              onClick={() => handleQuantity("asc")}
            />
            <button
              style={{
                border: "none",
                padding: "10px 20px 10px 20px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
