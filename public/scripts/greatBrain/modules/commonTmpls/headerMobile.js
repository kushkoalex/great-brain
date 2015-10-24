(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.headerMobile = function () {
        return {
            c: 'header-mobile',C:[{n:'languageSwitcherMobile'},{n:'mainMenuMobile'}]
        }
    };

    tmpls.languageSwitcherMobile = function(){
        return[
            {c: 'language-switcher-icon',n:'languageSwitcherMobileIcon'},
            {c:'language-switcher-wrapper hidden', n:'languageSwitcherMobileWrapper', C:[{c:'triangle'},tmpls.languageSwitcher()]}
        ]
    };

    tmpls.mainMenuMobile = function(){
        return {c:'main-menu-icon',n:'mainMenuMobileIcon'}
    };

    tmpls.mainMenuMobileLayout = function(){
        return {c:'main-menu-mobile-layout hidden',C:[{c:'close',a:{id:'closeMainMenuMobileBtn'}}]}
    }



}(GB));