import React, { useState } from 'react'
import styled from 'styled-components'

import EarthInstallation from '../../installation/space/Earth'
import Rocket from '../../installation/space/Rocket'
import SatelliteInstallation from '../../installation/space/Satellite'
import StarsInstallation from '../../installation/space/Stars'
import SunInstallation from '../../installation/space/Sun'
import Music2 from '../../music/music2'
import Button from '../Button'
import EasterEarthInstallation from '../../installation/easter/Easter_Earth'
import SatelliteEasterInstallation from '../../installation/easter/Easter_Satellite'
import EasterSunInstallation from '../../installation/easter/Easter_Sun'
import EasterStarRocket from '../../installation/easter/Easter_StarRocket'
import XmasEarthInstallation from '../../installation/xmas/Xmas_Earth'
import XmasRocketInstallation from '../../installation/xmas/Xmas_Rocket'
import SatelliteXmasInstallation from '../../installation/xmas/Xmas_Satellite'
import XmasStarsInstallation from '../../installation/xmas/Xmas_Stars'
import XmasSunInstallation from '../../installation/xmas/Xmas_Sun'

import DisplayPoem from '../../DisplayPoem'
import EasterStarsInstallation from '../../installation/easter/Easter_Stars'

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

const Something = styled.div`
  padding: 20px;
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

function Installations() {
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

  //lagrer hvilket tema man har huket av i session storage
  const index =
    sessionStorage.getItem('theme') === null
      ? 0
      : Number(sessionStorage.getItem('theme'))

  const [theme, setTheme] = useState(index)
  sessionStorage.setItem('theme', String(theme))

  //liste som inneholder informasjon om installasjonene, her kan du eventuelt endre imgtitle til en verdi, isteden for hvert bilde og da kan du endre denne verdien ved å bruke state og switch
  const installations = [
    {
      id: 1,
      title: 'Earth',
      imgtitle: images.earth[theme],
      music: Music2,
      poem: 'https://poetrydb.org/title,linecount/earth;12/lines',
    },
    {
      id: 2,
      title: 'Rocket',
      imgtitle: images.rocket[theme],
      music: Music2,
      poem: 'https://poetrydb.org/lines,linecount/moon;12/lines',
    },
    {
      id: 3,
      title: 'Satellite',
      imgtitle: images.satellite[theme],
      music: Music2,
      poem: 'https://poetrydb.org/lines,linecount/sky;12/lines',
    },
    {
      id: 4,
      title: 'Stars',
      imgtitle: images.stars[theme],
      music: Music2,
      poem: 'https://poetrydb.org/title,linecount/stars;12/lines',
    },
    {
      id: 5,
      title: 'Sun',
      imgtitle: images.sun[theme],
      music: Music2,
      poem: 'https://poetrydb.org/title,linecount/sun;12/lines',
    },
  ]
  //Setter state til clik, her kan man også bruke tekst verdier
  const [click, setClick] = useState(1)
  //Funksjon for å toggle mellom bildene, ved å trykke på next/back button, vet å oppdatere staten til click
  const handleNextClick = () => {
    if (click < installations.length) {
      setClick(click + 1)
    } else {
      setClick(1)
    }
  }
  const handleBackClick = () => {
    if (click > 1) {
      setClick(click - 1)
    } else {
      setClick(installations.length)
    }
  }

  return (
    <Wrapper>
      <Something>
        {/*går gjennom listen for å hente elementet som har samme id som clik  */}
        {installations.map(index =>
          index.id === click ? <index.music /> : null
        )}
      </Something>
      <Title>
        {installations.map(index => (index.id === click ? index.title : null))}
      </Title>
      <Text>
        {installations.map(index =>
          index.id === click ? (
            <DisplayPoem poemTheme={index.poem as string} />
          ) : null
        )}
        {/*<Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <SVG>
        {installations.map(index =>
          index.id === click ? <index.imgtitle /> : null
        )}
      </SVG>
      <Navigation>
        {/**knapper for next og tilbake */}
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleNextClick}>Next</Button>
        <Button onClick={() => setTheme(0)}>Space</Button>
        <Button onClick={() => setTheme(1)}>Easter</Button>
        <Button onClick={() => setTheme(2)}>Xmas</Button>
      </Navigation>
    </Wrapper>
  )
}

export default Installations
