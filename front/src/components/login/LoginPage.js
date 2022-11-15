import React from 'react';
import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';

function LoginPage() {
  return (
      <div>
        <h1>Sign in</h1>
        <form action="/login" method="post">
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
              required
            />
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
          <Link to="/signup">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
          </Link>
        </form>
      </div>
  );
}

export default LoginPage;