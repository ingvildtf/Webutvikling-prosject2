import React from 'react';

const sun= require('../music/sun.mp3');
//https://www.youtube.com/watch?v=ZZQcLJjpdrI

class SunMusic extends React.Component {
  render() {
    return (
      <div>
        <audio src={sun} controls loop/> 
      </div>
    );
  }
}

export default SunMusic;