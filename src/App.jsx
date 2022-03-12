import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./Pages/cart/Cart";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Product from "./Pages/product/Product";
import ProductList from "./Pages/productList/ProductList";
import Register from "./Pages/register/Register";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=> state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      </Switch>
    </Router>
    // <Payment />
  );
}

export default App;
