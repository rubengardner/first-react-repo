import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName= React.createRef();
      }
      
      handleSubmitEvent =(event) => {
        event.preventDefault();
      }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmitEvent}>
              <label htmlFor='id-name'>Your name:</label>
              <input id='id-name' name='name' type='text' ref={this.inputName}></input>
              <label htmlFor='category-issue'>Category issue</label>
              <select id='category-issue' name='category'>
                <option value='web'>Web</option>
                <option value='general'>General</option>
                <option value='maintanance'>Maintanance</option>
              </select>
              <label htmlFor='comments-id'>Comments</label>
              <textarea name='comments'  id='comments-id' />
              <input type='submit' value='Submit' />
          </form>
        </div>
      )
    }
  }

export default UncontrolledForm