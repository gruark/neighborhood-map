import React, { Component } from 'react';
import axios from 'axios'
import Map from './Components/map';
import SlideMenu from './Components/SlideMenu';
import Footer from './Components/footer';
import registerServiceWorker from './registerServiceWorker';
import './App.css';


class App extends Component {

constructor() {
	super();
	this.state = {
		locations: [],
		markers: [],
		updateSuperState: state => {
			 this.setState(state)
		  }
	}
}
	
componentDidMount() {
	this.getLocations()
}

updateSuperState = state => {
	this.setState(state)
}

componentDidMount() {
	this.getLocations()
}

getLocations = () => {
	const endPoint = "https://data.nashville.gov/resource/xakp-ess3.json?$$app_token=Z8HyslorgvpE5qkBOpQUfp0cI"
	
	axios.get(endPoint)
	   .then(response => {
		  this.setState({
			 locations: response.data
			})
		})
	   .catch(error => {
			  console.log("Error: " + error)
	    })
}
	

render() {
	return(
	   <div className = "app">
	   <div id="outer-container">
	      <SlideMenu 
		    {...this.state}
		  /> 
		   <Map
            {...this.state}
        />
		 <Footer />
	   </div>
	   </div>
	   )
	}
}



export default App;
