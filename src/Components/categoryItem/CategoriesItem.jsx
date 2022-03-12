import { Link } from "react-router-dom";
import "./categoriesItem.css";

export default function CategoriesItem({ item }) {
  return (
    <div className="categoriesItem">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" className="categoiresItemImg" />
        <h1
          className="info"
          style={{ letterSpacing: "4px", fontWeight: "bold" }}
        >
          {item.title}
          <button
            style={{
              padding: 10,
              border: "none",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            SHOP NOW!
          </button>
        </h1>
      </Link>
    </div>
  );
}
