import React, { Fragment } from 'react';
import Search from '../layout/Search';
// import Buildings from '../buildings/Buildings';
import BuildingDetail from '../buildings/BuildingDetail';

function Home() {
  return (
    <Fragment>
      <Search />
      <BuildingDetail />
    </Fragment>
  );
}

export default Home;
