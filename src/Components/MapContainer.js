import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {}

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
	   

     this.state.locations.map(location => {
			let marker = new window.google.maps.Marker({
			       position: {lat: this.state.location.latitude, lng: this.state.location.longitude},
		           map: map,
		           title: {location.title}	
			    })
		  })
}


    /*  
	    this.props.markers
		   .map(marker => (
	          let marker = new google.maps.Marker({
		         position: {lat: location.latitude, lng: location.longitude},
		         map: map,
		         title: {location.title}
			});
	     ))
	  marker.setMap(map);

	  marker.addListener('click', function () {
			populateInfoWindow(this, locInfoWindow);
		});
	   }
	  
	  function populateInfoWindow(marker, infowindow) {
		  if(infowindow.marker != marker) {
			  infowindow.marker = marker;
			  infowindow.setContent('<div>' + marker.title + '</div>');
			  infowindow.open(map, marker);
			  infowindow.addListener('closeclick', function(){
					infowindow.setMarker(null);
				});
	        }
			map.fitBounds(bounds);
	  });
    */
 

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