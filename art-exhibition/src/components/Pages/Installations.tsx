import React from 'react'
import styled from 'styled-components'
import EasterStarsInstallation from '../../installation/easter/Easter_Stars'
import StarsInstallation from '../../installation/space/Stars'
import XmasStarsInstallation from '../../installation/xmas/Xmas_Stars'
import Music2 from '../../music/music2'
import Poetry from '../../poetry/Poetry'

export const Wrapper = styled.div`
  padding: 20px 5% 40px 5%;
  display: grid;
  background: #242424;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'title title'
    'svg text'
    'potato potato';

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr 1fr 8fr;
    grid-template-areas:
      'title'
      'svg'
      'potato'
      'text';
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
const Text = styled.p`
  padding: 20px;
  color: blue;
  grid-area: text;
`

const Soething = styled.div`
  padding: 20px;
  background-color: red;
  grid-area: potato;
  max-width: 90%;
`
const SVG = styled.div`
  margin: 0px;
  grid-area: svg;
  align-self: center;
  justify-self: center;
  max-width: 100%;
  max-height: 100%;
`

function Installations() {
  return (
    <Wrapper>
      <Soething>
        <Music2></Music2>
      </Soething>
      <Title>SVG</Title>
      <Text>
        <Poetry></Poetry> {/* Poetry example*/}
      </Text>
      <SVG>
        {/* Star installation*/}
        <XmasStarsInstallation></XmasStarsInstallation>
        {/* <EasterStarsInstallation></EasterStarsInstallation>
        <StarsInstallation></StarsInstallation>*/}
      </SVG>
    </Wrapper>
  )
}

export default Installations
