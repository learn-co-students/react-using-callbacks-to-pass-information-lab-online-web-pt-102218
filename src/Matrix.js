import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: "#F00"
    }
    this.changeColor = this.changeColor.bind(this)
    this.selectedColor= this.selectedColor.bind(this)
  }

  changeColor(color) {
    this.setState({
      color: color
    })
  }

  selectedColor() {
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorState={this.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector change={this.changeColor}/>
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
