import React, { Component } from 'react';
import Map from './Components/map';
import SlideMenu from './Components/SlideMenu';
import logo from './logo.svg';
import './App.css';


class App extends Component {
	

render() {
	return(
	   <div className = "app">
	     <SlideMenu />
	     <Map />
	   </div>
	   )
	}
}




export default App;
