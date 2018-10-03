import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


/* Modified from https://bootstrapious.com/p/bootstrap-sidebar and from the Udacity Contact list project */

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

        <div id="sidebar">
        
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
				
		         <li key={location.title}>
		          {location.title}
		         </li>
		            )
			      )}
	          </ul>

           </div>
	 
		  );
	   }
	}

export default SlideMenu;