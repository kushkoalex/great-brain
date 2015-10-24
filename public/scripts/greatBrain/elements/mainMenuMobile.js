GB.mainMenuMobile = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        build = tp('mainMenuMobile', $parent),
        $mainMenuMobileIcon = build.mainMenuMobileIcon,
        $mainMenuMobileLayout = a9.$c('main-menu-mobile-layout')[0],
        $closeMainMenuMobileBtn = a9.$('closeMainMenuMobileBtn'),
        u;


    var toggleMainMenuMobile = function () {
        a9.removeClass($mainMenuMobileLayout, 'hidden');
    };

    var closeMenu = function(){
        a9.addClass($mainMenuMobileLayout, 'hidden');
    };

    a9.addEvent($mainMenuMobileIcon, eventOnPointerEnd, toggleMainMenuMobile);
    a9.addEvent($closeMainMenuMobileBtn,eventOnPointerEnd,closeMenu);
};