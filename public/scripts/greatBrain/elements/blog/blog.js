GB.blog = function($parent){
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $feedbackFormWrapper,
        blogData = settings.dataModels.blog,
        build;


    build = tp('blog', blogData, $parent);
    gb.popupForm($parent);


    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};