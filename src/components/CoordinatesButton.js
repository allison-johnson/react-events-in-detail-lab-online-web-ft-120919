import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleOnClick = (event) => {
    let coords = [event.clientX, event.clientY]
    return this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>
      </button>
    )//return
  }//render

}//class

export default CoordinatesButton; 

