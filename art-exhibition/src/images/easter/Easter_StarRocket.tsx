import React from 'react'
import { ReactComponent as Easter_StarRocket } from '../easter/easter_starrocket.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

/*https://medium.com/@dimaiv/animating-complex-svg-in-react-c555630f15cd */

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

const StyledEasterStarRocket = styled(Easter_StarRocket)`
  .rocket {
    animation: ${move} 1s ease-in-out infinite alternate;
  }

  .star {
    animation: ${pulse} infinite 4s linear;
  }
`

class EasterStarRocket extends React.Component {
  render() {
    return (
      <div>
        <StyledEasterStarRocket />
      </div>
    )
  }
}

export default EasterStarRocket
