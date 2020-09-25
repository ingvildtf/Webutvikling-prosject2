import React, { useState } from 'react'
import styled from 'styled-components'
import EasterStarsInstallation from '../../installation/easter/Easter_Stars'
import Music2 from '../../music/music2'
import Button from '../Button'
import Poetry from '../../poetry/Poetry'


type theme = 'space' | 'easter' | 'xmas';
/*
const [theme, setTheme] = useState('space');
*/
/*

const themes = [
    {
        id: 1,
        title: 'Space',
        imgtitle: SpaceInstallation,
        music: Music2,
        poem: Poetry,
        backgroundColor: "#145051",
    },
    { 
        id: 2,
        title: 'Easter', 
        imgtitle: EasterStarsInstallation, 
        music: Music2, 
        poem: Poetry,
        backgroundColor: "#FEFFA2",
    {,
        id: 3,
        title: 'Xmas',
        imgtitle: XmasSatelliteInstallation,
        music: Music2,
        poem: Poetry,
        backgroundColor: "#B3000C",
    },

]*/




function Settings() {
    const [theme, setTheme] = useState('space');

   const changeTheme = ({theme} ) => {
       switch(theme){
            case 'space':
              setTheme('space');
            case 'easter':
                setTheme('easter');
            case 'xmas':
                setTheme('xmas');
            default:
              return null; 
       }
        
    }
    
    /*
    const handleThemeSelector = () => {

    const changeTheme = (theme: any) => {
        console.log(theme);
    }
    */

    return (
        <div>
        <Button onClick={() => changeTheme('space')}>Space</Button>
        <Button onClick={() => changeTheme('easter')}>Easter</Button>
        <Button onClick={() => changeTheme('xmas')}>Christmas</Button>
        </div>
    )
}

export default Settings;