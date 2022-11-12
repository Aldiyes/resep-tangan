import React, { useState } from "react";
import LoginForm from "../componens/LoginForm";

const Login = () => {
  const test = {
    email: "aldiyespaskalisbirta@gmail.com",
    password: "aldiyes17032002",
  };

  const [user, setUser] = useState({ email: "", password: "" });

  const login = (details) => {
    if (details.email === test.email && details.password === test.password) {
      setUser({
        email: details.email,
        password: details.password,
      });
    }
  };

  const Logout = () => {
    console.log("logout");
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div className="app">
      {user.email !== "" ? (
        <div className="welcome">
          <h1>WELCOME {user.email}</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} />
      )}
    </div>
  );
};

export default Login;
