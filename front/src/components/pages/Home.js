import React, { Fragment } from 'react';
import Search from '../layout/Search';

// Should use this one
import BuildingGrid from '../buildings/BuildingGrid';

function Home() {
  return (
    <Fragment>
      <Search />
      <BuildingGrid />
    </Fragment>
  );
}

export default Home;
