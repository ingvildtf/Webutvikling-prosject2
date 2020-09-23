import React from 'react';
import Wrapper from './installation/Installation1';
import Button from './components/Button';
import Poetry from './poetry/Poetry';
import Music2 from './music/music2';

//Imports of SVG element tags
import Rocket from './installation/space/Rocket';
import SatelliteInstallation from './installation/space/Satellite';
import XmasRocketInstallation  from './installation/xmas/Xmas_Rocket';
import SatelliteEasterInstallation from './installation/easter/Easter_Satellite';
import SatelliteXmasInstallation from './installation/xmas/Xmas_Satellite';
import EasterStarRocket from './installation/easter/Easter_StarRocket';
import SunInstallation from './installation/space/Sun'
import XmasSunInstallation from './installation/xmas/Xmas_Sun';
import EasterSunInstallation from './installation/easter/Easter_Sun';
import EarthInstallation from './installation/space/Earth';
import XmasEarthInstallation from './installation/xmas/Xmas_Earth';
import EasterEarthInstallation from './installation/easter/Easter_Earth';
import StarsInstallation from './installation/space/Stars';
import EasterStarsInstallation from './installation/easter/Easter_Stars';
import XmasStarsInstallation from './installation/xmas/Xmas_Stars';

function Mainpage() {

    return (
        
        <Wrapper >
            
            <Music2></Music2>
            <Poetry></Poetry> {/* Poetry example*/}
            
            {/* Star installation*/}
            <XmasStarsInstallation></XmasStarsInstallation>
            <EasterStarsInstallation></EasterStarsInstallation>
            <StarsInstallation></StarsInstallation>
            {/* Earth installation*/}
            <EasterEarthInstallation></EasterEarthInstallation>
            <XmasEarthInstallation></XmasEarthInstallation>
            <EarthInstallation></EarthInstallation>
            {/* Sun installation*/}
            <SunInstallation></SunInstallation>
            <XmasSunInstallation></XmasSunInstallation>
            <EasterSunInstallation></EasterSunInstallation>
            {/* Rocket installation*/}
            <Rocket></Rocket>
            <XmasRocketInstallation></XmasRocketInstallation>
            <EasterStarRocket></EasterStarRocket>
            {/* Satellite installation*/}
            <SatelliteInstallation></SatelliteInstallation>
            <SatelliteEasterInstallation></SatelliteEasterInstallation>
            <SatelliteXmasInstallation></SatelliteXmasInstallation>
            
        </Wrapper>

    )
}



export default Mainpage;