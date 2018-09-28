import React, { Component } from 'react';
import SearchBox from './SearchBox';

class SlideMenu extends Component{


	render() {
		
		return(
		   <nav className="navbar">
			<span className="open-slide">
			  <a href="#">
			    <svg width="30" height="30">
				  <path d="M,5 30,5" stroke="#000"
				  strokeWidth="5"/>
				  <path d="M,14 30,14" stroke="#000"
				  strokeWidth="5"/>
				  <path d="M,23 30,23" stroke="#000"
				  strokeWidth="5"/>
				 </svg>
				</a>
			  </span>
			     <h1>Art in Public Places</h1>
			 </nav>
		  );
	   }
	}

export default SlideMenu;