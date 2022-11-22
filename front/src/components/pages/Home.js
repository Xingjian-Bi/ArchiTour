import React, { Fragment, useState, useEffect } from 'react';
import Search from '../layout/Search';

// Should use this one
import BuildingGrid from '../buildings/BuildingGrid';

// import BuildingUnit from '../buildings/BuildingUnit';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchBuildings = async () => {
      const rawData = await fetch('/allarchitectures');
      const res = await rawData.json();
      setBuildings(res);
    };
    fetchBuildings();
    // const searchBuildings = async () => {};
  }, []);
  return (
    <Fragment>
      <Search />
      <BuildingGrid buildings={buildings} />
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     <Search />
  //     <BuildingGrid />
  //   </Fragment>
  // );
}

export default Home;
