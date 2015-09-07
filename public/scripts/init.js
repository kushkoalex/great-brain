A9.ready(function (a9, global) {
    var gb = global.GB,
        //settings = gb.settings,
        //$body = global.document.body,
        //tp = global.cnCt.tp,
        $ = a9.$,
        $mainPage = $('mainPage'),
        $educationalInstitutions = $('educationalInstitutions'),
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



    $scrollToTop = $('scrollToTop');
    if ($scrollToTop !== null) {
        gb.scrollToTop($scrollToTop);
    }

    gb.stickyPanels();

});