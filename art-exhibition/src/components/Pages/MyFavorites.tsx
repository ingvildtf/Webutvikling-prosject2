import React from 'react';
//import Button from '../Button';
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  align-self: center;
`


class DisplayFavorite extends React.Component{
  state = {
    favorite: ""
  };

  componentDidMount() {
    this.setState({ favorite: localStorage.getItem("image") });
  }

  componentWillUnmount() {
    window.localStorage.removeItem("image");
  }

  render() {
    return (
      <>
        <div className="App"></div>
        <h1>Favoritisert installasjon</h1>
        <h3>
          Din favoritt er: {localStorage.getItem("image")}
        </h3>
        <Button onClick={this.componentWillUnmount}> Slett favoritt </Button>
      </>
    );
  }
}


export default DisplayFavorite;
