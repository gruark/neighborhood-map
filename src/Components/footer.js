import React, { Component } from 'react';


class Footer extends Component{
   

	render() {
		
		return(
		     <footer className = "footer-copyright">
			    <container>
			    Copyright &copy; {(new Date().getFullYear())} - Gina Ruark
			     </container>
			 </footer>
		  );
	   }
	}

export default Footer;