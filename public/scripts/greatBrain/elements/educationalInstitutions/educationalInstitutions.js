GB.educationalInstitutions = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        pageData = settings.dataModels.educationalInstitutions,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;

    build = tp('educationalInstitutions', $parent);
    $educationalInstitutionsContentItems = build.educationalInstitutionsContentItems;
    gb.popupForm($parent);

    $fragment = global.document.createDocumentFragment();


    a9.each(pageData,function(dataItem){

        buildItem = tp('educationalInstitutionsContentItem', dataItem, $fragment);

    });

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);


    $educationalInstitutionsContentItems.appendChild($fragment);

};
