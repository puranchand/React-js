import React from 'react';

class ArrayFun extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:"",

			hide:true
		}


		this.updateState = this.updateState.bind(this)
		this.showText = this.showText.bind(this)
	}

	showText(){
		this.setState({hide:false})
	}

	onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }

	updateState(e){
		this.setState({data:e.target.value})
	}



	render(){
		return(

			<div>

			<form className="form-horizontal">
			 <input type = "text" value = {this.state.data} onChange = {this.updateState} />
			</form>
			<button onClick = {this.showText}>Set State</button>

			<h4>{!this.state.hide ? this.state.data : null}</h4>
			</div>
			)
		}
 }
export default ArrayFun;