import React from "react";

class RemoveButton extends React.Component{
	

	constructor(props) {
		super(props);
		 this.state = {
		 	material:"intial value.."
		 }
		 this.updateData = this.updateData.bind(this);
		 this.deleteData = this.deleteData.bind(this);
	}

	
		updateData(){
		this.setState({material:'you put new value'});}

		deleteData(){
			this.setState({material:""});
		}
	
	render(){
		return(
			<div>
			<button type="button" value={this.state.material} onClick={this.updateData} >click me</button>
			<h4>{this.state.material}</h4>
			<button type = "button" value = {this.state.material} onClick = {this.deleteData}>Remove</button>
			</div>
			)
	}
}
export default RemoveButton;