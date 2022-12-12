import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	async function login() {
		const responseRaw = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		if (!responseRaw.ok) {
			setError("Incorrect username or password");
		} else {
			window.location.href = "/";
		}
	}

	const submitLogin = (e) => {
		e.preventDefault();
		setError("");
		login();
	};

	return (
		<main>
			<h1>Sign in</h1>
			<form onSubmit={submitLogin} method="post">
				{error !== "" ? <div className="alert"> {error} </div> : ""}
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
				<button className="btn btn-dark" type="submit">
					Sign in
				</button>
				<Link to="/signup">
					<button className="btn btn-light">Sign up</button>
				</Link>
			</form>
		</main>
	);
}

LoginPage.propTypes = {};
export default LoginPage;
