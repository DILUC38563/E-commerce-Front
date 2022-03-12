import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/userRedux";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
  };
  return (
    <div className="navbar">
      <div className="navLeft">
        <div className="searchOption">
          <input
            type="text"
            style={{
              border: "none",
              padding: 5,
              fontSize: "1rem",
              background: "inherit",
              letterSpacing: "1px",
            }}
          />
          <SearchIcon style={{ cursor: "pointer", paddingLeft: 10 }} />
        </div>
      </div>
      <div className="navCenter">
        <img
          src="https://img.icons8.com/plasticine/64/000000/online-store.png"
          style={{ paddingRight: 10 }}
          alt=""
        />
        E-COMMERCE WEB SHOP
      </div>
      <div className="navRight">
        {user ? (
          <h4 onClick={handleLogout}>LogOut</h4>
        ) : (
          <>
            <Link className="link" to="/register">
              <h4>Register</h4>
            </Link>
            <Link className="link" to="/login">
              <h4 style={{ marginLeft: 15 }}>SignIn</h4>
            </Link>
          </>
        )}

        <Link className="link" to="/cart">
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlinedIcon style={{ marginLeft: 15 }} />
          </Badge>
        </Link>
      </div>
    </div>
  );
}
