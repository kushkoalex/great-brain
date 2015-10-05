GB.contacts = function($parent){
    var gb = this,
        global = gb.global,
        tp = global.cnCt.tp,
        settings = gb.settings,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        contentData = settings.dataModels.contacts,
        $map,
        $mapLocationLinks,
        build;

    contentData.activeMenuItemId = 5;

    build = tp('contacts', contentData, $parent);
    $serviceMenuWrapper= build.servicesMenuWrapper;
    $map=build.map;
    $mapLocationLinks=build.mapLocationLinks;
    $feedbackFormWrapper = build.feedbackFormWrapper;

    gb.popupForm($parent);
    gb.servicesMenu($serviceMenuWrapper);
    gb.map($map,$mapLocationLinks);
    gb.feedbackForm($feedbackFormWrapper);
};