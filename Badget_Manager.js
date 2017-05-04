import React from "react";

class Badget_Manager extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:"",
			show:false,
			hide:true,
			item:[],
			text:""
		}
		
	this.valueUpdate = this.valueUpdate.bind(this)
	this.valueChange = this.valueChange.bind(this)
	this.showInput = this.showInput.bind(this)
		
	}

	showInput(){

		this.setState({show:!this.state.show})
	}

	valueUpdate(e){
		 e.preventDefault();
		var newValue = {
			text:this.state.text,
			id:Date.now()
		};
		this.setState((prevState)=>({
			item:prevState.item.concat(newValue),
			text:""
		}))
	}
	valueChange(e){
		this.setState({text:e.target.value})
	}
	

 


	render(){

		
		return(
			<div>

			<div>
			<ul className="nav nav-tabs">
			  <li role="presentation" className="active"><a href="#">Badget</a></li>
			  <li role="presentation"><a href="#">Data</a></li>
			  <li role="presentation"><a href="#">Details</a></li>
			</ul>
			</div>
		
			<div className="btn-lg">
			<p>
			
			<button type="button" className="btn btn-default btn-lg" onClick = {this.showInput}>
			<img src = "cross-39601_640.png" height="50" width="50"/></button>
			</p>
			</div>

			
			<div className="jumbotron">

				{!this.state.show ? this.state.data:<form onSubmit = {this.valueUpdate}>
				
				<input onChange = {this.valueChange} value = {this.state.text}/>
				<button>Rs.</button>
				</form>}
 		 	</div>

 		 	<div className = "textbox">
 		 	<h2>Badget List</h2>
			<h4><TodoList item ={this.state.item} /></h4>
 		 	</div>	

			</div>
			

			)
	}
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.item.map(elem => (
          <li key={elem.id}>{elem.text}</li>
        ))}
      </ul>
    );
  }
}

export default Badget_Manager;