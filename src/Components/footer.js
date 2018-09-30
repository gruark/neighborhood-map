import React, { Component } from 'react';


class Footer extends Component{
   

	render() {
		
		return(
		     <footer className = "footer-copyright">
			    Copyright &copy; {(new Date().getFullYear())} - Gina Ruark
			 </footer>
		  );
	   }
	}

export default Footer;