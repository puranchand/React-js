import React from 'react';

class UpdateData extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: ''
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
               Hello sir,
               I whant 1 hour leave on --day 24/4/17 at morning
               <div className="container"><div>
            <h4>{!this.state.data || "Type Something..."}</h4>
         </div>
      );
   }
}

export default UpdateData;