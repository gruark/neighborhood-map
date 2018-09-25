import React, { Component } from 'react';
import SearchBox from './SearchBox';

class SlideMenu extends Component{


	render() {
		
		return(
		   <nav class="navbar">
			<span class="open-slide">
			  <a href="#">
			    <svg width="30" height="30">
				  <path d="Mo,5 30,5" stroke="#000"
				  stroke-width="5"/>
				  <path d="Mo,14 30,14" stroke="#000"
				  stroke-width="5"/>
				  <path d="Mo,23 30,23" stroke="#000"
				  stroke-width="5"/>
				 </svg>
				</a>
			  </span>
			     <SearchBox />
			     <h1>Art in Public Places</h1>
			 </nav>
		  );
	   }
	}

export default SlideMenu;