import React, { useState } from 'react'
import styled from 'styled-components'
import { isConstructorDeclaration } from 'typescript'
import EasterStarsInstallation from '../../installation/easter/Easter_Stars'
import EarthInstallation from '../../installation/space/Earth'
import Rocket from '../../installation/space/Rocket'
import SatelliteInstallation from '../../installation/space/Satellite'
import StarsInstallation from '../../installation/space/Stars'
import SunInstallation from '../../installation/space/Sun'
//import StarsInstallation from '../../installation/space/Stars'
//import XmasStarsInstallation from '../../installation/xmas/Xmas_Stars'
import Music2 from '../../music/music2'
import Button from '../Button'
//import Poetry from '../../poetry/Poetry'

export const Wrapper = styled.div`
  padding: 20px 5% 40px 5%;
  display: grid;
  background: #242424;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'title title'
    'svg poem'
    'buttons potato';

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr 1fr 1fr 8fr;
    grid-template-areas:
      'title'
      'svg'
      'buttons'
      'potato'
      'poem';
  }
`

const Title = styled.h3`
  color: white;
  font-size: min(max(20px, 6vw), 40px);
  grid-area: title;
  max-width: 100%;
  align-self: center;
  justify-self: center;
`
const Text = styled.div`
  padding: 20px;
  color: blue;
  grid-area: poem;
`

const Soething = styled.div`
  padding: 20px;
  background-color: red;
  grid-area: potato;
  max-width: 90%;
`
const SVG = styled.div`
  grid-area: svg;
  max-width: 100%;
  max-height: 100%;
`

const Navigation = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
`

const images = [
  { id: 1, imgtitle: EarthInstallation },
  { id: 2, imgtitle: Rocket },
  { id: 3, imgtitle: SatelliteInstallation },
  { id: 4, imgtitle: StarsInstallation },
  { id: 5, imgtitle: SunInstallation },
]

function Installations() {
  const [click, setClick] = useState(1)
  //Funksjon for å toggle mellom bildene, ved å trykke på next button
  const handleNextClick = () => {
    if (click < images.length) {
      setClick(click + 1)
    } else {
      setClick(1)
    }
  }
  const handleBackClick = () => {
    if (click > 1) {
      setClick(click - 1)
    } else {
      setClick(images.length)
    }
  }
  return (
    <Wrapper>
      <Soething>
        <Music2></Music2>
      </Soething>
      <Title>SVG</Title>
      <Text>
        Her kommer poems
        {/*<Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <SVG>
        {images.map(index => (index.id === click ? <index.imgtitle /> : null))}
        {/* Star installation*
        <EasterStarsInstallation />*/}
        {/* <EasterStarsInstallation></EasterStarsInstallation>
        <StarsInstallation></StarsInstallation>*/}
      </SVG>
      <Navigation>
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </Navigation>
    </Wrapper>
  )
}

export default Installations
