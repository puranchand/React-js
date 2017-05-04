import React from 'react';

class StateFul extends React.Component{
		constructor(pros){
			super();
			this.state = {
				data:
				[
				{
				"id": 1,
				"name":"Wizard",
				"age":"20"
				},
				{
				"id": 2,
				"name":"Jaint",
				"age":"20"
				},
				{
				"id": 3,
				"name":"Minion",
				"age":"20"
				},
				{
				"id": 4,
				"name":"Archer",
				"age":"20"
				}

				]

			}

		}

		render(){
			return(
				<div>
				<header />
				<table>
				<tbody>
				{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
				</tbody>
				</table>
				</div>
				)
		}
	}

			
	


class Header extends React.Component{
	render(){
		return(
			<div>
			<h1>Header</h1>
			</div>
			)
	}
}

class TableRow extends React.Component{
	render(){
		var mistyle = {
					fontSize:20,
					color:'green'
					
					
				}
		return(
			<table style={mistyle} >
			<tr>
			<td>{this.props.data.id}</td>
			<td>{this.props.data.name}</td>
			<td>{this.props.data.age}</td>
			</tr>
			</table>
			)
	}
}

export default StateFul;
