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
        $news = $('news'),
        $newsDetails = $('newsDetails'),
        $blog = $('blog'),
        $roadMap = $('roadMap'),
        $blogDetails = $('blogDetails'),
        $partners = $('partners'),
        $contacts = $('contacts'),
        $intro = $('intro'),
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

    if ($news !== null) {
        gb.news($news);
    }

    if ($newsDetails !== null) {
        gb.newsDetails($newsDetails);
    }

    if ($blog !== null) {
        gb.blog($blog);
    }

    if ($blogDetails !== null) {
        gb.blogDetails($blogDetails);
    }

    if ($roadMap !== null) {
        gb.roadMap($roadMap);
    }

    if ($partners !== null) {
        gb.partners($partners);
    }

    if ($contacts !== null) {
        gb.contacts($contacts);
    }

    if ($intro !== null) {
        gb.intro($intro);
    }



    $scrollToTop = $('scrollToTop');
    if ($scrollToTop !== null) {
        gb.scrollToTop($scrollToTop);
    }


    gb.stickyPanels();

});