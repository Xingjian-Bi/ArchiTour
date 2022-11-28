import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ArchiContext from "../../context/archiTour/archiContext";
import "./style/Comments.css";

function Comments({ reloadData }) {
	const archiContext = useContext(ArchiContext);
	const { building, user, addComment } = archiContext;

	const { comments } = building;

	const [text, setText] = useState("");
	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(text, user);
		addComment(building._id, user, text);
		console.log(comments);
		setText("");
		await reloadData();
	};

	// needs to show all comments
	return (
		<div>
			<div>
				<h3>Reviews from other users:</h3>
				{comments === undefined ? (
					<div></div>
				) : (
					<div>
						{comments.map((comment, i) => (
							<div className="comments" key={i}>
								{comment.username === null ||
								comment.username === undefined
									? "Anonymous User"
									: comment.username}
								:<br></br>
								{comment.comment}
							</div>
						))}
					</div>
				)}
			</div>
			<div className="addcomments">
				<form className="form" onSubmit={onSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Add Comments Here"
						value={text}
						onChange={onChange}
					/>
					<input
						type="submit"
						value="Add"
						className="btn btn-dark btn-block"
					/>
				</form>
			</div>
		</div>
	);
}
Comments.propTypes = {
	reloadData: PropTypes.func.isRequired,
};
export default Comments;
