import React, { Component } from 'react';
export default class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} color={str} onClick={this.handleColorChange} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleColorChange(e) {
    if (typeof this.props.change === 'function') {
      this.props.change(e.target.style.backgroundColor)
    }
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
