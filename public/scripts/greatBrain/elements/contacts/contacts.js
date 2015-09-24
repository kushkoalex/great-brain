GB.contacts = function($parent){
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        contentData = settings.dataModels.siteContent[2],
        build;

    contentData.activeMenuItemId = 5;

    build = tp('simpleSiteContent', contentData, $parent);
    gb.popupForm($parent);
    $serviceMenuWrapper= build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};