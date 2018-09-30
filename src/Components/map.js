import React, { Component } from 'react';

class Map extends Component {
	state = {
		locations: [],
		markers: []
	}
	
componentDidMount() {
	this.getData(),
	this.renderMap()
}

getData= () => {
	fetch('https://data.nashville.gov/resource/xakp-ess3.json?$$app_token=Z8HyslorgvpE5qkBOpQUfp0cI')
	   .then(result => result.json())
	   .then(data => {console.log(data);
					 return data;})
	   .then(data => this.setState({locations: data}, console.log(this.state.locations)))
	   .catch(err => console.log("There was an error: ", err));
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
	   

  /*   
     this.state.locations.map(location => {
			let marker = new window.google.maps.Marker({
			       position: {lat: {location.latitude}, lng: {location.longitude}},
		           map: map,
		           title: {location.title},
			    })
		  })
	 */
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

export default Map