// JavaScript Document
//Variables


//Scritps

//google maps
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(-37.841548,144.995459); // South Yarra
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            stylers: [{
                hue: '#382F29'
            }, {
                invert_lightness: true
            }, {
                saturation: -70
            }, {
                lightness: 33
            }, {
                gamma: 0.5
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#2D333C'
            }]
        }]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var map = document.getElementById('map');


    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(map, mapOptions);



    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">3141</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Location:</b> 123, A Street, South Yarra'+
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });



    var marker = new google.maps.Marker({
        map: map,
        title: "3141",
        animation: google.maps.Animation.BOUNCE,
        position: myLatlng
    });
    marker.setMap(map);


google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
});
}
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);




//Section Heights
//header
$(function() {
    $('header').css({
        'height': ($(window).height() - $('nav').height())
    }); // New height
    $(window).resize(function() {
        // This will execute whenever the window is resized
        $('header').css({
            'height': ($(window).height() - $('nav').height())
        }); // New height
    });
});
//location
/*
$(function() {
    $('section [title="location"]').css({
        'height': ($(window).height() - $('nav').height())
    }); // New height
    $(window).resize(function() {
        // This will execute whenever the window is resized
        $('section [title="location"] #map').css({
            'height': ($(window).height() - $('nav').height() - $('section [title="location"] p').height())
        });
    });
});
*/



//Navbar
//variables

var navSmallHeight = '50px';
var navBigHeight = '100px';
var distanceToShrinkAt = '100';
var effectDurration = '500';
$(function() {
    $('nav').data('size', 'big');
});

$(window).scroll(function() {
    var $nav = $('nav');
    var $a = $('nav > a');
    if ($('body').scrollTop() > distanceToShrinkAt) {
        if ($nav.data('size') == 'big') {
            $nav.data('size', 'small').stop().animate({
                height: navSmallHeight,
                'line-height': navSmallHeight
            }, effectDurration, false);
            $a.data('size', 'small').stop().animate({
                height: navSmallHeight,
                'line-height': navSmallHeight
            }, effectDurration, false);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size', 'big').stop().animate({
                height: navBigHeight,
                'line-height': navBigHeight
            }, effectDurration, false);
            $a.data('size', 'big').stop().animate({
                height: navBigHeight,
                'line-height': navBigHeight
            }, effectDurration, false);


        }
    }
});




//day of week
$(function() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    $('header p').html("It's a " + n + ". Come say Hi - We're open!");
});

//smooth scroll
$(function() {
    $("nav,header").on("click", "a", function(evt) {
		var navHeight = $('nav').height();

        evt.preventDefault();
        var target = $(this).attr("href");
        history.pushState(null, null, target);
        target = target.substr(0, target.length - 5);
        if (target.length) {
            $('html,body').animate({
                scrollTop: $("[name=" + target + "]").offset().top - navHeight
            }, 1000);
            return false;
        }
    });
});