import React from "react";
import add from "../img/addAvatar.png";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hello Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>You don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default Login;
