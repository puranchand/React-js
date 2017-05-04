import React from 'react';

class TodoApp extends React.Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {item:[],text:''};
	}
	render(){
		return(
			<div>
			<h2>Todo App<h2>
			<TodoList item = {this.state.handleChange} />
			<from onsubmit = {this.state.handleSubmit}>
			<input onchange ={this.state.handleChange} value ={this.state.text}>
			<button>{'Add #' + (this.state.item.length + 1)}</button>
			</div>
			)
	}

}