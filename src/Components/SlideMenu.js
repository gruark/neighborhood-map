import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { slide as Menu } from 'react-burger-menu'


/* Modified from https://github.com/negomi/react-burger-menu and from the Udacity Contact list project */

class SlideMenu extends Component{ 

  state = {
	  query: ''
  }
  
  updateQuery = (query) => {
	  this.setState({ query: query.trim() })
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
			   
		  
			  <nav className="navbar" role="navigation" >
               <header id="header" role="banner">
			     <span className="center"><h1>Art in Public Places</h1></span>
                </header>
   			   <Menu left>
			   <div className='searchbox'>
			   <input
			      className='search-art'
				  type='text'
				  placeholder='Search for Art'
				  aria-label='Search for Art'
				  value={this.state.query}
				  onChange={(event) => this.updateQuery(event.target.value)}
				/>
			   </div>

			  <ul className='art-list'>
	             {visibleArt.map((location) => (
		         <li key={location.title.replace(/[^\w\s]/gi, '')} tabindex="0" onClick={() => this.props.locationClicked(this.props)}>
				    
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