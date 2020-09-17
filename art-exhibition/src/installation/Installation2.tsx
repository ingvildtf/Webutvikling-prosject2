import React from 'react';
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
`;

const pulse = keyframes`
0% {
  fill:#FFC0CB;
  stroke-width:10px
}
50% {
  fill:	#DB7093;
  stroke-width:2px
}
100%{
  fill:#FFB6C1;
  stroke-width:10px
}
`;


const StyledCircle = styled.svg`
  animation: ${rotate} infinite 10s linear;
  height: 10rem;
  width: 10rem;
  display: block;
  margin: auto;
`;
const StyledInnerCircle = styled.circle`
  animation: ${pulse} infinite 4s linear;
  
`;

const circle = (
    <StyledCircle height="100" width="100">
      <StyledInnerCircle cx="50" cy="50" r="40" stroke="#C71585" stroke-width="2" />
    </StyledCircle>
  );



/*
 function Svg2(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
            <circle cx={10} cy={10} r={10} />
        </svg>
    );
}*/

export default circle;

