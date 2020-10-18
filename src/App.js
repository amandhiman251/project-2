import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    UserInput: ""
  }
  lengthHandler = (event) => {
    this.setState ( {
      UserInput: event.target.value
    });
  }
  deleteCharHandler = (index) => {
    const newList = this.state.UserInput.split(''); //created a new array
    newList.splice(index, 1);
    const updatedList = newList.join(''); //created a new string
    this.setState ( {
     UserInput: updatedList
    });
  }
  render() {
    const charList = this.state.UserInput.split('').map(
      (ch, index) => {
        return <Char character ={ch} key ={index}  clicked = {() => this.deleteCharHandler(index)} /> 
      }
    );
  return (
    <div className="App">
      <input 
      type = "text" 
      onChange = {this.lengthHandler} 
      value = {this.state.UserInput} />

      <p>{this.state.UserInput}</p>
      <Validation inputLength = {this.state.UserInput.length} />
      {charList}
    </div>
  );
  }
}

export default App;
