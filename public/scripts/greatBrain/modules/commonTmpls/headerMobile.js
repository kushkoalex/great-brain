(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.headerMobile = function () {
        return {
            c: 'header-mobile', C: [{n: 'languageSwitcherMobile'}, {n: 'mainMenuMobile'}]
        }
    };

    tmpls.languageSwitcherMobile = function () {
        return [
            {c: 'language-switcher-icon', n: 'languageSwitcherMobileIcon'},
            {
                c: 'language-switcher-wrapper hidden',
                n: 'languageSwitcherMobileWrapper',
                C: [{c: 'triangle'}, tmpls.languageSwitcher()]
            }
        ]
    };

    tmpls.mainMenuMobile = function () {
        return {c: 'main-menu-icon', n: 'mainMenuMobileIcon'}
    };

    tmpls.mainMenuMobileLayout = function () {
        var descriptors = gb.settings.controlsDescriptors.site;
        // TODO: add hidden classname into main-menu-mobile-layout

        return {c: 'main-menu-mobile-layout ', C: [
            tmpls.countriesSelectorMenuMobileLayout(),
            tmpls.serviceMenuMobileLayout(),
            {c:'head',C:[{c: 'close', a: {id: 'closeMainMenuMobileBtn'}},{c:'search-container',C:{e:'input', a:{type:'text',placeholder:l10n('searchInputText','firstUpper')}}}]},
            tmpls.mainMenuMobileContent(),
            {c:'main-menu-socials',C:[
                {c: 'google', C: {e: 'a', h: descriptors.googleLink}},
                {c: 'fb', C: {e: 'a', h: descriptors.fbLink}},
                {c: 'instagram', C: {e: 'a', h: descriptors.instagramLink}}]}
        ]}
    };

    tmpls.mainMenuMobileContent = function () {
        var
            menuData = gb.settings.dataModels.mainMenu,
            menuItem,
            menuItems = [],
            i;
        for (i = 0; i < menuData.length; i++) {
            if(menuData[i].isServiceMenuItem){
                menuItem = {c:'service-menu-menu-item', e:'li',C:{e:'a',h:'#',H:menuData[i].title}};
            }else
            if(menuData[i].popup){
                menuItem = {c:'countries-selector-menu-item', e:'li',C:{e:'a',h:'#',H:menuData[i].title}};
            }else {
                menuItem = {e: 'li', C: {e: 'a', h: menuData[i].url, H: menuData[i].title}};
            }

            menuItems.push(menuItem);
        }
        menuItems.push({e:'li',C:{ c:'separator'}});
        menuItems.push({e:'li',C:{e:'a',h:gb.settings.controlsDescriptors.site.blogUrl,t:l10n('brainBlogLink')}});
        //menuItems.push({e:'li',C:{e:'a',h:gb.settings.controlsDescriptors.site.brainBlogLink,t:l10n('feedbackLinkText')}});
        return {c:'main-menu-mobile',C:{e:'ul',C:menuItems}}

    };

    tmpls.countriesSelectorMenuMobileLayout = function(){
        var countries = gb.settings.dataModels.educationalCountries,
            countriesContent=[];

        a9.each(countries,function(country){
            countriesContent.push({e:'li', C:{e: 'a', h: country.url, t: country.title}});
        });

        // TODO: hidden

        return{c:'countries-selector-menu-mobile-layout hidden',a:{id:'countriesSelectorMenuMobileLayout'}, C:[{c:'title',t:l10n('selectEducationCountryShort')+':'},{c:'items',C:{e:'ul',C:countriesContent}}]}
    };

    tmpls.serviceMenuMobileLayout = function(){
        var countries = gb.settings.dataModels.servicesMenu,
            content=[];

        a9.each(countries,function(country){
            content.push({c:'menu-item', C:{e: 'a', h: country.url, t: country.title}});
        });

        // TODO: hidden

        return{c:'countries-selector-menu-mobile-layout hidden',a:{id:'serviceMenuMobileLayout'}, C:[{c:'title',t:l10n('ourServices')+':'},{c:'items',C:content}]}
    };


}(GB));