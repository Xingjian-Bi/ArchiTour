import React, { useState, useContext } from "react";
// import ArchiContext from "../../context/archiTour/archiContext";
import { Link } from "react-router-dom";

// import Navbar from '../layout/Navbar';

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	// const archiContext = useContext(ArchiContext);
	// const history = useHistory();
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
		// console.log("responseRaw.ok:", responseRaw.ok);
		if (!responseRaw.ok) {
			setError("Incorrect username or password");
			// console.log("Incorrect password ?? ");
		} else {
			// await console.log(responseRaw);
			// await archiContext.getUser();
			// console.log(archiContext.user);
			window.location.href = "/";

			// console.log("Correct password !! ");
		}
	}

	const submitLogin = (e) => {
		e.preventDefault();
		setError("");
		login();
	};

	return (
		<div>
			<h1>Sign in</h1>
			<form onSubmit={submitLogin} method='post'>
				{error !== "" ? <div className='alert'> {error} </div> : ""}
				<div>
					<label className='form-label' htmlFor='username'>
						Username
					</label>
					<input
						className='form-control'
						id='username'
						name='username'
						type='text'
						autoComplete='username'
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						required
						autoFocus
					/>
				</div>
				<div>
					<label className='form-label' htmlFor='current-password'>
						Password
					</label>
					<input
						className='form-control'
						id='current-password'
						name='password'
						type='password'
						autoComplete='current-password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
				</div>
				<br />
				<button className='btn btn-primary' type='submit'>
					Sign in
				</button>
				<Link to='/signup'>
					<button className='btn btn-primary'>Sign up</button>
				</Link>
			</form>
		</div>
	);
}

export default LoginPage;
