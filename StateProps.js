import React from 'react';

class StateProps extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			header:"header from state of headdrop",
			contant:"contant from state"
				
			}
		}

	 render() 
	 {
      return (
         <div>
            <Header headerProp = {this.state.header} />
            <Contant contantProp = {this.state.contant} />
         </div>
      )
   }

}

class Header extends React.Component{
	render(){
		var mistyle = {
					fontSize:50,
					color:'blue'
				}
		return(
			<div style={mistyle}>
			<h1>
				{this.props.headerProp}
			</h1>
			</div>
			)
	}
}

class Contant extends React.Component{
	render(){
			var mstyle = {
					fontSize:50,
					color:'grey'
				}
		return(
			<div style={mstyle}>
			<h2>
				{this.props.contantProp}
			</h2>
			</div>
			)
	}
}

export default StateProps;