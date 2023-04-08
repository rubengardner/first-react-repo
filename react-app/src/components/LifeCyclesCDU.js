import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }

    updateGreting = () =>{
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye': 'Hello!'
            }
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreting}>Update Greeting</button>
      </div>
    )
  }
}

export default LifeCyclesCDU