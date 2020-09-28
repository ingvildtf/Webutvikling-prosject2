import React from 'react'
import { ReactComponent as Easter_Earth } from '../easter/easter_earth.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from { 
      
    transform: rotate(0deg) translateX(300px) rotate(0deg); }
    to   { 
        transform: rotate(360deg) translateX(300px) rotate(-360deg); 
        }
`

const pulse = keyframes`
0% {
  fill:#E8962C;
  stroke-width:10px
}
50% {
  fill:#EEB56B;
  stroke-width:2px
}
100%{
  fill:#EAA041;
  stroke-width:10px
}
`

const move = keyframes`

fom{
    transform: translateY(0%)
}

to{
    transform: translateY(30%)
}
`

const StyledEasterEarth = styled(Easter_Earth)`
  .earth {
    animation: ${rotate} infinite 5s linear;
    display: block;
    margin: auto;
  }
  #orange {
    animation: ${pulse} infinite 4s linear;
  }
  .rabbit {
    animation: ${move} 1s ease-in-out infinite alternate;
  }
`

class EasterEarthInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledEasterEarth />
      </div>
    )
  }
}

export default EasterEarthInstallation
