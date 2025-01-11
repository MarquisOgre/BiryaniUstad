


if (jQuery('#google-container').length){
    // MAP ID
    var mapElement = document.getElementById('google-container');

    // MAP OPTIONS
    var mapOptions = {
        zoom: 11,
		zoomControl: true,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
			streetViewControl: false,      			
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    };

    // CREATE GOOGLE MAP using mapElement and mapOptions
    var map = new google.maps.Map(mapElement, mapOptions);


    // MAP INFOWINDOW
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    // MAP MAKER
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        icon: 'http://goresto.goresto.com/wp-content/themes/goresto/images/map_maker.png', // null = default icon
        map: map,
        title: 'Snazzy!'
    });

    // SHOW MAKER TOOLTIP
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.close();
        infowindow.setContent(contentString);
        infowindow.open(map,marker);
    });

    // MAP MAKER CONTENT 
    var contentString = '<div id="content">'+
          '<h1>We are here</h1>'+
          '</div>';
}