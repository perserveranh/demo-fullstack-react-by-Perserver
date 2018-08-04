import React, { Component } from 'react';
 
class ChangeInput extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
 
  changeText(event) {
    this.setState({
        name: event.target.value
    });
  }
 
  render() {
    return (
      <div>
        <label htmlFor="name">What's your name: </label>
        <input type="text" id="name" onChange={this.changeText.bind(this)} />
        <h3>{ this.state.name }</h3>
      </div>
    );
  }
}
 
export default ChangeInput;