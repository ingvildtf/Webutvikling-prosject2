import React, { useState } from 'react'
import styled from 'styled-components'

//Import of Installations
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

//Import of poem
import DisplayPoem from '../../DisplayPoem'

//Import of music
import SunMusic from '../../music/SunMusic'
import SatelliteMusic from '../../music/SatelliteMusic'
import StarsMusic from '../../music/StarsMusic'
import RocketMusic from '../../music/RocketMusic'
import EarthMusic from '../../music/EarthMusic'

import { ThemeContext, themes } from '../../DisplayTheme'

interface ThemeProps {
  style?: React.CSSProperties
}

export const Wrapper = styled.div<ThemeProps>`
  margin: 0;
  padding: 0 5% 0 5%;
  display: grid;
  background: #242424;
  grid-template-rows: min-content min-content auto;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  grid-gap: 10px;
  grid-template-areas:
    'title   title'
    'svg     poem'
    'buttons sound';

  @media screen and (max-width: 1050px) {
    grid-template-rows: repeat(5, min-content);
    grid-template-columns: 1fr;
    height: auto;
    overflow: auto;
    grid-template-areas:
      'title'
      'svg'
      'poem'
      'sound'
      'buttons';
  }
`

const Title = styled.h3<ThemeProps>`
  color: white;
  font-size: min(max(30px, 6vw), 40px);
  grid-area: title;
  margin-bottom: 50px;
  align-self: center;
  justify-self: center;
`
const Text = styled.div<ThemeProps>`
  padding: 20px;
  font-size: min(max(12px, 4vw), 20px);
  color: blue;
  grid-area: poem;
  text-align: center;
`

const Sound = styled.div`
  padding: 20px;
  grid-area: sound;
  justify-self: center;
  align-self: center;
`
const SVG = styled.div`
  grid-area: svg;
  max-height: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
`

const Navigation = styled.div<ThemeProps>`
  grid-area: buttons;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-content: center;
  margin: 20px;
`
const Button = styled.button<ThemeProps>`
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

function Installations() {
  //lagrer hvilket tema man har huket av i session storage
  const index =
    sessionStorage.getItem('imageTheme') === null
      ? 0
      : Number(sessionStorage.getItem('imageTheme'))

  const [imageTheme, setImageTheme] = useState(index)
  sessionStorage.setItem('imageTheme', String(imageTheme))

  //liste som inneholder informasjon om installasjonene, her kan du eventuelt endre imgtitle til en verdi, isteden for hvert bilde og da kan du endre denne verdien ved å bruke state og switch
  const installations = [
    {
      id: 1,
      title: 'Earth',
      imgtitle: images.earth[imageTheme],
      music: EarthMusic,
      poem: 'https://poetrydb.org/title,linecount/earth;12/lines',
    },
    {
      id: 2,
      title: 'Rocket',
      imgtitle: images.rocket[imageTheme],
      music: RocketMusic,
      poem: 'https://poetrydb.org/lines,linecount/moon;12/lines',
    },
    {
      id: 3,
      title: 'Satellite',
      imgtitle: images.satellite[imageTheme],
      music: SatelliteMusic,
      poem: 'https://poetrydb.org/lines,linecount/sky;12/lines',
    },
    {
      id: 4,
      title: 'Stars',
      imgtitle: images.stars[imageTheme],
      music: StarsMusic,
      poem: 'https://poetrydb.org/title,linecount/stars;12/lines',
    },
    {
      id: 5,
      title: 'Sun',
      imgtitle: images.sun[imageTheme],
      music: SunMusic,
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

  const useTheme = () => React.useContext(ThemeContext)
  const { theme, setTheme } = useTheme()!

  function spaceFunction() {
    setTheme(themes.space)
    setImageTheme(0)
  }

  function easterFunction() {
    setTheme(themes.easter)
    setImageTheme(1)
  }

  function christmasFunction() {
    setTheme(themes.christmas)
    setImageTheme(2)
  }

  function updateFavorite(number: number) {
    localStorage.setItem('image', String(number))
  }

  return (
    <Wrapper
      style={{ background: theme.backgroundColor, color: theme.textColor }}
    >
      <Title
        style={{ background: theme.backgroundColor, color: theme.textColor }}
      >
        {installations.map(index => (index.id === click ? index.title : null))}
      </Title>
      <SVG>
        {installations.map(index =>
          index.id === click ? <index.imgtitle key={index.id} /> : null
        )}
      </SVG>
      <Text
        style={{ background: theme.backgroundColor, color: theme.textColor }}
      >
        {installations.map(index =>
          index.id === click ? (
            <DisplayPoem poemTheme={index.poem as string} key={index.id} />
          ) : null
        )}
        {/*<Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <Sound>
        {/*går gjennom listen for å hente elementet som har samme id som clik  */}
        {installations.map(index =>
          index.id === click ? <index.music key={index.id} /> : null
        )}
      </Sound>
      <Navigation
        style={{ background: theme.backgroundColor, color: theme.textColor }}
      >
        {/**knapper for next og tilbake */}
        <Button
          style={{ background: theme.buttonColor, color: theme.textColor }}
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button
          style={{ background: theme.buttonColor, color: theme.textColor }}
          onClick={handleNextClick}
        >
          Next
        </Button>
        <Button
          onClick={() => updateFavorite(installations[click - 1].id)}
          style={{ background: theme.buttonColor, color: theme.textColor }}
        >
          Favoritt
        </Button>
        <Button
          style={{ background: theme.buttonColor, color: theme.textColor }}
          onClick={spaceFunction}
        >
          Space
        </Button>
        <Button
          style={{ background: theme.buttonColor, color: theme.textColor }}
          onClick={easterFunction}
        >
          Easter
        </Button>
        <Button
          style={{ background: theme.buttonColor, color: theme.textColor }}
          onClick={christmasFunction}
        >
          Xmas
        </Button>
      </Navigation>
    </Wrapper>
  )
}

export default Installations
