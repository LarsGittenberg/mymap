# Udacity Neighborhood Map Project

- Project: constructing a web-browser based interactive map generated using the Google Maps API and using supporting material from the Unsplash API. Knockout JS framework was used and jQuery's AJAX handling feature was used to handle asynchronous calls.
- This project is a student submission for [Udacity's Front End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
- You can view Udacity's rubric/instructions for students in the [Udacity Classroom](https://classroom.udacity.com/me).


## Table of Contents

- [Dependencies](#dependencies)
- [Instructions](#instructions)
- [App Feature](#appfeature)
- [App Behavior](#appbehavior)



## Dependencies
The project uses several CDNs and dependencies - you will need to have internet access and a browser for the app to work:

- [jQuery's CDN Library](https://code.jquery.com/jquery/)
- Google Maps API + an API Key
- Unsplash's API and API key
- Knockout JS's library (included as a minified file)


## Instructions

Feel free to clone/download from here/Github.
For basic functionality, the following files are needed:
- myMap.html
In the js folder, you'll need
- app.js
- lib folder, containing the Knockout JS lib and and another file with jQuery's library

In the css folder, you'll need
- styles.css

All files listed above are already included in this repository.
If you change the folder structure, you will need to change the file path src/href calls.

## <a name="appfeature"></a>App Feature
- This simple project app consists of two parts rendered in the browser: a Google Map with 5 default location markers and a list section whose items correspond to the location markers. The list section contains a dropdown filter.

## <a name="appbehavior"></a>App Behavior
- Upon loading, the default of the map and list should be all 5 locations, seen as 5 markers on the map, 5 items on the list. The dropdown default is "all"
- When the user uses drop down filter, they may select from the categories
--"food"
--"entertianment"
--"sports"
- Selecting one of these categories filters the markers visible on the map.
- Click a location marker on the map makes it bounce, and an info window pops up, containing a brief description of the location AND an image from Unsplash API using the list category keyword (this is my 3rd party API feature as required by Udacity Project Rubric)



