import React, { Component } from 'react';

//Modified from Udacity:  Neighborhood Map Explained  https://www.youtube.com/playlist?list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1

class Map extends Component {
	
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
			  '<div id="marker-content"><img class = "center" src="' + location.photo_link + '" alt="' + location.title + '" height="175px">' +
              '<div id="marker-data"><div class="marker-title"><strong>' + location.title + '</strong></div><br>' +
                '<strong>Address: </strong>' + location.location + '<br>' +
                '<strong>Medium: </strong>' + location.medium + '<br>' +
				'<strong>Type: </strong>' + location.type + '</div></div>'
		   )
							  
		   //Open InfoWindow								  
		   infoWindow.open(map, marker);
		 })

	  })

   }
	

render() {
	

	return(
		  <main>
		    <div id="map" tabindex="-1" aria-hidden="true" aria-describedby="map-locations"></div>
			<div hidden id="map-locations">A map that shows the Art locations.</div>
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