import React, { useState } from 'react';
function Comments() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    this.setText('');
  };

  // needs to show all comments
  return (
    <div>
      <div className='comments'>
        <h3>Comments:</h3>
      </div>
      <div className='addcomments'>
        <form className='form' onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Add Comments Here'
            value={text}
            onChange={onChange}
          />
          <input type='submit' value='Add' className='btn btn-dark btn-block' />
        </form>
      </div>
    </div>
  );
}
export default Comments;
