import React, { useState } from "react";
function Comments() {
	const [text, setText] = useState("");

	async function addComent() {
		const responseRaw = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				text: text,
			}),
		});
		console.log("responseRaw.ok:", responseRaw.ok);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		addComent();
		setText("");
	};

	// needs to show all comments
	return (
		<div>
			<div className='comments'>
				<h3>Comments:</h3>
			</div>
			<div className='addcomments'>
				<form className='form' onSubmit={onSubmit}>
					<input
						type='text'
						name='text'
						placeholder='Add Comments Here'
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
					<input type='submit' value='Add' className='btn btn-dark btn-block' />
				</form>
			</div>
		</div>
	);
}
export default Comments;
