import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  applyColor = () => {
    console.log("Applying Color " + this.props.getCurrentColor())
    let currentColor = this.props.getCurrentColor()
    this.setState({
      color: currentColor
    }) 
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.applyColor}>
      </div>
    )
  }
  
}
