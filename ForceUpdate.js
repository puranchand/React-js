import React from 'react';
class ForceUpdate extends React.Component{

	constructor() {
		super();
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		
	}

	forceUpdateHandler(){
		this.forceUpdate()
	}

	render(){
		return(
			<div>
			<button onClick = {this.forceUpdateHandler}>Force Update</button>
			<h4>Random Number:{Math.random()}</h4>
			</div>
		)
	}

}

export default ForceUpdate;
