import React, { useState } from 'react'
import styled from 'styled-components'

import EarthInstallation from '../../images/space/Earth'
import Rocket from '../../images/space/Rocket'
import SatelliteInstallation from '../../images/space/Satellite'
import StarsInstallation from '../../images/space/Stars'
import SunInstallation from '../../images/space/Sun'
import Music2 from '../../music/music2'
import EasterEarthInstallation from '../../images/easter/Easter_Earth'
import SatelliteEasterInstallation from '../../images/easter/Easter_Satellite'
import EasterSunInstallation from '../../images/easter/Easter_Sun'
import EasterStarRocket from '../../images/easter/Easter_StarRocket'
import XmasEarthInstallation from '../../images/xmas/Xmas_Earth'
import XmasRocketInstallation from '../../images/xmas/Xmas_Rocket'
import SatelliteXmasInstallation from '../../images/xmas/Xmas_Satellite'
import XmasStarsInstallation from '../../images/xmas/Xmas_Stars'
import XmasSunInstallation from '../../images/xmas/Xmas_Sun'

import DisplayPoem from '../../DisplayPoem'
import EasterStarsInstallation from '../../images/easter/Easter_Stars'
import { ThemeContext, themes } from '../../DisplayTheme'

interface ThemeProps {
  style?: React.CSSProperties
}

export const Wrapper = styled.div<ThemeProps>`
  padding: 20px 5% 40px 5%;
  display: grid;
  background: #242424;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 10px;
  grid-template-areas:
    'title   title'
    'svg     poem'
    'buttons sound';

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
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
  font-size: min(max(20px, 6vw), 40px);
  grid-area: title;
  max-width: 100%;
  align-self: center;
  justify-self: center;
`
const Text = styled.div<ThemeProps>`
  padding: 20px;
  color: blue;
  grid-area: poem;
  text-align: center;
`

const Sound = styled.div`
  padding: 20px;
  grid-area: sound;
  max-width: 90%;
  justify-self: center;
`
const SVG = styled.div`
  grid-area: svg;
  max-width: 100%;
  max-height: 100vh;
`

const Navigation = styled.div<ThemeProps>`
  grid-area: buttons;
  display: flex;
  justify-content: space-between;
`
const Button = styled.button<ThemeProps>`
  padding: 10px;
  border-radius: 4px;
  align-self: center;
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
      music: Music2,
      poem: 'https://poetrydb.org/title,linecount/earth;12/lines',
    },
    {
      id: 2,
      title: 'Rocket',
      imgtitle: images.rocket[imageTheme],
      music: Music2,
      poem: 'https://poetrydb.org/lines,linecount/moon;12/lines',
    },
    {
      id: 3,
      title: 'Satellite',
      imgtitle: images.satellite[imageTheme],
      music: Music2,
      poem: 'https://poetrydb.org/lines,linecount/sky;12/lines',
    },
    {
      id: 4,
      title: 'Stars',
      imgtitle: images.stars[imageTheme],
      music: Music2,
      poem: 'https://poetrydb.org/title,linecount/stars;12/lines',
    },
    {
      id: 5,
      title: 'Sun',
      imgtitle: images.sun[imageTheme],
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
          index.id === click ? <index.imgtitle /> : null
        )}
      </SVG>
      <Text
        style={{ background: theme.backgroundColor, color: theme.textColor }}
      >
        {installations.map(index =>
          index.id === click ? (
            <DisplayPoem poemTheme={index.poem as string} />
          ) : null
        )}
        {/*<Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <Sound>
        {/*går gjennom listen for å hente elementet som har samme id som clik  */}
        {installations.map(index =>
          index.id === click ? <index.music /> : null
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
