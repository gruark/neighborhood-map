import React, { Component } from 'react';


/* Modified from https://bootstrapious.com/p/bootstrap-sidebar */

class SlideMenu extends Component{ 


	render() {
		
		return(

        <div id="sidebar">
            <div className="sidebar-header">
                <h3>Sidebar</h3>
            </div>
			  <ol className='art-list'>
	           {this.props.locations.map((location) => (
		         <ul key={location.title}>
		          {location.title}
		         </ul>
		       ))}
	          </ol>
			
           </div>
	 
		  );
	   }
	}

export default SlideMenu;