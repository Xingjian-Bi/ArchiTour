import React from 'react';

function Detail({ city, designer, address, phone, openhours }) {
  return (
    <div className='building-detail'>
      <h3>{city}</h3>
      <div className='detailInfo'>
        <h4>Designer: {designer}</h4>
        <h4>Address: {address}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Open Hours: {openhours}</h4>
      </div>
    </div>
  );
}
Detail.defaultProps = {
  city: 'Los Angeles, CA',
  designer: 'Frank Gehry',
  address: '111 S Grand Ave, Los Angeles, CA 90012',
  phone: '(323) 850-2000',
  openhours: '9:00 am - 5:00pm',
};

export default Detail;
