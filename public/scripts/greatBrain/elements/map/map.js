GB.map = function ($map, $mapLocationLinks) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $buildLocationLinks = [],
        $fragment;


    function initMap(index) {
        index = index || 0;
        var location = settings.dataModels.mapLocations[index];
        var lat = location.location.lat;
        var lng = location.location.lng;

        //console.log(location);


        var contentInfo = '<div class="map-location-info-content"><div class="address">' + location.location.contentAddress + '</div><div class="phone">' + location.location.contentPhone + '</div><div class="email"><a href="mailto:' + location.location.contentEmail + '">' + location.location.contentEmail + '</a></div></div>'

        google.load('maps', '3', {
            callback: function () {
                var coordinates = new google.maps.LatLng(lat, lng);
                var mapOptions = {
                    center: coordinates,
                    mapTypeControl: false,
                    zoom: 14
                };
                var map = new google.maps.Map($map, mapOptions);
                var infoWindow = new google.maps.InfoWindow({
                    content: contentInfo
                });
                var marker = new google.maps.Marker({
                    position: coordinates,
                    map: map,
                    title: location.location.title
                });
                infoWindow.open(map, marker);
            }
        });
    }


    $fragment = global.document.createDocumentFragment();

    a9.each(settings.dataModels.mapLocations, function (mapLocation, index) {

        $buildLocationLinks[index] = tp('mapLocationLink', mapLocation, $fragment).r;
        if (index === 0) {
            a9.addClass($buildLocationLinks[index], 'active');
        }

        a9.addEvent($buildLocationLinks[index], eventOnPointerEnd, function () {
            a9.each($buildLocationLinks, function (buildLocationLink) {
                a9.removeClass(buildLocationLink, 'active');
            });
            a9.addClass(this, 'active');
            initMap(index);
        });


    });

    $mapLocationLinks.appendChild($fragment);

    initMap();
};
