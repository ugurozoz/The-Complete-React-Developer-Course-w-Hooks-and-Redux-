import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent' 
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {

  state = {
    inputText: ''
  }

  changeInputHandler = (event) => {
    const state = { ...this.state }
    state.inputText = event.target.value
    this.setState({ ...state })    
  }


  letterClickHandler = (index) => {
    const state = { ...this.state }
    const text = state.inputText.split('')
    
    text.splice(index, 1)
    state.inputText = text.join('')
    console.log(state)
    this.setState({ ...state })
  }
 

  render() {
    const textLength = this.state.inputText.length;
    const letters = this.state.inputText.split('');
    console.log('STATE',this.state)    

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.changeInputHandler(event)} size="40" value={this.state.inputText}/>
        <p><strong>Length of text entered:{textLength}</strong></p>
        <ValidationComponent textLength={textLength} />        
        {
          letters.map((letter,index) => {
            return (
              <CharComponent
                letter={letter}
                click={() => this.letterClickHandler(index)} 
                key = {`letter${index}`} 
                />
            )
          })
        }        

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
