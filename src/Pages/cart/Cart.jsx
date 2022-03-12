import "./cart.css";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";

const KEY =
  "pk_test_51KVFaESGS6K0tq9druGpgOxaop6nvSxaC92UOHBnugmiG0PKfNxOAjXp9mmLvlP7XMLGGPMbc9qMCfyD5WCmMIRz00IjkAVrQU";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const paymentRequest = async () => {
      try {
        const res = await axios.post(
          "https://e-commerce-srvr.herokuapp.com/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total,
          }
        );
        setStripeToken(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total >= 1 && paymentRequest();
  }, [stripeToken, cart.total]);

  return (
    <div className="cart">
      <Navbar />
      <div className="cartItem">
        <h2>YOUR BAG</h2>
        <div className="cartTop">
          <button className="cartBtn">
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              COUNTINUE SHOPPING
            </a>
          </button>
          <div className="cartTxts">
            <span className="txt">Shopping Bag ({cart.quantity})</span>
            <span className="txt">Your Wishlist (0)</span>
          </div>
          <StripeCheckout
            name="E-Commerce Shop"
            image=""
            description={`Your total is ₹ ${cart.total}`}
            billingAddress
            shippingAddress
            amount={(cart.total * 100) / 76}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="cartBtn1">CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
        <div className="cartBottom">
          <div className="cartInfo">
            {/* CART PRODUCT */}

            {cart.products.map((product) => (
              <div className="cartProduct">
                <div className="cartProductDetail">
                  <img src={product.img} alt="" style={{ width: "200px" }} />
                  <div className="detail">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <div
                      color={product.color}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                      }}
                    />
                    <div>
                      <b>Size:</b> {product.size}
                    </div>
                  </div>
                </div>
                <div className="cartPriceDetail">
                  <div className="cartAmount">
                    <AddIcon
                      style={{ verticalAlign: "middle", cursor: "pointer" }}
                    />
                    <span
                      style={{
                        margin: 10,
                        padding: "10px 20px",
                        background: "white",
                        borderRadius: 10,
                        border: "1px solid teal",
                      }}
                    >
                      {product.quantity}
                    </span>
                    <RemoveIcon
                      style={{ verticalAlign: "middle", cursor: "pointer" }}
                    />
                  </div>
                  <div className="price">
                    ₹ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            {/*CART PRODUCT */}
            <hr />
          </div>
          <div className="cartSummary">
            <h2>ORDER SUMMARY</h2>
            <div className="summaryItem">
              <span className="summaryItemText">Sub Total</span>
              <span className="summaryItemPrice">₹ {cart.total}</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping Charge</span>
              <span className="summaryItemPrice">₹ 40</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">₹ - 40</span>
            </div>
            <hr />
            <div className="summaryItem">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">₹ {cart.total}</span>
            </div>
            <StripeCheckout
              name="E-Commerce Shop"
              image=""
              description={`Your total is ₹ ${cart.total}`}
              billingAddress
              shippingAddress
              amount={(cart.total * 100) / 76}
              token={onToken}
              stripeKey={KEY}
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
