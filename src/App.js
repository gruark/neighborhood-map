import React, { Component } from 'react';
import axios from 'axios'
import Map from './Components/map';
import NavBar from './Components/navBar';
import SlideMenu from './Components/SlideMenu';
import Footer from './Components/footer';
import logo from './logo.svg';
import './App.css';


class App extends Component {

state = {
		locations: [],
		markers: [],
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
			}, this.renderMap())
		})
	   .catch(error => {
			  console.log("Error: " + error)
	    })
}

	
renderMap = () => {
	loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDmP2qumKqdy87zIAWOgcEf57KT5JJDHEM&v=3&callback=initMap")
    window.initMap = this.initMap	
}

initMap = () => {
	 let map = new window.google.maps.Map(document.getElementById('map'), {
	      center: {lat: 36.162664, lng: -86.781602},
		  zoom: 13
		})

	  this.state.locations.map(location => {
	     let latitude = parseFloat(location.latitude);
	     let longitude = parseFloat(location.longitude);

	     let marker = new window.google.maps.Marker({
			position: {lat: latitude, lng: longitude},
			map: map
		 })
							   
	  })
   }
	

render() {
	return(
	   <div className = "app">
	     <NavBar />
	     <SlideMenu 
		      locations={this.state.locations}
			  markers={this.state.markers}
		  />
	       <Map 
		      locations={this.state.locations}
			  markers={this.state.markers}
		   />
		 <Footer />
	   </div>
	   )
	}
}

 function loadScript(url) {
	 let index = window.document.getElementsByTagName("script")[0]
	 let script = window.document.createElement("script")
	 script.src = url
	 script.async = true
	 script.defer = true	
	 index.parentNode.insertBefore(script, index)
	}


export default App;
