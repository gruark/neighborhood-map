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
	}
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

markerClicked = marker => {
	this.setState({markers: Object.assign(this.state.markers, marker) });
	const location = this.state.locations.find(location => location.id === marker.id);
}
	
locationClicked = location => {
	console.log(location);
}

render() {
	return(
	   <div className = "app">
	      <SlideMenu 
		    {...this.state}
			locationClicked={this.locationClicked}
		  /> 
		   <Map
            {...this.state}
        />
		 <Footer />
	   </div>
	   )
	}
}



export default App;
