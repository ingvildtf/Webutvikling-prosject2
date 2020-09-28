
import React from 'react';

const satellite = require('../music/satellite.mp3');
//https://www.youtube.com/watch?v=_YFXdDppLw0

class SatelliteMusic extends React.Component {
  render() {
    return (
      <div>
        <audio src={satellite} controls loop/> 
      </div>
    );
  }
}

export default SatelliteMusic;