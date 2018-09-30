import React, { Component } from 'react';

class Map extends Component {
	state= {
		markers:[]
	}


	/*
markers = (locations) => { 
     this.locations.map(location => {
			let marker = new window.google.maps.Marker({
			       position: {lat: {location.latitude}, lng: {location.longitude}},
		           map: map,
		           title: {location.title},
			    })
		  })
}

*/

render() {
	

	return(
		  <main>
		    <div id="map"></div>
		  </main>
	   )
	}
}




export default Map