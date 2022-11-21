import React from 'react';
// import PropTypes from 'prop-types';
import testImg from './test.jpeg';
import BuildingUnit from '../buildings/BuildingUnit';
import { Link } from 'react-router-dom';

function BuildingGrid() {
  return (
    <div>
      <div style={buildingStyle}>
        {/* {BuildingUnit.map((building) => (
          <Building key={user.id} user={user} />
        ))} */}
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
