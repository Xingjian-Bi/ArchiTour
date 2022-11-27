import React from "react";
import PropTypes from "prop-types";
import "./style/Stop.css"

function Stop({stop: { title, designer, address, phone, openTime, closeTime, imageUrl }}) {
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
				</div>
			</div>
		</div>
	);
}

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
