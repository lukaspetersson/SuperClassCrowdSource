import React from 'react';
import './App.css';
import LabelInput from './LabelInput.js';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'react-html5-camera-photo/build/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
    constructor(props){
	    super(props)
		this.state = {
			showInputLabel : false,
			label : "",
			uri: "",
		}
		this.handleTakePhoto = this.handleTakePhoto.bind(this);
		this.setLabel = this.setLabel.bind(this);
		this.savePhoto = this.savePhoto.bind(this);
		this.resetState = this.resetState.bind(this);
		this.uuidv4 = this.uuidv4.bind(this);
    }

	componentDidMount(){
    document.title = "SuperClass"
  }

	setLabel(label) {
		this.setState({
			label: label
		});
	}

	uuidv4() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);
	  });
	}

	savePhoto(){
		var storageRef = this.props.storage.ref('/images/'+this.state.label+"/"+ this.uuidv4());
		storageRef.putString(this.state.uri, 'data_url').then(function (snapshot) {
			console.log("Saved");
		});

		this.resetState()
	}

	resetState(){
		this.setState({
			showInputLabel : false,
			label : "",
			uri: "",
		});
	}

	handleTakePhoto (dataUri) {
		this.setState({
			showInputLabel: true,
			uri: dataUri
		});
	}

    render() {
		const dis = this.state.label == "";

        return (
            <div className="body">
				<h1>Thank you!</h1>
				<p>SuperClass really appreciate your contribution!</p>

				<Modal
					show={this.state.showInputLabel}
					onHide={this.resetState}
					>
					<Modal.Header closeButton>
					  <Modal.Title>Set Fruit Name</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
						   <Form.Group controlId="setName">
							 <Form.Label>
							   Enter name of fruit
							 </Form.Label>
								<LabelInput setLabel={this.setLabel}/>
						   </Form.Group>
						 </Form>
					</Modal.Body>
					<Modal.Footer>
					  <Button variant="primary" onClick={this.savePhoto} disabled={dis} >OK</Button>
					</Modal.Footer>
				</Modal>
				<div className="cam">
					{!this.state.showInputLabel?
						<Camera
							isSilentMode = {true}
							isImageMirror = {false}
							idealFacingMode ={FACING_MODES.ENVIRONMENT}
							imageType = {IMAGE_TYPES.JPG}
							idealResolution = {{width: 512, height: 512}}
							onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
						/>
					: <></>
					}

				</div>
				<p>^</p>
				<p>Press here to take photo</p>

            </div>
        );
    }
}

export default App;
