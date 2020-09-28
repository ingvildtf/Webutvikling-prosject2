import React from 'react'
import { ReactComponent as Easter_Stars } from '../easter/easter_stars.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const move = keyframes`
    0%{ 
        transform: translate(0%,0%); 
    }
    100%  { 
        transform: translate(100%,0%); 
    }
`

const transparent1 = keyframes`
    20%   { 
        opacity: 1; 
    }
    90% { 
        opacity: 0.7; 
    }
`

const transparent2 = keyframes`
    10%   { 
        opacity: 1; 
    }
    80% { 
        opacity: 0.7; 
    }
`

const transparent3 = keyframes`
    0%   { 
        opacity: 1; 
    }
    70% { 
        opacity: 0.7; 
    }
`

const StyledEasterStars = styled(Easter_Stars)`
  .rabbit {
    animation: ${move} infinite 5s linear;
  }

  #s1 {
    animation: ${transparent1} infinite 3s;
  }
  #s2 {
    animation: ${transparent2} infinite 3s;
  }
  #s3 {
    animation: ${transparent3} infinite 3s;
  }

  #s4 {
    animation: ${transparent1} infinite 3s;
  }
  #s5 {
    animation: ${transparent2} infinite 3s;
  }
  #s6 {
    animation: ${transparent3} infinite 3s;
  }

  #s7 {
    animation: ${transparent1} infinite 3s;
  }
  #s8 {
    animation: ${transparent2} infinite 3s;
  }
  #s9 {
    animation: ${transparent3} infinite 3s;
  }
`

class EasterStarsInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledEasterStars />
      </div>
    )
  }
}

export default EasterStarsInstallation
