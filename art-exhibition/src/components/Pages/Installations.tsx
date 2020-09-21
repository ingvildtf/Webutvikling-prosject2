import React from 'react'
//import {Link} from 'react-router-dom'
import styled from 'styled-components'
//import {grid} from 'styled-components-grid'


export const Wrapper = styled.div `
display: grid;
background: #242424;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px; 
grid-template-areas: 
    "text"
    "svg";
    

`
//${grid({})}
const Container = styled.div `
background: blue;
    display: grid;
    justify-content: center;
    align-items: center;
`
interface WrapperProps{
    area: string;
}

const Text = styled.h3 <WrapperProps> `
color: #1c2237;
grid-area: ${props => props.area}; 
display: grid;
 
`

const SVG = styled.div <WrapperProps>`
grid-area: ${props => props.area}; 
display: grid;
.midCircle{
    fill: #024059;
}
.rect1{
    fill: #89D6B9;
}

.rect2{
    fill: #1D261B;
}
.rect3{
    fill: #F5C775;
}
.rect4{
    fill: #F5A494;
}
.rect5{
    fill: #595959; 
    transform-origin: 72.73% 62%;
}

.circle{
    fill: #A2D5AC;
}

.circle:hover{
    transform: scale(1.35);
}

.circle{
    transition: all 2s;
    transform-origin: 100% 0%;
}

.rect4:hover{
    fill: #8090A6;

}
`

function Installations() {
    return (
        <>
        <Wrapper>
            <Container>
            <Text area="text" >SVG</Text>
            <SVG area="svg"> 
                <svg className="image" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 550 650" width = "550" height ="650">  
                    <rect className="rect5" x="350" y="250" height="400" width="100"></rect>                   
                    <rect className ="rect4" x="50" y="200" height="200" width="350"></rect> 
                    <circle className= "midCircle" cx="275" cy="350" r="70" ></circle>  
                    <polygon className= "rect1" points="100, 300 400, 500 380, 550 100, 360 100, 360" ></polygon>   
                    <polygon className= "rect2" points="100, 360 380, 550 361, 600 100, 600 100, 360" ></polygon>    
                    <rect className="rect3" x="80" y="0" width="2%" height="650"></rect>    
                    <circle className="circle" cx="450" cy="60" r="150"></circle>     
                </svg>
            </SVG> 
            </Container> 
        </Wrapper>
        </>
    )
}

export default Installations
