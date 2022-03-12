import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://e-commerce-srvr.herokuapp.com/auth/register", {
        username,
        email,
        password,
      });
      alert("Registration Successfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h2>CREATE AN ACCOUNT</h2>
        {/* <input className="registerInput" type="text" placeholder="first name" />
        <input className="registerInput" type="text" placeholder="last name" /> */}
        <input
          className="registerInput"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="registerInput"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="registerInput"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        {/* <input
          className="registerInput"
          type="password"
          placeholder="confirm password"
        /> */}
        <button className="registerBtn" type="submit">
          Create
        </button>
        <Link className="link" to="/login">
          <button className="regsiterLoginBtn">Login</button>
        </Link>
      </form>
    </div>
  );
}
