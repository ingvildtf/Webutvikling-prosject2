
import React from 'react';


class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="./music/dreams.mp3" controls autoPlay loop/>
      </div>
    );
  }
}

export default AudioPlayer;