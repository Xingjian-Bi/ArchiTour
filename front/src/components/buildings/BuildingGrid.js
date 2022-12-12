import React, { useContext, useEffect } from "react";
import ArchiContext from "../../context/archiTour/archiContext";
import BuildingUnit from "../buildings/BuildingUnit";
import "./style/BuildingGrid.css";

function BuildingGrid() {
	const archiContext = useContext(ArchiContext);

	// import building from archiContext
	const { buildings, searchRes, getUser } = archiContext;
	// let buildinglst;
	// console.log(searchRes);
	// console.log(buildings);
	// searchRes === [] ? (buildinglst = searchRes) : (buildinglst = buildings);
	// console.log(buildinglst);
	useEffect(() => {
		getUser();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<h2>Browse Architecture:</h2>
			<div className='buildingStyle'>
				{buildings.map((building) => (
					<BuildingUnit key={building._id} building={building} />
				))}
			</div>
		</div>
	);
}

BuildingGrid.propTypes = {};
export default BuildingGrid;
