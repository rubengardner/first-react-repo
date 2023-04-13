import React, { Component } from 'react'
import importedNames from '../names'
export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase();
        console.log('inputText', inputText)
        const filterdNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filterdNames
    })
    }

  render() {
    return (
      <div>
        <h1>Name search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input onChange={(event) =>this.handleChange(event)} placeholder='search name...'></input>
        </form>
        <div>
            {this.state.names.map(name =>{
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar