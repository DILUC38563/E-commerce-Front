import "./login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login">
      <form className="loginForm">
        <h2>SIGN IN</h2>
        <input
          type="text"
          className="loginInput"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginBtn"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
        {error && <span style={{ color: "red" }}>Something Went Wrong!!</span>}
        <div>
          <a href="/register">Create an account</a>
        </div>
      </form>
    </div>
  );
}
