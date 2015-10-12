GB.newsDetails = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        //eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        $newsImagesCarousel,
        //$sliderImages,
        newsData = settings.dataModels.newsDetails,
        build,
        u;

    build = tp('newsDetails', newsData, $parent);
    $newsImagesCarousel = build.newsImagesCarousel;

    //var onDatesChange = function () {
    //    //console.log('callback called');
    //};


    //a9.imageSlider($newsImagesCarousel, {callBackValueChange: onDatesChange});
    a9.imageSlider($newsImagesCarousel);


    gb.popupForm($parent);
    $serviceMenuWrapper= build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};