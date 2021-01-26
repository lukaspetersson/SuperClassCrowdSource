import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

var test=["hej", "då", "äpple", "appelsin", "annanas"]

class LabelInput extends React.Component {

	    render() {
		return (
			<Typeahead
				id="basic-typeahead-single"
				onChange={(e)=>this.props.setLabel(e)}
				options={test}
				placeholder=""
			   />
  	  );
  }
}

export default LabelInput;
