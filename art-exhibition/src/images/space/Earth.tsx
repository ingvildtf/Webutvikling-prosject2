import React from 'react'
import { ReactComponent as Earth } from '../space/earth.svg'
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

const StyledEarth = styled(Earth)`
  .earth {
    animation: ${rotate} infinite 5s linear;
    display: block;
    margin: auto;
  }
  #orange {
    animation: ${pulse} infinite 4s linear;
  }
`

class EarthInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledEarth />
      </div>
    )
  }
}

<<<<<<< HEAD
export default EarthInstallation; 

=======
export default EarthInstallation
>>>>>>> develop
