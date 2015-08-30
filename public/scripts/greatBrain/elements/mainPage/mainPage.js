GB.mainPage = function ($parent) {
    var gb = this,
        global = gb.global,
        a9=global.A9,
        tp = global.cnCt.tp,
        build,
        $feedbackFormWrapper;


     build = tp('mainPage', $parent);
     $feedbackFormWrapper = build.feedbackFormWrapper;
     gb.feedbackForm($feedbackFormWrapper);

};