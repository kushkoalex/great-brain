A9.ready(function (a9, global) {
    var gb = global.GB,
    //settings = gb.settings,
    //$body = global.document.body,
    //tp = global.cnCt.tp,
        $ = a9.$,
        $mainPage = $('mainPage'),
        $mainPageMobile = $('mainPageMobile'),
        $educationalInstitutions = $('educationalInstitutions'),
        $educationalInstitutionDetails = $('educationalInstitutionDetails'),
        $educationKinds = $('educationKinds'),
        $news = $('news'),
        $newsDetails = $('newsDetails'),
        $blog = $('blog'),
        $roadMap = $('roadMap'),
        $blogDetails = $('blogDetails'),
        $partners = $('partners'),
        $services = $('services'),
        $siteContent = $('siteContent'),
        $contacts = $('contacts'),
        $intro = $('intro'),
        $scrollToTop,


    //domNodesQuery = a9.$cs('showDetails'),
    //$showDetails = domNodesQuery.showDetails,
        i,
        u;


    //a9.deviceInfo.isMobileDevice = true;

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

    if ( $services!== null) {
        gb.services($services);
    }

    if ($siteContent!== null) {
        gb.siteContent($siteContent);
    }

    if ($contacts !== null) {
        gb.contacts($contacts);
    }

    if ($intro !== null) {
        gb.intro($intro);
    }



    if ($mainPageMobile !== null) {
        gb.mainPageMobile($mainPageMobile);
    }


    $scrollToTop = $('scrollToTop');
    if ($scrollToTop !== null) {
        gb.scrollToTop($scrollToTop);
    }

    gb.stickyPanels();

});