import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import BuildingUnit from '../buildings/BuildingUnit';
// import { Link } from 'react-router-dom';

// function BuildingGrid({buildings}) {
function BuildingGrid() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const fetchBuildings = async () => {
      const rawData = await fetch('/allarchitectures');
      const res = await rawData.json();
      setBuildings(res);
    };
    fetchBuildings();
  }, []);

  return (
    <div>
      <div style={buildingStyle}>
        {buildings.map((building) => (
          <BuildingUnit key={building._id} building={building} />
        ))}
      </div>
    </div>
  );
}

const buildingStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default BuildingGrid;
