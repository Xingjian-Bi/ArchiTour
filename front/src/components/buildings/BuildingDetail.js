import React, { useEffect, useContext } from "react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import ArchiContext from "../../context/archiTour/archiContext";
import AddArchitecture from "./AddArchitecture";
import "./style/BuildingDetail.css";

const BuildingDetail = () => {
	const { title } = useParams();
	const archiContext = useContext(ArchiContext);
	const { getBuilding, building, itineraries } = archiContext;

	useEffect(() => {
		reloadData();
		return () => {
			console.log("Cleaining up the effect");
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const reloadData = async () => {
		await getBuilding(title);
		getBuilding(title);
	};

	if (building !== undefined) {
		const {
			imageUrl,
			description,
			city,
			designer,
			address,
			phone,
			openTime,
			closeTime,
		} = building;
		return (
			<div className="building">
				<div className="left">
					<h2>{title}</h2>
					<img src={imageUrl} alt="test" />
					<h3>Description:</h3>
					<p>{description}</p>
				</div>
				<div className="verticalGap"></div>
				<div className="right">
					<div className="building-detail">
						<h3>{city}</h3>
						<div className="detailInfo">
							<h4>Designer: {designer}</h4>
							<h4>Address: {address}</h4>
							<h4>Phone: {phone}</h4>
							<h4>
								Open Hours: {openTime} - {closeTime}
							</h4>
						</div>
					</div>
					<div className="hrizontalGap"></div>
							<h3>Add to itinerary :</h3>

							{itineraries === undefined ||
							itineraries.length === 0 ? (
								<div>No itineraries </div>
							) : (
								<div>
									{itineraries.map((itinerary, i) => (
										<AddArchitecture
											key={itinerary._id}
											day={i + 1}
											itineraryID={itinerary._id}
											buildingName={title}
										/>
									))}
								</div>
							)}

					<div className="hrizontalGap"></div>
					<Comments reloadData={reloadData} />
				</div>
			</div>
		);
	}
};

BuildingDetail.propTypes = {};
export default BuildingDetail;
