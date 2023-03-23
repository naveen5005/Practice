import React, { Component } from 'react'
import HOCcomponents from './HOCcomponents'

class HoverMe extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleIncrement}>Hover me</h1>
        <h2>You hovered me {this.props.count} times</h2>
      </div>
    )
  }
}

export default HOCcomponents(HoverMe)
