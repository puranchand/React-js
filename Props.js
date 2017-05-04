import React from 'react';

class Propt extends React.Component{
	render(){
		return(
			<div>
			<h1>{this.props.headerProp}</h1>
			<h2>{this.props.contantProp}</h2>
			</div>
		)
	}
}
 Propt.defaultProps = {
 	headerProp:"header from headerprop",
 	contantProp:"contant from headerprop"
 }
 export default Propt;