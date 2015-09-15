GB.educationalInstitutionDetails = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        $educationalInstitutionDetailsImagesCarousel,
        pageData = settings.dataModels.educationalInstitutionDetails,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;


    build = tp('educationalInstitutionDetails', pageData, $parent);

    $educationalInstitutionDetailsImagesCarousel = build.educationalInstitutionDetailsImagesCarousel;
    a9.imageSlider($educationalInstitutionDetailsImagesCarousel);
    gb.popupForm($parent);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};