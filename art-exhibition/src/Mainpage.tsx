import React from 'react'
//import Button from './components/Button';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Installations from './components/Pages/Installations'
import MyFavorites from './components/Pages/MyFavorites'
import { ThemeProvider } from './DisplayTheme'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
  display: grid;

  grid-template-areas:
    'navbar'
    'content';
`
interface FieldProps {
  area?: string
}

const Field = styled.div<FieldProps>`
  grid-area: ${props => props.area};
`

function Mainpage() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Router>
          <Field area="navbar">
            <NavBar />
          </Field>
          <Field area="content">
            <Switch>
              <Route exact path="/" component={Installations} />
              <Route path="/my-favorites" component={MyFavorites} />
            </Switch>
          </Field>
        </Router>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Mainpage
