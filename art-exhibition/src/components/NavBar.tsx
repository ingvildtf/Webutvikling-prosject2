import React from 'react'
import { Link } from 'react-router-dom'
//import Button from './Button';
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #1c2237;
  height: 10vh;
  align-items: center;
  font-size: 1.2rem;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 90vw;
  padding-left: 20px;

  .logo {
    color: #fff;
    padding: 10px 20px;

    text-decoration: none;
    font-size: 25px;
  }

  .link {
    color: #fff;
    text-decoration: none;
  }
`

function Navbar() {
  return (
    //lager navigasjonsbaren øverst på siden
    <Wrapper>
      <Container className="navbar-container container">
        <Link className="logo" to="/">
          SPACE ART
        </Link>

        {/**Setter navigasjonen til å være drop meny når siden blir under en størrelse */}

        <Link className="link" to="/my-favorites">
          My Favorites
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Navbar
