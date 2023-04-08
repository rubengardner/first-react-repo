import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }

    handleSignIn = () => {
        this.state.isLoggedIn ? (
        this.setState({
            isLoggedIn: false
        })): 
        (this.setState({
            isLoggedIn: true
        }))
    }

    render() {
    return (
        <div>
            <MethodsAsPropsChild
                isLoggedIn={this.state.isLoggedIn} 
                handleSignIn={this.handleSignIn}
            />
        </div>
    )
  }
}

export default MethodAsPropsParent