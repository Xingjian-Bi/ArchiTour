import React from 'react';
import PropTypes from 'prop-types';
import testImg from './test.jpeg';

import Detail from './Detail';
import Comments from './Comments';

function Building({ title, description }) {
  return (
    <div className='building'>
      <div className='left'>
        <h2>{title}</h2>
        <img src={testImg} alt='test' />
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className='gap'></div>
      <div className='right'>
        <Detail />
        <Comments />
      </div>
    </div>
  );
}

Building.defaultProps = {
  title: 'Disney Concert Hall',
  description:
    'The Walt Disney Concert Hall at 111 South Grand Avenue in downtown Los Angeles, California, is the fourth hall of the Los Angeles Music Center and was designed by Frank Gehry. It was opened on October 24, 2003. Bounded by Hope Street, Grand Avenue, and 1st and 2nd Streets, it seats 2,265 people and serves, among other purposes, as the home of the Los Angeles Philharmonic orchestra and the Los Angeles Master Chorale. The hall is a compromise between a vineyard-style seating configuration, like the Berliner Philharmonie by Hans Scharoun,[1] and a classical shoebox design like the Vienna Musikverein or the Boston Symphony Hall.',
  city: 'Los Angeles, CA',
  designer: 'Frank Gehry',
  address: '111 S Grand Ave, Los Angeles, CA 90012',
  phone: '(323) 850-2000',
  openhours: '9:00 am - 5:00pm',
};
export default Building;
