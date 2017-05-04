import React from 'react';

class Interactive extends React.Component{
	render(){
		return(
			<button className="square" onClick={() => confirm('click and try again')}>clickme</button>

			)
	}
}
export default Interactive;