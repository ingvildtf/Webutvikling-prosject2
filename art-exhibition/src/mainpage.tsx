//import React from 'react';
import React, { Component } from 'react'
import Wrapper from './installation/Installation1';
import Button from './components/Button';
import circle from './installation/Installation2';
//import Text from './poetry/PoetrySvg2';
import AudioPlayer from './music/music2';
import soundfile from './music/dreams.mp3';


function Mainpage() {

    return (
        
        <Wrapper >
            <div>{circle}</div>
            
            <audio>
                
                <source src={soundfile} type="audio/mpeg"></source>
            </audio>
            {/*En annen måte å få til audio */}
            <AudioPlayer></AudioPlayer>
            
            <p>heihei</p>
            <Button>knapp</Button>
        </Wrapper>

    )
}



export default Mainpage;