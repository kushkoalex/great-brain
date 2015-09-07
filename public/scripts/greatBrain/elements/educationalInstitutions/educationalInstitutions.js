GB.educationalInstitutions = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,


        build,
        $fragment;

    build = tp('educationalInstitutions', $parent);

    gb.popupForm($parent);
};
