import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import testImg from './test.jpeg';
import { Link } from 'react-router-dom';

function BuildingUnit({ building: { title, imageUrl, city } }) {
  // const { title, imageUrl, city } = building;

  return (
    <div className='buildingUnit'>
      {/* this will call routes in App.js and create a route to BuildingDetail */}
      <Link to={`/building/${title}`}>
        <img className='img' src={imageUrl} alt='{title}' />
      </Link>

      <div className='subheader'>
        <h3 className='title'>{title}</h3>
        <h3 className='city'>{city}</h3>
      </div>
    </div>
  );
}

BuildingUnit.defaultProps = {
  title: 'Disney Concert Hall',
  city: 'Los Angeles, CA',
  image: testImg,
};

export default BuildingUnit;
