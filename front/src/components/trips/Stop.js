import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style/Stop.css"
import ArchiContext from "../../context/archiTour/archiContext";

function Stop({stop: { title, designer, address, phone, openTime, closeTime, imageUrl }, itineraryID, reloadData}) {
	const archiContext = useContext(ArchiContext);
	const { deleteStop } = archiContext;

	const deleteOneStop = async () => {
		await deleteStop(itineraryID, title);
		console.log("stop: itineraryID", itineraryID)
		console.log("stop: title", title)
		await reloadData();
		console.log("Delete stop reload Data");
	}

	return (
		<div className="stop">
			<div className="left">
				<img src={imageUrl} alt="test" />
			</div>
			<div className="stopGap"></div>
			<div className="right">
				<div>
					<h3>{title}</h3>
					<div >
						<h4>Designer: {designer}</h4>
						<h4>Address: {address}</h4>
						<h4>Phone: {phone}</h4>
						<h4>Open Hours: {openTime} - {closeTime}</h4>
					</div>
					<button onClick={deleteOneStop}> delete </button>
				</div>
			</div>
		</div>
	);
}

Stop.propTypes = {
	stop: PropTypes.object.isRequired,
	reloadData: PropTypes.func.isRequired,
};

Stop.defaultProps = {
	stop: {
	imageUrl: "./test.jpeg",
	title: "Disney Concert Hall",
	designer: "Frank Gehry",
	address: "111 S Grand Ave, Los Angeles, CA 90012",
	phone: "(323) 850-2000",
	openhours: "9:00 am - 5:00pm",
}
};

export default Stop;
