import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/storage'


var firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET
  };
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();


ReactDOM.render(
  <React.StrictMode>
    <App storage={storage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
