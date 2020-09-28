import React from 'react';

const rocket = require('../music/rocket.mp3');
//https://www.youtube.com/watch?v=MZwsO6H_FYo

class RocketMusic extends React.Component {
  render() {
    return (
      <div>
        <audio src={rocket} controls loop/> 
      </div>
    );
  }
}

export default RocketMusic;