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
		  zoom: 5
		}) 
		
     //Create a Single infoWindow
		 let infoWindow = new window.google.maps.InfoWindow()
		 
	 //Set bounds of map markers
	     let bounds = new window.google.maps.LatLngBounds();
		 
	  //Add Markers to map
	  const markers = this.props.locations.map(location => {
	      let latitude = parseFloat(location.latitude);
	      let longitude = parseFloat(location.longitude);
          
         //Marker Creation
		 
	     let marker = new window.google.maps.Marker({
			id: location.id,
			title: location.title,
			position: {lat: latitude, lng: longitude},
			map: map,
		 })
		 
		 //Extend Marker bounds
		 let loc = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());
		 bounds.extend(loc)

		 
		 //Add Event Listener
		 marker.addListener('click', function() {
		   //Change content
		   infoWindow.setContent(
			  '<div id="marker-content"><img class = "center" src="' + location.photo_link + '" alt="' + location.title.replace(/[^\w\s]/gi, '') + '" height="175px">' +
              '<div id="marker-data"><div class="marker-title"><strong>' + location.title.replace(/[^\w\s]/gi, '') + '</strong></div><br>' +
                '<strong>Address: </strong>' + location.location + '<br>' +
                '<strong>Medium: </strong>' + location.medium + '<br>' +
				'<strong>Type: </strong>' + location.type + '</div></div>'
		   )
							  
		   //Open InfoWindow								  
		   infoWindow.open(map, marker);
		 })
         map.fitBounds(bounds);
		 map.panTo(bounds.getCenter());
		 map.setZoom(map.getZoom()-1); 
		 return marker;
      
		
	  })
         this.props.updateSuperState({markers})
      
   }
	

render() {
	

	return(
		  <main id = "page-wrap">
		    <div id="map" tabIndex="-1" aria-hidden="true" aria-describedby="map-locations"></div>
			<div hidden id="map-locations">A map that shows the Art locations.</div>
		  </main>
	   )
	}
}

//Script to load map using vanilla JS

 function loadScript(url) {
	 let index = window.document.getElementsByTagName("script")[0]
	 let script = window.document.createElement("script")
	 script.src = url
	 script.async = true
	 script.defer = true	
	 
	 // Error reporting modified from https://stackoverflow.com/questions/9860823/js-loading-script-error
	 script.onerror = function() {
             alert("Unable to load the Map");
     }
	 index.parentNode.insertBefore(script, index)
	}



export default Map