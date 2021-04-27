import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import axios from 'axios';

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

class App extends Component {
  state = { dobrado: false, users: [], loading: true }

  handleDobrado = () => {
    this.state.dobrado = !this.state.dobrado
    this.setState({})
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ loading: false, users });
  }

  render() {
    const { loading, dobrado, users } = this.state;

    console.log(users)
    return (
      <div className="App">
        <Counter
          name="Counter2"
          dobrado={dobrado}
          toggleDobrado={this.handleDobrado}
        />
        <br></br>
        {"1" + "2" + "3"}
        <br></br>
        {loading ?
          "loading..." :
          users
          .filter(({name}) => name.startsWith("C"))
          .map(({ name, email }) => <div>{name} - {email}</div>)
  }
      </div>
    );
  }
}

export default App;