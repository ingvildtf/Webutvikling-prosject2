import React from 'react'
import { ReactComponent as Easter_Sun } from '../easter/easter_sun.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

/*https://medium.com/@dimaiv/animating-complex-svg-in-react-c555630f15cd */

const rotate = keyframes`
from {
    transform: rotate(0deg);
    
  }

  to {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
0% {
  fill:#FCF4A3;
  stroke-width:10px
}
50% {
  fill:	#F9A602;
  stroke-width:2px
}
100%{
  fill:#FADA5E;
  stroke-width:10px
}
`

const StyledEasterSun = styled(Easter_Sun)`
  #orange {
    animation: ${rotate} infinite 20s linear;
    transform-origin: center;
    transform-box: fill-box;
  }

  #yellow {
    animation: ${pulse} infinite 4s linear;
  }
`

class EasterSunInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledEasterSun />
      </div>
    )
  }
}

export default EasterSunInstallation
