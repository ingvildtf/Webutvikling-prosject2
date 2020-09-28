import React from 'react';
import Button from '../Button';


import EarthInstallation from '../../installation/space/Earth'
import Rocket from '../../installation/space/Rocket'
import SatelliteInstallation from '../../installation/space/Satellite'
import StarsInstallation from '../../installation/space/Stars'
import SunInstallation from '../../installation/space/Sun'
import EasterEarthInstallation from '../../installation/easter/Easter_Earth'
import SatelliteEasterInstallation from '../../installation/easter/Easter_Satellite'
import EasterSunInstallation from '../../installation/easter/Easter_Sun'
import EasterStarRocket from '../../installation/easter/Easter_StarRocket'
import XmasEarthInstallation from '../../installation/xmas/Xmas_Earth'
import XmasRocketInstallation from '../../installation/xmas/Xmas_Rocket'
import SatelliteXmasInstallation from '../../installation/xmas/Xmas_Satellite'
import XmasStarsInstallation from '../../installation/xmas/Xmas_Stars'
import XmasSunInstallation from '../../installation/xmas/Xmas_Sun'
import EasterStarsInstallation from '../../installation/easter/Easter_Stars'


class DisplayFavorite extends React.Component{
  state = {
    favorite: ""
  };

  componentDidMount() {
    this.setState({ username: localStorage.getItem("image") });
  }

  componentWillUnmount() {
    window.localStorage.removeItem("image");
  }

  render() {
    return (
      <>
        <div className="App"></div>
        <h1>Favoritisert installasjon</h1>
        <h3>
          Din favoritt er: {localStorage.getItem("image")}
        </h3>
        <Button onClick={this.componentWillUnmount}> Slett favoritt </Button>
      </>
    );
  }
}


export default DisplayFavorite;
