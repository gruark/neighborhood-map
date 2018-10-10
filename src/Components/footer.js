import React, { Component } from 'react';


class Footer extends Component{
   

	render() {
		
		return(
		     <footer id="footer-copyright" role="contentinfo">
			    Copyright &copy; {(new Date().getFullYear())} - Gina Ruark
			 </footer>
		  );
	   }
	}

export default Footer;