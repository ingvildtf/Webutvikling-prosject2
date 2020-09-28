import React from 'react'
//import Button from '../Button';
import styled from 'styled-components'

import EarthInstallation from '../../images/space/Earth'
import Rocket from '../../images/space/Rocket'
import SatelliteInstallation from '../../images/space/Satellite'
import StarsInstallation from '../../images/space/Stars'
import SunInstallation from '../../images/space/Sun'
import EasterEarthInstallation from '../../images/easter/Easter_Earth'
import SatelliteEasterInstallation from '../../images/easter/Easter_Satellite'
import EasterSunInstallation from '../../images/easter/Easter_Sun'
import EasterStarRocket from '../../images/easter/Easter_StarRocket'
import XmasEarthInstallation from '../../images/xmas/Xmas_Earth'
import XmasRocketInstallation from '../../images/xmas/Xmas_Rocket'
import SatelliteXmasInstallation from '../../images/xmas/Xmas_Satellite'
import XmasStarsInstallation from '../../images/xmas/Xmas_Stars'
import XmasSunInstallation from '../../images/xmas/Xmas_Sun'

import EasterStarsInstallation from '../../images/easter/Easter_Stars'

const Wrapper = styled.div`
  display: grid;
`

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  align-self: center;
`
const images = {
  earth: [EarthInstallation, EasterEarthInstallation, XmasEarthInstallation],
  rocket: [Rocket, EasterStarRocket, XmasRocketInstallation],
  satellite: [
    SatelliteInstallation,
    SatelliteEasterInstallation,
    SatelliteXmasInstallation,
  ],
  stars: [StarsInstallation, EasterStarsInstallation, XmasStarsInstallation],
  sun: [SunInstallation, EasterSunInstallation, XmasSunInstallation],
}
function getFavorite(index: number) {
  switch (index) {
    case 1:
      return images.earth[Number(sessionStorage.getItem('imageTheme'))]
    case 2:
      return images.rocket[Number(sessionStorage.getItem('imageTheme'))]
    case 3:
      return images.satellite[Number(sessionStorage.getItem('imageTheme'))]
    case 4:
      return images.stars[Number(sessionStorage.getItem('imageTheme'))]
    case 5:
      return images.sun[Number(sessionStorage.getItem('imageTheme'))]
    default:
      return null
  }
}
const Image = getFavorite(Number(localStorage.getItem('image')))

function componentWillUnmount() {
  window.localStorage.removeItem('image')
}

class DisplayFavorite extends React.Component {
  /*state = {
    favorite: '',
  }

  componentDidMount() {
    this.setState({ favorite: localStorage.getItem('image') })
  }

  componentWillUnmount() {
    window.localStorage.removeItem('image')
  }*/

  render() {
    return (
      <Wrapper>
        <div className="App"></div>
        <h1>Favoritisert installasjon</h1>
        <div>{Image === null ? 'Du har ingen favoritt enda' : <Image />}</div>
        <div>
          {Image === null ? (
            ''
          ) : (
            <Button onClick={componentWillUnmount}> Slett favoritt </Button>
          )}
        </div>
      </Wrapper>
    )
  }
}

export default DisplayFavorite
