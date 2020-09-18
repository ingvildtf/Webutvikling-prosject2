import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './installation/Installation1';
import Button from './components/Button';
/*import JumpingJackSong from '././media/JumpingJackSong.mp3';*/

window.localStorage.setItem('dude', 'Oliver');
window.localStorage.setItem('girl', 'Una');
let val = localStorage.getItem('dude');
let id = localStorage.getItem('girl');
console.log(val);
console.log(id);

function Mainpage() {
    return (
        <Wrapper >
            <p>heihei</p>
            <Button>knapp</Button>
            {/*<div>
            <audio controls preload="auto">
                <source src={JumpingJackSong} type="audio/mp3"/>
                Your browser does not support the audio element.
    </audio>
            </div>*/}
           
        </Wrapper>

    )
}

export default Mainpage;