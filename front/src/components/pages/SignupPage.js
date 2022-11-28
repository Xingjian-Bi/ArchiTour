import React, { useState } from "react";

function SignupPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	async function register() {
		const responseRaw = await fetch("/registerUser", {
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
		console.log("responseRaw.ok:", responseRaw.ok);
		if (!responseRaw.ok) {
			setError("Username exits");
		} else {
			window.location.href = "/login";
		}
	}

	const submitSignUp = (e) => {
		e.preventDefault();
		setError("");
		register();
	};

	return (
		<div>
			<h1>Create an account</h1>
			<form onSubmit={submitSignUp} method="post">
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
				<button className="btn btn-primary" type="submit">
					Sign up
				</button>
			</form>
		</div>
	);
}

SignupPage.propTypes = {};
export default SignupPage;
