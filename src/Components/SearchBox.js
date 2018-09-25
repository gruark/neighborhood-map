import React, { Component } from 'react';

class SearchBox extends Component{

	render() {
  
		
		return(
		 <form>
		 <input
		    placeholder="Search"
			ref={input => this.search = input}
			onChange={this.handleInputChange}
		  />
		  <p></p>
		  </form>
		  )
	   }
	}


export default SearchBox;