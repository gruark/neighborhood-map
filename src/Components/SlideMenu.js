import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { slide as Menu } from 'react-burger-menu'


/* Modified from https://bootstrapious.com/p/bootstrap-sidebar and from the Udacity Contact list project */

class SlideMenu extends Component{ 

  state = {
	  query: ''
  }
  
  updateQuery = (query) => {
	  this.setState({ query: query.trim() })
  }
  
  openNav = () => {
	  document.getElementByID("sidebar").style.width = "250px";
  }
  
  closeNav = () => {
	  document.getElementByID("sidebar").style.width = "0";
  }
 
	render() {
		let visibleArt
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			visibleArt = this.props.locations.filter((location) => match.test(location.title) ) 
		} else {
			visibleArt = this.props.locations
		}
		
		return( 
			   
		  
			   
	   <nav className="navbar">
			     <span className="center"><h1>Art in Public Places</h1></span>
	
   			   <Menu left>
			   <div className='searchbox'>
			   <input
			      className='search-art'
				  type='text'
				  placeholder='Search for Art'
				  value={this.state.query}
				  onChange={(event) => this.updateQuery(event.target.value)}
				/>
			   </div>

			  <ul className='art-list'>
	             {visibleArt.map((location) => (
		         <li key={location.title.replace(/[^\w\s]/gi, '')}>
				    
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