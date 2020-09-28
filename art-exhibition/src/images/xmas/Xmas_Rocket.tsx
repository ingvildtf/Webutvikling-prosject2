import React from 'react'
import { ReactComponent as XmasRocket } from '../xmas/xmas_rocket.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const move = keyframes`

fom{
    transform: translateX(10%)
}

to{
    transform: translateX(30%)
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

const StyledXmasRocket = styled(XmasRocket)`
  .rocket {
    animation: ${move} 1s ease-in-out infinite alternate;
  }
  .scarf {
    animation: ${move} 1s ease-in-out infinite alternate;
  }

  .star {
    animation: ${pulse} infinite 4s linear;
  }
`

class XmasRocketInstallation extends React.Component {
  render() {
    return (
      <div>
        <StyledXmasRocket />
      </div>
    )
  }
}

export default XmasRocketInstallation
