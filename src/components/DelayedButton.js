import React, { Component } from 'react' 

class DelayedButton extends Component {
  handleClick = (event) => {
    event.persist()
    return setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }//handleClick

  render() {
    return(
      <button onClick={this.handleClick}>Delayed!</button>
    )//return
  }//render

}//class

export default DelayedButton;
