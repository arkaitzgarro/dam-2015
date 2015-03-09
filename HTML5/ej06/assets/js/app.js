(function(){
    console.log('Geolocation...');

    navigator.geolocation.getCurrentPosition(function(position){
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        var myOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            dragable: false
        };

        var stylez = [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];

        var map = new google.maps.Map(document.getElementById("map_container"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });

        var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        var options = {
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#0000FF',
            fillOpacity: 0.35,
            map: map,
            center: latlng,
            radius: position.coords.accuracy
        };

        circle = new google.maps.Circle(options);

        google.maps.event.addDomListener(window, 'resize', function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    });
})();