import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	return (
		<div class="app">
			<div id="note-input" class="note-input">
			  <input type="text" placeholder="Write a snazzy title" id="titleInput" value="Title"/>
			  <select name="category" id="category">
				<option value="0" disabled>Choose a topic</option>
				<option value="1" selected>Trump</option>
				<option value="2">Bad Service</option>
				<option value="3">Farts</option>
			  </select>
			  <textarea placeholder="Type some stuff for your note" id="contentInput">Text</textarea>
			  <button id="store">Store This</button> <button id="clear">Clear Fields</button>
			</div>
			<div id="notes"></div>
		</div>
	);
  }
}

export default App;
