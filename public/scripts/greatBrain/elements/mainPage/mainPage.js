GB.mainPage = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        startY,
        finishY,
        startT,
        finishT,
        duration = gb.settings.scrollToAnnouncementsDuration || 200,
        build,
        buildBanner,
        $buildLocationLinks=[],
        mainPageData = settings.dataModels.mainPage,
        $feedbackFormWrapper,
        $map,
        $serviceMenuWrapper,
        mainPageSlideTimeout = settings.controlsDescriptors.site.mainPageSlideTimeout | 3000,
        $fragment,
        currentVisibleFrameIndex = -1,
        i,
        $mapLocationLinks,
        $mainImageContentWrapper,
        $contentImages = [];


    build = tp('mainPage', $parent);
    $mainImageContentWrapper = build.mainImageContentWrapper;
    $serviceMenuWrapper = build.servicesMenuWrapper;
    $map = build.map;
    $mapLocationLinks = build.mapLocationLinks;


    //var map;
    function initMap(index) {
        index = index||0;
        var location  = settings.dataModels.mapLocations[index];
        //map = new google.maps.Map(document.getElementById('map'), {
        //    center: {lat: -34.397, lng: 150.644},
        //    zoom: 8
        //});
        var lat = location.location.lat;
        var lng = location.location.lng;


        console.log(location);

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
                    content: location.location.content
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
            a9.each($buildLocationLinks,function(buildLocationLink){
                a9.removeClass(buildLocationLink,'active');
            });
            a9.addClass(this,'active');
            initMap(index);
        });


    });

    $mapLocationLinks.appendChild($fragment);


    initMap();


    gb.servicesMenu($serviceMenuWrapper);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);

    gb.popupForm($parent);


    $fragment = global.document.createDocumentFragment();

    var j = 0;
    a9.each(mainPageData.mainBanners, function (mainBanner) {
        mainBanner.order = j;
        buildBanner = tp('mainImageContent', mainBanner, $fragment);
        $contentImages.push(buildBanner.r);
        j++;
    });

    var sm = tp('showMore', $fragment);
    a9.addEvent(sm.r, eventOnPointerEnd, showDetails);

    function showDetails() {
        scrollToTop();
    }

    function scrollToTop() {
        finishY = (a9.$('mainPageAnnouncements').offsetTop || 0);
        //finishY = (a9.$('contentBlock'+index).offsetTop || 0);
        startY = ((global.pageYOffset || doc.scrollTop) || 0) - (doc.clientTop || 0);
        startT = +(new Date());
        finishT = startT + duration;
        setTimeout(animate, 15);
    }

    function animate() {
        var now = +(new Date()),
            shift = (now > finishT) ? 1 : (now - startT) / duration;
        global.scrollTo(0, interpolate(startY, finishY, easing(shift)));
        (now > finishT) || setTimeout(animate, 15);
    }

    function interpolate(source, target, shift) {
        return (source + ((target - source) * shift));
    }

    function easing(pos) {
        return (-Math.cos(pos * Math.PI) / 2) + .5;
    }

    $mainImageContentWrapper.appendChild($fragment);


    setTimeout(slideImageFrame, 10);

    function setInactiveImages() {
        //console.log($contentImages[0]);
        for (i = 0; i < $contentImages.length; i++) {
            a9.removeClass($contentImages[i], "active");
        }
    }

    function updateCurrentVisibleFrameIndex() {
        currentVisibleFrameIndex++;
        if (currentVisibleFrameIndex >= $contentImages.length) {
            currentVisibleFrameIndex = 0;
        }
    }

    function setActiveImage() {
        for (i = 0; i < $contentImages.length; i++) {
            if (i == currentVisibleFrameIndex) {
                a9.addClass($contentImages[i], "active");
            }
        }
    }

    function slideImageFrame() {
        setInactiveImages();
        updateCurrentVisibleFrameIndex();
        setActiveImage();
        setTimeout(slideImageFrame, mainPageSlideTimeout);
    }


};