import React from "react";
import PropTypes from "prop-types";

function Stop({ title, designer, address, phone, openhours, image }) {
	return (
		<div className='stop'>
			<div className='left'>
				<img src={image} alt='test' />
			</div>
			<div className='gap'></div>
			<div className='right'>
				<div className='stop-detail'>
					<h3>{title}</h3>
					<div className='detailInfo'>
						<h4>Designer: {designer}</h4>
						<h4>Address: {address}</h4>
						<h4>Phone: {phone}</h4>
						<h4>Open Hours: {openhours}</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

Stop.defaultProps = {
	title: "Disney Concert Hall",
	designer: "Frank Gehry",
	address: "111 S Grand Ave, Los Angeles, CA 90012",
	phone: "(323) 850-2000",
	openhours: "9:00 am - 5:00pm",
};

export default Stop;
