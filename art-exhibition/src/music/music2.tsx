
import React from 'react';

const music = require('../music/dreams.mp3');

class Music2 extends React.Component {
  render() {
    return (
      <div>
        <audio src={music} controls loop/> 
      </div>
    );
  }
}

export default Music2;