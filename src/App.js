import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
	
componentDidMount() {
	this.renderMap()
}
	
renderMap = () => {
	loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDmP2qumKqdy87zIAWOgcEf57KT5JJDHEM&v=3&callback=initMap")
    window.initMap = this.initMap	
}

initMap = () => {
	 var map = new window.google.maps.Map(document.getElementById('map'), {
	      center: {lat: 36.162664, lng: -86.781602},
		  zoom: 13
		});
}

render() {
	return(
		  <main>
		    <div id="map"></div>
		  </main>
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
