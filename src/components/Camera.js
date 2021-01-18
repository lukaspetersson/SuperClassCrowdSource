import React from 'react';
import './Camera.css';
import Cam, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


class Camera extends React.Component {
    constructor(props){
	    super(props)
	    this.state = {

	    }

		this.handleTakePhoto = this.handleTakePhoto.bind(this);
    }

	handleTakePhoto (dataUri) {
	  console.log('takePhoto', dataUri);
	}

    componentDidMount(){
    }

    render() {
        return (
            <div className="body">
				<Cam
				isSilentMode = {true}
				idealFacingMode ={FACING_MODES.ENVIRONMENT}
				imageType = {IMAGE_TYPES.JPG}
				idealResolution = {{width: 224, height: 224}}
				onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
			   />
            </div>
        );
    }
}

export default Camera;