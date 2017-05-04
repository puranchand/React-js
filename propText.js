import React from 'react';

class PropText extends React.Component{
	render(){
		return(
			<div>
			<h1>{this.props.header}</h1>
			<h2>{this.props.content}</h2>
			</div>
			)
	}
 
}

	PropText.defaultProps = {
		header:"header from headerfrom...",
		content:"content from cantentbar"
	}

export default PropText;