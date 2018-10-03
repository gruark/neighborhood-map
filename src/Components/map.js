import React, { Component } from 'react';


class Map extends Component {
	
constructor() {
	super();
	this.state = {
		markers: [],
	}
}
	
componentDidMount() {
	   this.renderMap()
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

	 
     //Create a Single infoWindow
		 let infoWindow = new window.google.maps.InfoWindow()
		 
     //Set boundaries of window
	     let bounds = new window.google.maps.LatLngBounds();
		 
	  //Add Markers to map
	   this.props.locations.map(location => {
	      let latitude = parseFloat(location.latitude);
	      let longitude = parseFloat(location.longitude);

         //Marker Creation
		 
	     let marker = new window.google.maps.Marker({
			id: location.title,
			title: location.title,
			position: {lat: latitude, lng: longitude},
			map: map,
		 })
		  
		 
		 //Add Event Listener
		 marker.addListener('click', function() {
		   //Change content
		   infoWindow.setContent(
			   '<img src="' + location.photo_link + '" alt="' + location.title + '" width="300px">' +
              '<div><strong>' + location.title + '</strong><br>' +
                'Address: ' + location.location + '<br>' +
                'Medium: ' + location.medium + '</div>'
		   )
											  
		   //Open InfoWindow								  
		   infoWindow.open(map, marker);
		   
		  
		 })
		 	    
	  })

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