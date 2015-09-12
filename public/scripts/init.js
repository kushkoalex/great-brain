A9.ready(function (a9, global) {
    var gb = global.GB,
    //settings = gb.settings,
    //$body = global.document.body,
    //tp = global.cnCt.tp,
        $ = a9.$,
        $mainPage = $('mainPage'),
        $educationalInstitutions = $('educationalInstitutions'),
        $educationalInstitutionDetails = $('educationalInstitutionDetails'),
        $educationKinds = $('educationKinds'),
        $scrollToTop,


    //domNodesQuery = a9.$cs('showDetails'),
    //$showDetails = domNodesQuery.showDetails,
        i,
        u;


    global.cnCt.bindTemplates(gb.tmpls);

    if ($mainPage !== null) {
        gb.mainPage($mainPage);
    }

    if ($educationalInstitutions !== null) {
        gb.educationalInstitutions($educationalInstitutions);
    }

    if ($educationalInstitutionDetails !== null) {
        gb.educationalInstitutionDetails($educationalInstitutionDetails);
    }

    if ($educationKinds !== null) {
        gb.educationKinds($educationKinds);
    }


    $scrollToTop = $('scrollToTop');
    if ($scrollToTop !== null) {
        gb.scrollToTop($scrollToTop);
    }

    gb.stickyPanels();

});