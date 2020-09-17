import React from 'react';
//import React, { Component } from 'react'
import Wrapper from './installation/Installation1';
import Button from './components/Button';
import circle from './installation/Installation2';
import Text from './poetry/PoetrySvg2';
import AudioPlayer from './music/music2';
//import soundfile from './music/dreams.mp3'; //Bare kommentert ut for at kodens kal fungere


function Mainpage() {

    return (
        
        <Wrapper >
            <div>{circle}</div>
            {/* Bare kommentert ut for at koden skal fungere
            <audio>
                
                <source src={soundfile} type="audio/mpeg"></source>
            </audio> 
            {/*En annen måte å få til audio */}
            <AudioPlayer></AudioPlayer>
            <Text></Text> {/* Dette er for poetrytekst*/}
            <p>heihei</p>
            <Button>knapp</Button>
        </Wrapper>

    )
}



export default Mainpage;