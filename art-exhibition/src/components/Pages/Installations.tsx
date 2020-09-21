import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
padding: 20px 100px 0 100px;
  display: grid;
  background: #242424;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-template-areas:
    'title title title'
    'svg text text'
    'svg potato potato';
`

const Title = styled.h3`
  color: white;
  grid-area: title;
  align-self: center;
  justify-self: center;
`
const Text = styled.p`
    color: blue;
    grid-area: text;
`

const Soething = styled.div`
  background-color: red;
  grid-area: potato;
`
const SVG = styled.svg`
  grid-area: svg;

  .midCircle {
    fill: #024059;
  }
  .rect1 {
    fill: #89d6b9;
  }

  .rect2 {
    fill: #1d261b;
  }
  .rect3 {
    fill: #f5c775;
  }
  .rect4 {
    fill: #f5a494;
  }
  .rect5 {
    fill: #595959;
    transform-origin: 72.73% 62%;
  }

  .circle {
    fill: #a2d5ac;
  }

  .circle:hover {
    transform: scale(1.35);
  }

  .circle {
    transition: all 2s;
    transform-origin: 100% 0%;
  }

  .rect4:hover {
    fill: #8090a6;
  }
`

function Installations() {
  return (
    <Wrapper>
      <Soething>Alex</Soething>
      <Title>SVG</Title>
      <Text>Her kommer poetry </Text>
      <SVG
        className="image"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 550 650"
        width="550"
        height="650"
      >
        <rect className="rect5" x="350" y="250" height="400" width="100"></rect>
        <rect className="rect4" x="50" y="200" height="200" width="350"></rect>
        <circle className="midCircle" cx="275" cy="350" r="70"></circle>
        <polygon
          className="rect1"
          points="100, 300 400, 500 380, 550 100, 360 100, 360"
        ></polygon>
        <polygon
          className="rect2"
          points="100, 360 380, 550 361, 600 100, 600 100, 360"
        ></polygon>
        <rect className="rect3" x="80" y="0" width="2%" height="650"></rect>
        <circle className="circle" cx="450" cy="60" r="150"></circle>
      </SVG>
    </Wrapper>
  )
}

export default Installations
