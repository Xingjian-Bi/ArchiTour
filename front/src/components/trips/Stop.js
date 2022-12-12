import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style/Stop.css";
import ArchiContext from "../../context/archiTour/archiContext";

function Stop({
	stop: { title, designer, address, phone, openTime, closeTime, imageUrl },
	itineraryID,
	reloadData,
}) {
	const archiContext = useContext(ArchiContext);
	const { deleteStop } = archiContext;

	const deleteOneStop = async () => {
		await deleteStop(itineraryID, title);
		await reloadData();
	};

	return (
		<div className="stop">
			<div className="left">
				<img src={imageUrl} alt="test" />
			</div>
			<div className="stopGap"></div>
			<div className="right">
				<div>
					<h3>{title}</h3>
					<div>
						<h4>Designer: {designer}</h4>
						<h4>Address: {address}</h4>
						<h4>Phone: {phone}</h4>
						<h4>
							Open Hours: {openTime} - {closeTime}
						</h4>
					</div>
					<button className="delstopbutton" onClick={deleteOneStop}> delete </button>
				</div>
			</div>
		</div>
	);
}

Stop.propTypes = {
	stop: PropTypes.object.isRequired,
	itineraryID: PropTypes.string.isRequired,
	reloadData: PropTypes.func.isRequired,
};

export default Stop;
