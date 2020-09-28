import React from 'react';

const earth = require('../music/earth.mp3');
//https://www.youtube.com/watch?v=JEzq1I94gZA&t=25s

class EarthMusic extends React.Component {
  render() {
    return (
      <div>
        <audio src={earth} controls loop/> 
      </div>
    );
  }
}

export default EarthMusic;