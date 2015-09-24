GB.blogDetails = function ($parent) {
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $serviceMenuWrapper,
        $feedbackFormWrapper,
        newsData = settings.dataModels.blog[0],
        build;

    build = tp('blogDetails', newsData, $parent);
    gb.popupForm($parent);
    $serviceMenuWrapper= build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};