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
        $educationKindsMobile = $('educationKindsMobile'),
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
        if (a9.deviceInfo.isMobileDevice) {
            gb.mainPageMobile($mainPage);
        }
        else {
            gb.mainPage($mainPage);
        }
    }

    if ($educationKinds !== null) {
        if (a9.deviceInfo.isMobileDevice) {
            gb.educationKindsMobile($educationKinds);
        }
        else {
            gb.educationKinds($educationKinds);
        }
    }

    if ($mainPageMobile !== null) {
        gb.mainPageMobile($mainPageMobile);
    }

    if ($educationKindsMobile !== null) {
        gb.educationKindsMobile($educationKindsMobile);
    }


    if ($educationalInstitutions !== null) {
        gb.educationalInstitutions($educationalInstitutions);
    }

    if ($educationalInstitutionDetails !== null) {
        gb.educationalInstitutionDetails($educationalInstitutionDetails);
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

    if ($services !== null) {
        gb.services($services);
    }

    if ($siteContent !== null) {
        gb.siteContent($siteContent);
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