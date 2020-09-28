import React from 'react';

const stars = require('../music/stars.mp3');
//https://www.youtube.com/watch?v=Yu62II1h43E

class StarsMusic extends React.Component {
  render() {
    return (
      <div>
        <audio src={stars} controls loop/> 
      </div>
    );
  }
}

export default StarsMusic;