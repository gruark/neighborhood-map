import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import Menu from 'react-burger-menu/lib/menus/slide'


/* Modified from https://github.com/negomi/react-burger-menu and from the Udacity Contact list project */

class SlideMenu extends Component{ 
   constructor(props) {
	   super();
         this.state = {
	        query: '',
		    visibleArt:[]
  }
}

componentWillUpdate(){
	if(this.state.visibleArt.length === 0){
		this.setState({visibleArt:this.props.locations})
	}
}
  
//Updates the search list and marker filter when a piece of art is queried

  updateQuery = (query) => {
	  this.setState({ query: query.trim() })
      let visibleArt
	  if(this.state.query){
		  const match = new RegExp(escapeRegExp(query), 'i')
		  const markers = this.props.markers.map(marker => {
			if(match.test(marker.title)) {
				marker.setVisible(true);
			} else {
				marker.setVisible(false);
			}
			return marker;
		})
		   this.props.updateSuperState({markers})
		  visibleArt = this.props.locations.filter((location) => match.test(location.title))
		  this.setState({visibleArt})
	  } else {
		  visibleArt = this.props.locations
		  this.setState({visibleArt})
	  }

  }
  
  //Launches the infoWindow when a searched title is clicked
     locationClicked = (id) => {
		 const marker = this.props.markers.find(marker => marker.title === id)
		 window.google.maps.event.trigger(marker, 'click')

	 }
  
 
	render() {
		 
		return( 

			<nav className="navbar">
                <header id="header" role="banner">
			       <span className="center"><h1>Art in Public Places</h1></span>
                 </header>
	
	       {/* React Burger Menu */}
		   
   			   <Menu
			       left
				   id={"sidebar"}
				   noOverlay
				   markers={this.props.markers} 
				   locations={this.props.locations} 
				   pageWrapId={ "page-wrap" } 
				   outerContainerId={ "outer-container" }
				 >
				 
			{/* Search box */}
			      <div className='searchbox'>
			      <input
 				     type='text'
				     placeholder='Search for Art'
				     aria-label='Search for Art'
				     value={this.state.query}
				     onChange={(event) => this.updateQuery(event.target.value)}
				   />
			      </div>
			   
            {/* Displays the list of art */}
			  <ul className='art-list'>
	             {this.state.visibleArt.map((location) => (
		            <li key={location.title.replace(/[^\w\s]/gi, '')} tabIndex="0" onClick={() => this.locationClicked(location.title)}>
				    
				 {/*List of Art titles with unnecessary brackets removed stackoverflow.com/questions/14640486/remove-all-characters-except-alphanumeric-and-spaces-with-javascript */}
		              {location.title.replace(/[^\w\s]/gi, '')}
		         </li>
		            )
			      )}
	          </ul>
			         
		   </Menu>
     </nav>
	
	 
		  );
	   }
	}

export default SlideMenu;