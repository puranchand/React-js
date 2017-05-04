import React from 'react';

class consolLog extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			data:""
		}

		this.onSubmit = this.onSubmit.bind(this)
	}

    onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }

    render(){
        return (
        	<div>
            
            <form className="form-horizontal">
                
                <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
                
            </form>
            
            <button type="button" onClick={this.onSubmit} value={this.state.data} className="btn">Save</button>
            <h4>{this.state.data}</h4>
            </div>
        )
    }

}

export default consolLog;