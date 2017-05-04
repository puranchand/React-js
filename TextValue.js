import React from 'react';

class TextValue extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			header:"header from headerfrom..",
			content:"content from contentfrom"
		}
	}
	Cstyle={color:"red"
		
	}
	render(){
		return(
			<div>
			<h2 >header = {this.state.header}</h2>
			<h2>content = {this.state.content}</h2>
			</div>
			)
	}
}
export default TextValue;