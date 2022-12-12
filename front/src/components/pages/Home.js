import React, { Fragment } from "react";
import Search from "../layout/Search";

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
