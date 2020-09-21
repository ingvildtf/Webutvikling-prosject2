import React from 'react';
//import Button from './components/Button';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components'
import Installations from './components/Pages/Installations';

const Wrapper = styled.div `

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
`;

/*interface WrapperProps{
    area: string;
}*/

/*const Text = styled.div <WrapperProps>`
  grid-area: ${props => props.area};
`;

const Button = styled.div <WrapperProps>`
  grid-area: ${props => props.area}; 

`;
const Navigationbar = styled.div <WrapperProps> `
    grid-area: ${props => props.area}; 
`;
const Header = styled.header <WrapperProps> `
    grid-area: ${props => props.area}; 
`;

const Body = styled.body `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(700px,1fr));
    grid-template-areas:
        "btn"
        "text";
`;*/


function Mainpage() {
    return (
       <Wrapper>
            <Router>
                <NavBar/>
                <Switch>
                     <Route exact  path='/home' component={Installations} />
                     <Route path='/my-favorites' />
                     <Route path='/settings'/>
                </Switch>
            </Router> 
        </Wrapper>
    )
}

export default Mainpage;