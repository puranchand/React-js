import React from 'react';

class ApiReact extends React.Component{
	constructor(props) {
		super(props);

		this.state={
			data :[]
		}

		this.updateState = this.updateState.bind(this);
	}

	 updateState(e) {
      var item = "";
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data:e.target.value})
   }

	render(){
		return(
			<div>
			 <input type = "text" value = {this.state.data} onChange = {this.updateState} />
			<button onClick={this.state.data}>Set State</button>
			<h4>{this.state.data}</h4>
			</div>
			)
	}	
}
export default ApiReact;