import React from 'react';
import Button from '../Button';




class DisplayFavorite extends React.Component{
  state = {
    favorite: ""
  };

  componentDidMount() {
    this.setState({ username: localStorage.getItem("image") });
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
