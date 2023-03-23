import React from 'react'
import { Component } from 'react'

const HOCcomponents = (OriginalComponent) => {
 
    class SampleComponent extends Component{
        constructor(props) {
          super(props)
          this.state = {
             count : 0
          }
        }
        handleIncrement =()=>{
            this.setState({count: this.state.count+1})
        }
        render(){
            return <OriginalComponent count={this.state.count} handleIncrement={this.handleIncrement}/>
        }
    }
  return SampleComponent
}

export default HOCcomponents
