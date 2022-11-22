import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from '../layout/Navbar';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    const response = await fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (response.status !== 200) {
      console.log("Incorrect password");
    }
    window.location.href = "/";
  }

  const submitLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={submitLogin} method="post">
        <div>
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            autoFocus
          />
        </div>
        <div>
          <label className="form-label" htmlFor="current-password">
            Password
          </label>
          <input
            className="form-control"
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
        <Link to="/signup">
          <button className="btn btn-primary">Sign up</button>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;