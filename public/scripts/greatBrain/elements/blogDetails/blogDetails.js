GB.blogDetails = function ($parent) {
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $feedbackFormWrapper,
        newsData = settings.dataModels.blog[0],
        build;

    build = tp('blogDetails', newsData, $parent);
    gb.popupForm($parent);


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};