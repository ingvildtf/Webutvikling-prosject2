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
  display: flex;
  flex-direction: column;
  background: #0b1226;
  padding-bottom: 20px;
  max-width: 100%;
  height: 120vh;
  @media screen and (max-width: 1050px) {
    max-height: 100%;
  }
  @media screen and (min-width: 600px) {
    height: auto;
    min-height: 100vh;
  }
`

const Title = styled.h1`
  align-self: center;
  padding-left: 5%;
  color: white;
`
const SVG = styled.div`
  padding: 2%;
  max-width: 60%;
  max-height: 100%;
  color: white;
  @media screen and (max-width: 1050px) {
    max-width: 90vw;
  }
`

const Delete = styled.div`
  align-self: center;
`

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
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
  render() {
    return (
      <Wrapper>
        <Title>Favoritisert installasjon</Title>
        <SVG>{Image === null ? 'Du har ingen favoritt enda' : <Image />}</SVG>
        <Delete>
          {Image === null ? (
            ''
          ) : (
            <Button onClick={componentWillUnmount}> Slett favoritt </Button>
          )}
        </Delete>
      </Wrapper>
    )
  }
}

export default DisplayFavorite
