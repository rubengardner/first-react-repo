import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         category:"",
         comment:""
      }
    }
    
    handleChangeName = (event) => {
      this.setState({
        name: event.target.value
      })
    }  

    handleChangeCategory = (event) => {
      this.setState({
        category: event.target.value
      })
    }

    handleChangeComment = (event) => {
      this.setState({
        comment: event.target.value
      })
    } 
    handleSubmitEvent =(event) => {
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitEvent}>
            <label htmlFor='id-name'>Your name:</label>
            <input value={this.state.name} onChange={this.handleChangeName} id='id-name' name='name' type='text'></input>
            <label htmlFor='category-issue'>Category issue</label>
            <select id='category-issue' name='category' onChange={this.handleChangeCategory}>
              <option value='web'>Web</option>
              <option value='general'>General</option>
              <option value='maintanance'>Maintanance</option>
            </select>
            <label htmlFor='comments-id'>Comments</label>
            <textarea name='id'  id='comments-id' onChange={this.handleChangeComment} />
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default ControlledForm