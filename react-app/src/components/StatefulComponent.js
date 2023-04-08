import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction : 'Hello',
            buttonText : "Exit",
            count : 0
        };
    }

    incrementCount(){
        this.setState({
            count : this.state.count+1
        },
        ()=> {console.log(this.state.count);}      
    )}

    handleClick() {
        this.setState((prevState, prevProps) => {
             return{
                introduction: prevState.introduction === 'Hello' ? 'Goodbye' : 'Hello',
                buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit'
             }
    })
    }

    render() {
        return (
            <div>
            <h1>{this.state.introduction}</h1>
            <button onClick={() => this.handleClick()}> {this.state.buttonText}</button>
            <button onClick={() => this.incrementCount()}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreeting;