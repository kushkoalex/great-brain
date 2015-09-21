GB.partners = function($parent){
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $feedbackFormWrapper,
        contentData = settings.dataModels.siteContent[1],
        build;

    contentData.activeMenuItemId = 4;

    build = tp('simpleSiteContent', contentData, $parent);
    gb.popupForm($parent);


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};