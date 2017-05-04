import React from 'react';

class Editor extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tango : "hello Tango"

		}
		this.updateState = this.updateState.bind(this);
	};
	updateState (e) {
	this.setState({data : e.target.value});
	}
	render(){
		return(

			<div>
			<input type="text" value={this.state.tango} onChange={this.updateState} />
			<h4>{this.state.tango}</h4>
			</div>
			)
	}
}	

export default Editor;