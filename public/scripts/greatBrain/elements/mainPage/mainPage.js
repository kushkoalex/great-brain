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
        mainPageData = settings.dataModels.mainPage,
        $feedbackFormWrapper,
        mainPageSlideTimeout= settings.controlsDescriptors.site.mainPageSlideTimeout | 3000,
        $fragment,
        currentVisibleFrameIndex = -1,
        i,
        $mainImageContentWrapper,
        $contentImages = [];


    build = tp('mainPage', $parent);
    $mainImageContentWrapper = build.mainImageContentWrapper;


    gb.popupForm($parent);

    $fragment = global.document.createDocumentFragment();

    var j=0;
    a9.each(mainPageData.mainBanners, function(mainBanner){
        mainBanner.order=j;
        buildBanner = tp('mainImageContent', mainBanner, $fragment);
        $contentImages.push(buildBanner.r);
        j++;
    });

    var sm = tp('showMore',$fragment);

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


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);


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