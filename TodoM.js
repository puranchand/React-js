import React from 'react';

class TodoInput extends React.Component {
	render () {

		const {value, onChange, addTask} = this.props;

		return (
			<div className="input-group">
				<input value={value} onChange={onChange} type="text" className="form-control" placeholder="New Task" />
				<span className="input-group-btn">
					<button onClick={() => addTask(value)} className="btn btn-default" type="button">Add Task</button>
				</span>
			</div>
		)
	}
}

class TaskItem extends React.Component {
	render () {
		const {task} = this.props
		return (
			<li className="list-group-item">
				<span className="pull-left">{task.title}</span>
				<div className="text-right">
					<a className="text-danger">
						<i className="glyphicon glyphicon-remove"></i>
					</a>
					<a className="text-success">
						<i className="glyphicon glyphicon-ok"></i>
					</a>
				</div>
			</li>
		)
	}
}

class TasksList extends React.Component {
	render () {
		const {tasks} = this.props;

		return (
			<ul className="list-group">
				{tasks && tasks.length > 0 ? 
					tasks.map((task, index) => {
						return <TaskItem task={task} key={index} />
					})
					: null}
			</ul>
		)

	}
}

export default class TodoM extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			tasks: [],
			title: ''
		}

	}

	addTask = (title) => {

		const task = {
			title,
			id: new Date().getTime(),
			completed: false
		}

		this.setState({
			title: ''
		})

		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(task)	
		}))

	}

	removeTask = (id) => {

		const {tasks} = this.state;

	}

	updateTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	render () {

		const {title, tasks} = this.state;

		return (
			<div className="container">
				<div className="col-md-4 col-md-offset-4">
					<TodoInput addTask={this.addTask} value={title} onChange={this.updateTitle} />
					<TasksList tasks={tasks} />
				</div>
			</div>
		)
	}
}

