"use strict";

//LG says: include onerror event handler, udacity review #1 requirement 1of2
function myerrorhandler() {
    alert('sorry, something went wrong calling the google maps api, try again?');
};


//function that gives randomized number to be used to randomize selection from unsplash image array
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Create a map variable
var map;

//create empty markers array
var markers = [];

//Complete the following function to initialize the map
function initMap() {
    // use a constructor to create a new map JS object. You can use the coordinates
    // we used, 40.7413549, -73.99802439999996 or your own!
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.773935, lng: -77.164356 },
        zoom: 12,
        mapTypeControl: false

    });

    //Create an array of 5 locations objects, including their position property as lat long values
    var locations = [
        {
            title: 'Wegmans',
            category: 'Food',
            info: 'This is the Wegmans, and here is an image from Unsplash API',
            position: { lat: 38.742583, lng: -77.161092 }
        },
        {
            title: 'moviehaus16',
            category: 'Entertainment',
            info: 'This is the movie house, and here is an image from Unsplash API',
            position: { lat: 38.772798, lng: -77.137287 }
        },
        {
            title: 'Traders joe',
            category: 'Food',
            info: 'This is the Traders Joe, and here is an image from Unsplash API',
            position: { lat: 38.781576, lng: -77.189409 }
        },
        {
            title: 'Lee District Rec Center',
            category: 'Sports',
            info: 'This is the Sports Center, and here is an image from Unsplash API',
            position: { lat: 38.774232, lng: -77.108622}
        },
        {
            title: 'Lake Accotink Park',
            category: 'Sports',
            info: 'This is the Hiking Trail, and here is an image from Unsplash API',
            position: { lat: 38.793632, lng: -77.215533}
        }
    ];

    //LG says: Instantiating a marker
    locations.forEach(function (itm, idx) {
        var marker = new google.maps.Marker({
            map: map,
            position: itm.position,
            title: itm.title,
            category: itm.category,
            animation: google.maps.Animation.DROP,
            id: idx
        });

        marker.animateStart = function () {
            this.setAnimation(google.maps.Animation.BOUNCE);
        };

        marker.animateStop = function () {
            this.setAnimation(null);
        };

        marker.showInfoWindow = function() {
            this.animateStart();
            this.animateStop();

            if (!marker.infowindow) {
                var randomPage = getRandomNumber(0, 10);
                $.ajax({
                    url: `https://api.unsplash.com/search/photos?page=${randomPage}&query=${itm.category}`,
                    headers: {
                        Authorization: 'Client-ID 613c59c7bbe49f91f8c148d8c17f7bfbca63b83e5421c7a857e568e3db87c4e1'
                    }
                })
                    .done(function (images) {
                        var randomImage = getRandomNumber(0, images.results.length);
                        const imageResult = images.results[randomImage];

                        marker.infowindow = new google.maps.InfoWindow({
                            content: `<div>${itm.info}<br/><img src="${imageResult.urls.small}" /></div>`
                        });

                        marker.infowindow.open(map, marker);
                    })
                    .fail(function () {
                        //LG says: this is code implemented as part of the project rubric:
                        alert('something went wrong jQuery AJAX call to Unsplash API')
                    });
            }
            else {
                marker.infowindow.open(map, marker);
            }
        };

        marker.hideInfoWindow = function () {
            if (this.infowindow) {
                setTimeout(function () {
                    this.infowindow.close();
                }.bind(marker), 1000);
            }
        }

        marker.addListener('click', function () {
            marker.showInfoWindow();
        });

        marker.addListener('mouseout', function() {
            marker.hideInfoWindow();
        });

        markers.push(marker);
    });

    //LG says: viewmodel section here:
    var viewModel = {
        categories: ko.observableArray(['Food', 'Entertainment', 'Sports']),

        selectedCategory: ko.observable(),

        markers: ko.observableArray(markers),

        filterMarkers: function () {
            this.markers()
                .forEach(function (marker, idx) {
                    // set map to null to remove marker from map
                    var show = !this.selectedCategory() || marker.category === this.selectedCategory();
                    marker.setMap(show ? map : null);



                    //LG says: Here is less DRY code, but keep as easier for me to think through
                    // var isCategoryNotSelected = !this.selectedCategory();
                    // var selectedCategoryMatchesMarkerCategory = marker.category === this.selectedCategory();

                    // var show = false;
                    // if (isCategoryNotSelected) {
                    //     show = true;
                    // }

                    // if (selectedCategoryMatchesMarkerCategory) {
                    //     show = true
                    // }

                    // if (show) {
                    //     marker.setMap(map);
                    // } else {
                    //     marker.setMap(null);
                    // }


                }.bind(this));

            // force the foreach to refresh
            var data = this.markers().slice(0);
            this.markers([]);
            this.markers(data);
        }
    };

    //LG says: instantiate the viewModel here:
    ko.applyBindings(viewModel);

}//end initMap


