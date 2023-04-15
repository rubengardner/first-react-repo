import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPosts extends Component {

    postToApi= () => {
        axios.post('https://jsonplaceholder.typicode.com/posts/', 
        {
          title: 'Ruben mola',
          body: 'Eres puro amor',
          userId: 123
        }).then(response => console.log(response))
    }
  render() {
    return (
      <div>
        <button onClick={this.postToApi}>
            Create a post
        </button>
      </div>
    )
  }
}

export default HTTPPosts