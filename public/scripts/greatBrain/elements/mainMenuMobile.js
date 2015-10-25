GB.mainMenuMobile = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        build = tp('mainMenuMobile', $parent),
        $mainMenuMobileIcon = build.mainMenuMobileIcon,
        $mainMenuMobileLayout = a9.$c('main-menu-mobile-layout')[0],
        $countriesSelectorMenuMobileLayout = a9.$('countriesSelectorMenuMobileLayout'),
        $serviceMenuMobileLayout = a9.$('serviceMenuMobileLayout'),
        $closeMainMenuMobileBtn = a9.$('closeMainMenuMobileBtn'),
        $countriesSelectorLink = a9.$c('countries-selector-menu-item')[0],
        $serviceMenuLink = a9.$c('service-menu-menu-item')[0],
        u;

    var toggleMainMenuMobile = function () {
        a9.removeClass($mainMenuMobileLayout, 'hidden');
    };

    var closeMenu = function(){
        a9.addClass($mainMenuMobileLayout, 'hidden');
        a9.addClass($countriesSelectorMenuMobileLayout, 'hidden');
        a9.addClass($serviceMenuMobileLayout, 'hidden');

    };

    a9.addEvent($countriesSelectorLink,eventOnPointerEnd,function(){
        a9.removeClass($countriesSelectorMenuMobileLayout, 'hidden');
    });

    a9.addEvent($serviceMenuLink,eventOnPointerEnd,function(){
        a9.removeClass($serviceMenuMobileLayout, 'hidden');
    });

    a9.addEvent($mainMenuMobileIcon, eventOnPointerEnd, toggleMainMenuMobile);
    a9.addEvent($closeMainMenuMobileBtn,eventOnPointerEnd,closeMenu);
};