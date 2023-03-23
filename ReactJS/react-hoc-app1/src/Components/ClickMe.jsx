import React, { Component } from 'react'
import HOCcomponents from './HOCcomponents'

class ClickMe extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <button type='button' className='btn btn-primary' onClick={this.props.handleIncrement}>Click Me</button>
                <h2>You Clicked me {this.props.count} times</h2>
            </div>
        )
    }
}

export default HOCcomponents(ClickMe)