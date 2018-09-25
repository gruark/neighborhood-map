import React, { Component } from 'react';

class SearchBox extends Component{

{
	state = {
		query: '',
		searchedArt: []
	}
	
	updateQuery = (query) => {
		this.setState({
			query: query
	  })
      this.updateSearchedArt(query);
	
    }
	render() {
  
		
		return(
		 <form>
		 <input
		    placeholder="Search"
			ref={input => this.search = input}
			onChange={this.handleInputChange}
		  />
		  <p>{this.state.queary}</p>
		  </form>
		  )
	   }
	}
}

export default SearchBox;