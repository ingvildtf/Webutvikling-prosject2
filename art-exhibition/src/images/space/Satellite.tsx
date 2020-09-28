import React from 'react'
import { ReactComponent as Satellite } from '../space/satellite.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform: rotate(0deg);
    
  }

  to {
    transform: rotate(360deg);
  }
`

const transparent1 = keyframes`
    20%   { 
        opacity: 0; 
    }
    90% { 
        opacity: 1; 
    }
`

const transparent2 = keyframes`
    10%   { 
        opacity: 0; 
    }
    80% { 
        opacity: 1; 
    }
`

const transparent3 = keyframes`
    0%   { 
        opacity: 0; 
    }
    70% { 
        opacity: 1; 
    }
`

const StyledSatellite = styled(Satellite)`
  .sat {
    animation: ${rotate} infinite 9s linear;
    transform-origin: center;
    transform-box: fill-box;
  }

  .signal1 {
    animation: ${transparent1} infinite 4s;
  }
  .signal2 {
    animation: ${transparent2} infinite 4s;
  }

  .signal3 {
    animation: ${transparent3} infinite 4s;
  }
`

class SatelliteInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledSatellite />
      </div>
    )
  }
}

export default SatelliteInstallation
