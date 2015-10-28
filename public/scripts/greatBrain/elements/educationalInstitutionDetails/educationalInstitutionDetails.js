GB.educationalInstitutionDetails = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        $educationalInstitutionDetailsImagesCarousel,
        pageData = settings.dataModels.educationalInstitutionDetails,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;


    build = tp('educationalInstitutionDetails', pageData, $parent);

    $educationalInstitutionDetailsImagesCarousel = build.educationalInstitutionDetailsImagesCarousel;

    var imageSliderOptions = {
        images: pageData.images,
        imagesPath: gb.settings.controlsDescriptors.site.educationalInstitutionDetailsCarouselImages,
        imagePathOrig:gb.settings.controlsDescriptors.site.educationalInstitutionDetailsCarouselImagesOrig
    };

    a9.imageSlider($educationalInstitutionDetailsImagesCarousel, imageSliderOptions);


    gb.popupForm($parent);
    $serviceMenuWrapper= build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};