GB.languageSwitcherMobile = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        $body = document.body,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        build = tp('languageSwitcherMobile', $parent),
        $languageSwitcherMobileIcon = build.languageSwitcherMobileIcon,
        $languageSwitcherMobileWrapper = build.languageSwitcherMobileWrapper;

    function preventCloseLanguageSwitcher(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

    var toggleLanguageSwitcherMobile = function (e) {
        if (a9.hasClass($languageSwitcherMobileWrapper, 'hidden')) {
            a9.removeClass($languageSwitcherMobileWrapper, 'hidden');
        } else {
            a9.addClass($languageSwitcherMobileWrapper, 'hidden');
        }
        preventCloseLanguageSwitcher(e)
    };

    var closeLanguageSwitcherMobile = function(){
        a9.addClass($languageSwitcherMobileWrapper, 'hidden');
    };

    var languageSwitcherMobileWrapperClick = function(e){
        console.log('languageSwitcherMobileWrapperClick');
        preventCloseLanguageSwitcher(e);
    };

    a9.addEvent($languageSwitcherMobileIcon, eventOnPointerEnd, toggleLanguageSwitcherMobile);
    a9.addEvent($body, eventOnPointerEnd, closeLanguageSwitcherMobile);
    a9.addEvent($languageSwitcherMobileWrapper, eventOnPointerEnd, languageSwitcherMobileWrapperClick);
};
