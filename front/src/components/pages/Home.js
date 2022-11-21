import React, { Fragment } from 'react';
import Search from '../layout/Search';

// Should use this one
// import BuildingGrid from '../buildings/BuildingGrid';

import BuildingUnit from '../buildings/BuildingUnit';

function Home() {
  return (
    <Fragment>
      <Search />
      <BuildingUnit />
    </Fragment>
  );
}

export default Home;
