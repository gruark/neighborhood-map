import React, { Component } from 'react';
import SearchBox from './SearchBox';


/* Modified from https://bootstrapious.com/p/bootstrap-sidebar */

class SlideMenu extends Component{ 


	render() {
		
		return(

        <div id="sidebar">
            <div className="sidebar-header">
                <h3>Sidebar</h3>
            </div>
			<SearchBox />
           </div>
	 
		  );
	   }
	}

export default SlideMenu;