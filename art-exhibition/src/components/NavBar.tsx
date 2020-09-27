import React from 'react'
import { Link } from 'react-router-dom'
//import Button from './Button';
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #1c2237;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  .nav-logo {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    padding-top: 15px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    color: #fff;
    border-bottom: 2px solid transparent;
  }

  .nav-links:hover {
    border-bottom: 2px solid 'f00946';
  }
`

function Navbar() {
  return (
    //lager navigasjonsbaren øverst på siden
    <Wrapper>
      <Container className="navbar-container container">
        <Link to="/" className="nav-logo">
          SPACE
        </Link>

        {/**Setter navigasjonen til å være drop meny når siden blir under en størrelse */}
        <ul className={'nav-menu'}>
          <Link to="/" className="nav-links">
            Home
          </Link>

          <Link to="/my-favorites" className="nav-links">
            My Favorites
          </Link>

          <Link to="/settings" className="nav-links">
            Settings
          </Link>
        </ul>
      </Container>
    </Wrapper>
  )
}

export default Navbar
