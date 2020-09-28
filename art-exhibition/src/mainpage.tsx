import React from 'react'
//import Button from './components/Button';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Installations from './components/Pages/Installations'
import MyFavorites from './components/Pages/MyFavorites'
import Settings from './components/Pages/Settings'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
`

function Mainpage() {
  return (
    <Wrapper>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Installations} />
          <Route path="/my-favorites" component={MyFavorites} />
          <Route path="/settings" component={Settings}/>
        </Switch>
      </Router>
    </Wrapper>
  )
}

export default Mainpage
