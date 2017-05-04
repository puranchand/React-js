import React from "react";

class Test extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:"hello banny"
		}

		this.updateText = this.updateText.bind(this);
	}

	updateText(){
		this.setState({data:'data updated...'})
	}

	render(){
		return(
			<div>
			<button  type="submit" value ={this.state.data} onClick = {this.updateText}>Click it</button>
			<h4>{this.state.data}</h4>
			</div>
			)
	}
	
}
export default Test;