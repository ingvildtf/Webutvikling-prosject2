import React, { useState } from 'react'
import styled from 'styled-components'
import EarthInstallation from '../../installation/space/Earth'
import Rocket from '../../installation/space/Rocket'
import SatelliteInstallation from '../../installation/space/Satellite'
import StarsInstallation from '../../installation/space/Stars'
import SunInstallation from '../../installation/space/Sun'
//import StarsInstallation from '../../installation/space/Stars'
//import XmasStarsInstallation from '../../installation/xmas/Xmas_Stars'
import Music2 from '../../music/music2'
import Button from '../Button'
import DisplayPoem from '../../DisplayPoem'

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

//liste som inneholder informasjon om installasjonene, her kan du eventuelt endre imgtitle til en verdi, isteden for hvert bilde og da kan du endre denne verdien ved å bruke state og switch
const images = [
  {
    id: 1,
    title: 'Earth',
    imgtitle: EarthInstallation,
    music: Music2,
    poem: 'https://poetrydb.org/title,linecount/earth;12/lines',
  },
  {
    id: 2,
    title: 'Rocket',
    imgtitle: Rocket,
    music: Music2,
    poem: 'https://poetrydb.org/lines,linecount/moon;12/lines',
  },
  {
    id: 3,
    title: 'Satellite',
    imgtitle: SatelliteInstallation,
    music: Music2,
    poem: 'https://poetrydb.org/lines,linecount/sky;12/lines',
  },
  {
    id: 4,
    title: 'Stars',
    imgtitle: StarsInstallation,
    music: Music2,
    poem: 'https://poetrydb.org/title,linecount/stars;12/lines',
  },
  {
    id: 5,
    title: 'Sun',
    imgtitle: SunInstallation,
    music: Music2,
    poem: 'https://poetrydb.org/title,linecount/sun;12/lines',
  },
]

function Installations() {
  //Setter state til clik, her kan man også bruke tekst verdier
  const [click, setClick] = useState(1)
  //Funksjon for å toggle mellom bildene, ved å trykke på next/back button, vet å oppdatere staten til click
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
        {/*går gjennom listen for å hente elementet som har samme id som clik  */}
        {images.map(index => (index.id === click ? <index.music /> : null))}
      </Soething>
      <Title>
        {images.map(index => (index.id === click ? index.title : null))}
      </Title>
      <Text>
        {images.map(index =>
          index.id === click ? (
            <DisplayPoem poemTheme={index.poem as string} />
          ) : null
        )}
        {/*<Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <SVG>
        {images.map(index => (index.id === click ? <index.imgtitle /> : null))}
      </SVG>
      <Navigation>
        {/**knapper for next og tilbake */}
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </Navigation>
    </Wrapper>
  )
}

export default Installations
