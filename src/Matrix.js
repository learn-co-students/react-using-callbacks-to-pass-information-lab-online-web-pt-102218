import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: "#F00"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getCurrentColor={this.getCurrentColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  updateColorState = (name) => {
    this.state.currentColor = name;
    console.log('Current color is: ' + this.state.currentColor)
  }

  getCurrentColor = () => {
    return this.state.currentColor
  }


  render() {
    return (
      <div id="app">
        <ColorSelector updateColorState={this.updateColorState} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
