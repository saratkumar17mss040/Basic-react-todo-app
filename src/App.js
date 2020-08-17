import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

// top level component - App
class App extends Component {
	constructor() {
		super();
		// appication data
		this.state = {
			message: 'Hello  i am sarath from react !',
			newTodo: '',
			todos: [
				{
					title: 'learn react',
					done: false,
				},
				{
					title: 'learn vue',
					done: false,
				},
			],
		};
		// or use this to bind
		// this.formSubmitted = this.formSubmitted.bind(this);
	}

	newTodoChanged(event) {
		// console.log(event.target.value);
		this.setState({
			newTodo: event.target.value,
		});
	}

	formSubmitted(event) {
		event.preventDefault();
		// console.log(this.state.newTodo);
		this.setState({
			newTodo: '',
			todos: [
				...this.state.todos,
				{
					title: this.state.newTodo,
					done: false,
				},
			],
		});
	}

	removeTodo(index) {
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({
			todos,
		});
	}

	toggleTodoDone(event, index) {
		console.log(event.target.checked);
		//  shallow copy -the array
		const todos = [...this.state.todos];
		// copy the todo - can  also ue Object.assign
		todos[index] = {
			...todos[index],
			done: event.target.checked,
		};
		// update done property on copies
		// todos[index].done = event.target.checked;
		console.log(todos);
		this.setState({
			todos,
		});
	}

	allDone() {
		const todos = this.state.todos.map((todo) => {
			return {
				// ...todo,
				title: todo.title, // can also do ...todo
				done: true,
			};
		});

		this.setState({
			todos,
		});
	}

	render() {
		return (
			<div className="App">
				<h1>{this.state.message}</h1>
				{/* statelesss functional components */}
				<NewTodoForm
					// props
					newTodo={this.state.newTodo}
					formSubmitted={this.formSubmitted.bind(this)}
					newTodoChanged={this.newTodoChanged.bind(this)}
				/>
				<button onClick={() => this.allDone()}>All Done</button>
				<TodoList
					todos={this.state.todos}
					toggleTodoDone={this.toggleTodoDone.bind(this)}
					removeTodo={this.removeTodo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
