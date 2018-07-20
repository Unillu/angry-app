import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const options = ['Trump', 'Bad Service', 'Farts'];

const storeText = 'Store This'
const storeBtn = <button id="store">{storeText}</button>

const clearText = 'Clear Fields'
const clearBtn = <button id="clear">{clearText}</button>

/**
 * Represents the categories that have been created by the user.
 * There is no limit.
 */
function CategoryOption(props) {
	const optionItems = options.map((opt, index) =>
		<option key={index} value={index}>{opt}</option>
	);

	return (
		<select name="category" id="category">
			<option value="0" disabled>Choose a topic</option>
			{optionItems}
		</select>
	);
}

/**
 * Represents the inputs to create a new note.
 * There is no limit.
 */
function NoteInput(props) {
	return (
		<div id="note-input" class="note-input">
			<input type="text" placeholder="Write a snazzy title" id="titleInput" value="Title"/>
			<CategoryOption />
			<textarea placeholder="Type some stuff for your note" id="contentInput">Text</textarea>
			{storeBtn}{clearBtn}
		</div>
	);
}

/**
 * Renders the app
 */
class App extends Component {
  render() {
	return (
		<div class="app">
			<NoteInput />
			<div id="notes"></div>
		</div>
	);
  }
}

export default App;
