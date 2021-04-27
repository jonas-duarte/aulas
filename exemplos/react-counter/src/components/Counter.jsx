import React, { Component } from 'react';


const Button = ({onClick, children}) => {
    return ( <button  
        style={{backgroundColor:"yellow"}} 
        onClick={onClick}>{children}</button> );
} 

class Counter extends Component {
    state = { count: 0 }
    
    handleOnCountErrado = () => {
        this.state.count += 1;
    }

    handleOnCount = () => {
        const { count } = this.state;
        this.setState({count: count+1})
    }
    
    handleUpdate = () => {        
        this.setState({})
    }
    
    render() {
        const { count } = this.state;
        const { name, dobrado, toggleDobrado } = this.props;
        
        return (
            <div>
                {name}: {dobrado ? count* 2 : count}
                <br></br>
                <Button onClick={this.handleOnCountErrado}>Adiciona 1 (errado)</Button>
                <br></br>
                <Button onClick={this.handleOnCount}>Adiciona 1</Button>
                <br></br>
                <Button onClick={this.handleUpdate}>Update</Button>
                <br></br>
                <Button onClick={toggleDobrado}>Toggle dobrado</Button>
            </div>
        );
    }
}

export default Counter;

