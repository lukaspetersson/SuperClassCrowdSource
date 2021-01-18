import React from 'react';
import './App.css';
import Start from './components/Start.js';
import Camera from './components/Camera.js';
import Predictions from './components/Predictions.js';
import AllClasses from './components/AllClasses.js';




class App extends React.Component {
    constructor(props){
	    super(props)
	    this.state = {
			show: 1,
	    }

    }

    componentDidMount(){

    }

    render() {
		var component = null;
		switch(this.state.show) {
            case 0:
        		component = <Start/>
                break;
            case 1:
				component = <Camera storage={this.props.storage}/>
                break;
            case 2:
				component = <Predictions/>
                break;
            case 3:
				component = <AllClasses/>
                break;
            default:
				component = <Start/>
        }

        return (
            <div className="body">
				{component}
            </div>

        );
    }
}

export default App;
