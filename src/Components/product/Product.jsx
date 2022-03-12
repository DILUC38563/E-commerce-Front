import "./product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

export default function Product({ item }) {
  return (
    <div className="product">
      <img className="productImg" src={item.img} alt="" />
      <div className="icon">
        <ShoppingCartOutlinedIcon style={{ cursor: "pointer" }} />
        <Link className="link" to={`/product/${item._id}`}>
          <SearchOutlinedIcon style={{ paddingLeft: 15, cursor: "pointer" }} />
        </Link>
        <FavoriteBorderOutlinedIcon
          style={{ paddingLeft: 15, cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
