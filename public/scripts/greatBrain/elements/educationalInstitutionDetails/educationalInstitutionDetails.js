GB.educationalInstitutionDetails = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        pageData = settings.dataModels.educationalInstitutionDetails,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;


    build = tp('educationalInstitutionDetails', pageData, $parent);
    gb.popupForm($parent);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};