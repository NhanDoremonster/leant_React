import React from 'react';
import './App.css';

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', name: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({name: this.state.value, value: null});
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <h1>Hello {this.state.name}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default main;
