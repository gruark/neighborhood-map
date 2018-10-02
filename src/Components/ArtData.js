import React, { Component } from 'react';

class ArtData extends Component {

	render() {

			console.log('Props', this.props)
		let location=location;
		let Thumbnail = location.photo_link ? location.photo_link.thumbnail : '';
		return (
			<div className="ArtData">
                          <div className="photo" style={{ width: 128, height: 193, backgroundImage: `url("${Thumbnail}"`}}></div>
                          <div className="Title">{location.title}</div>
                          <div className="Location">{location.address}</div>
          </div>
		  );
	}
		
}

export default ArtData