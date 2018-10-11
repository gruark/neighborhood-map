# Udacity Front End Web Development - Neighborhood Map Project
---

## Project Overview:

For the **Neighborhood Map** project, I am creating a map of the outdoor art around Nashville, TN.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Specification

This site has been built using React,Google Maps API, and a 3rd party API from https://data.nashville.gov/.  It includes a list of art that is searchable by title.  Note:  The service worker will only work in production mode, but the visited markers do remain chached in offline mode.

### Dependencies

The following dependencies were used in this project:

    Axios: ^0.18.0,
    Prop-Types: ^15.6.2,
    React: ^16.5.2,
    React-dom: ^16.5.2,
    React-scripts: 1.1.5,
	React-burger-menu: "^2.5.3",

	
### Referenced Tutorials

     The following tutorials were referenced in the creation of this project.  
	 
	# For the Slide Menu:
	   For the sidebar:  Modified from https://github.com/negomi/react-burger-menu
	   For the search box:  Modified from the Udacity Contact list project 
	   To remove unnecessary brackets:  https://stackoverflow.com/questions/14640486/remove-all-characters-except-alphanumeric-and-spaces-with-javascript
	   
	   Major thanks to Forrest, Tony, and Manish for helping me think through this component.
	   
    # For the Map:
	   To set up map without an external dependency: Modified from https://www.youtube.com/playlist?list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1
	   
	# For the Footer (Copyright):   http://updateyourfooter.com/
	   
	 
	
### How to Run

1. Download the files and unzip them to your desktop.

2.  Navigate to the folder using the Node.JS command prompt.  If you don't have it installed on your machine, you can download it from https://nodejs.org/en/.

3.  Install the dependencies listed in the Dependencies section using the "npm install --save" command.

     example:  npm install --save axios

4.  Launch the project in production mode using the following commands:
     
	 npm run build
	 serve -s build
	 
	 Then visit localhost:5000 to view the project.



