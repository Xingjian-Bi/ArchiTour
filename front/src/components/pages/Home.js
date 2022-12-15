import React, { Fragment } from "react";
import Search from "../layout/Search";

/*
It was impressing that How you were implementing the picture storing and 
passing data via context, useContex, useEffect, useState, useReducer, 
handling the rendering of the page in a different way. 
Passing data between different files.  
*/

// Should use this one
import BuildingGrid from "../buildings/BuildingGrid";

function Home() {
	return (
		<Fragment>
			<main>
				<Search />
				<BuildingGrid />
			</main>
		</Fragment>
	);
}

export default Home;
