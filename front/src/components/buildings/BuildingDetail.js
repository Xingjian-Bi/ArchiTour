import React, { useEffect, useContext } from 'react';
// import Detail from './Detail';
// import Comments from './Comments';
import { useParams } from 'react-router-dom';
import ArchiContext from '../../context/archiTour/archiContext';

const BuildingDetail = () => {
  const { title } = useParams();
  console.log(title);
  const archiContext = useContext(ArchiContext);

  const { getBuilding, building } = archiContext;

  // console.log(match);
  // console.log(match.params.title);

  useEffect(() => {
    console.log('function getting called');
    getBuilding(title);
  }, []);

  const { imageUrl, description, city, designer, address, phone, openhours } =
    building;

  return (
    // <div>
    //   <h1>find</h1>
    // </div>
    <div className='building'>
      <div className='left'>
        <h2>{title}</h2>
        <img src={imageUrl} alt='test' />
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className='gap'></div>
      <div className='right'>
        {/* <Detail /> */}
        <div className='building-detail'>
          <h3>{city}</h3>
          <div className='detailInfo'>
            <h4>Designer: {designer}</h4>
            <h4>Address: {address}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Open Hours: {openhours}</h4>
          </div>
        </div>
        {/* <Comments /> */}
      </div>
    </div>
  );
};

export default BuildingDetail;
