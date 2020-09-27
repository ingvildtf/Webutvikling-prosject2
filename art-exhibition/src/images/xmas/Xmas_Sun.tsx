import React from 'react'
import {ReactComponent as Xmas_Sun} from '../xmas/xmas_sun.svg';
import styled from 'styled-components'
import { keyframes } from 'styled-components'



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
`;



const StyledXmasSun = styled(Xmas_Sun)`


#orange{
    animation: ${rotate} infinite 20s linear; 
    transform-origin: center;
    transform-box:fill-box;
    
}

#yellow{
    animation: ${pulse} infinite 4s linear;
    
}
`;


class XmasSunInstallation extends React.Component{
    render(){
    return(
        <div>
            <StyledXmasSun/>
        </div>
    );
    }
}

export default XmasSunInstallation; 