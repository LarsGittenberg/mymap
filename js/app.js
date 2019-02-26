




//LG says: todo - refactor into the m-v-vm knockout.js organization format
//LG says: model section here:

     // TODO: Create a map variable
     var map;

     // todo: create empty markers array
     var markers = [];

     // TODO: Complete the following function to initialize the map
     function initMap() {
        // todo: add some map styles...check out snazzy maps online
        // Create a styles array to use with the map.
        var styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#3a3935"
            },
            {
                "saturation": 5
            },
            {
                "lightness": -57
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ea1717"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#b7caaa"
            },
            {
                "saturation": -14
            },
            {
                "lightness": -18
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#cbdac1"
            },
            {
                "saturation": -6
            },
            {
                "lightness": -9
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#c17118"
            },
            {
                "saturation": 61
            },
            {
                "lightness": -45
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#cba923"
            },
            {
                "saturation": 50
            },
            {
                "lightness": -46
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#8ba975"
            },
            {
                "saturation": -46
            },
            {
                "lightness": -28
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#8d9b83"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -12
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#d4dad0"
            },
            {
                "saturation": -88
            },
            {
                "lightness": 54
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bdc5b6"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -3
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bdc5b6"
            },
            {
                "saturation": -89
            },
            {
                "lightness": -26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#a43218"
            },
            {
                "saturation": 74
            },
            {
                "lightness": -51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#165c64"
            },
            {
                "saturation": 34
            },
            {
                "lightness": -69
            },
            {
                "visibility": "on"
            }
        ]
    }
];

       // TODO: use a constructor to create a new map JS object. You can use the coordinates
       // we used, 40.7413549, -73.99802439999996 or your own!
       map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:  38.773935, lng:-77.164356},
            zoom: 12,
            styles: styles,
            mapTypeControl: false

       });

     /*
     COMMENTED CODE HERE IS FOR ONE SINGLE MARKER ONLY
     var jcpenney = {lat: 38.773288, lng: -77.176158};

     var jcpenneyMarker = new google.maps.Marker({
        position: jcpenney,
        map: map,
        title: 'my first marker',
        animation: google.maps.Animation.DROP
     });

     var jcpenneyInfoWindow = new google.maps.InfoWindow({
        content: 'hello from jcpenney!!!!'
     });

     jcpenneyMarker.addListener('click', function(){
        jcpenneyInfoWindow.open(map, jcpenneyMarker);
     });
     */

     var largeInfoWindow = new google.maps.InfoWindow();


     //alternatively, we can create a variable representing an array containing marker objects such as:
     //..and normally we'd have this in a database, database, DATABASE
     var locations = [
        {title:'wegmans', location:{lat: 38.742583, lng: -77.161092 }, category:'food'},
        {title:'moviehaus16', location:{lat: 38.772798, lng: -77.137287 }, category:'entertainment'},
        {title:'traderjoe', location:{lat: 38.781576, lng: -77.189409}, category:'food'}
     ];

     //use the locations array and a js loop to create markers?
     for (var i=0; i<locations.length; i++) {
        //get the position and title
        var position = locations[i].location;
        var title = locations[i].title;
        var category = locations[i].category;

        //create marker per each object
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            category: category,
            animation: google.maps.Animation.DROP,
            id: i
        });

        //plug each result of the loop into the markers array
        markers.push(marker);

        //create an onclick event for each marker on the map
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
            console.log(largeInfoWindow);
        });
     }//end for loop

     function populateInfoWindow(marker, infowindow) {
        //check to make sure infowindow is not already open for this marker
        if (infowindow.marker !== marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div><p>hello_</p><br>'+ marker.title + '<br>' + marker.category +'</div>');
            infowindow.open(map, marker);

            //make sure marker property is cleared when if infowindow is closed
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker(null);
            });
        }
     };


     }//end init


//LG says: viewmodel section here:
var viewModel = function() {
    //code here
};

//LG says: instantiate the viewModel here:
ko.applyBindings(new viewModel());



