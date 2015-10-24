(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.header = function (showBlog, showRoadMap) {
        return {
            c: 'header-top-line', C: [
                tmpls.languageSwitcher(),
                tmpls.roadMapLink(showRoadMap),
                tmpls.blogLink(showBlog),
                tmpls.socials(),
                tmpls.feedbackFormWrapper(),
                tmpls.searchInput()
            ]
        }
    };

    tmpls.searchInput = function () {
        return {e: 'input', c: 'search-input', a: {placeholder: l10n('searchInputText', 'firstUpper')}}
    };

    tmpls.socials = function () {
        var descriptors = gb.settings.controlsDescriptors.site;
        return {
            c: 'socials', C: [
                {c: 'google', C: {e: 'a', h: descriptors.googleLink}},
                {c: 'fb', C: {e: 'a', h: descriptors.fbLink}},
                {c: 'instagram', C: {e: 'a', h: descriptors.instagramLink}}]
        }
    };

    tmpls.blogLink = function (current) {
        if (current === true) {
            return {c: 'blog-link', C: {H: l10n('brainBlogLink')}}
        }
        return {c: 'blog-link', C: {e: 'a', h: gb.settings.controlsDescriptors.site.blogUrl, H: l10n('brainBlogLink')}}
    };

    tmpls.roadMapLink = function (current) {
        if (current === true) {
            return {c: 'road-map-link', C: {H: l10n('roadMapLink')}}
        }
        return {
            c: 'road-map-link',
            C: {e: 'a', h: gb.settings.controlsDescriptors.site.roadMapUrl, H: l10n('roadMapLink')}
        }
    };

    tmpls.languageSwitcher = function () {
        var languages = gb.settings.languages,
            currentLanguage = gb.settings.currentLanguage,
            content = [],
            languageItem,
            location = gb.global.location,

            clearLocation = location.href.toString().split(location.host)[1],
            locationWithoutLanguage = '',
            locationWithoutLanguageArray;
        if (clearLocation.length == 3) {
            clearLocation += '/'
        }

        if (clearLocation.length > 0) {
            locationWithoutLanguageArray = clearLocation.split('/' + currentLanguage + '/');
            if (locationWithoutLanguageArray.length > 1) {
                locationWithoutLanguage = locationWithoutLanguageArray[1];
            }
        }
        else {
            locationWithoutLanguage = '';
        }

        if (locationWithoutLanguage.indexOf('/') == 0) {
            locationWithoutLanguage = locationWithoutLanguage.substr(1);
        }

        for (var i = 0; i < languages.length; i++) {
            if (languages[i].code == currentLanguage) {
                languageItem = tmpls.languageSwitcherItemCurrent(languages[i])
            } else {
                languageItem = tmpls.languageSwitcherItem(languages[i], locationWithoutLanguage)
            }
            content.push(languageItem);
        }

        return {
            c: 'language-switcher', C: content
        }
    };

    tmpls.languageSwitcherItem = function (lanItem, locationWithoutLanguage) {
        if (a9.deviceInfo.isMobileDevice) {
            return {c:'language-switcher-item',
                C: {
                    e: 'a',
                    h: '/' + lanItem.code + '/' + locationWithoutLanguage,
                    t: lanItem.labelFull
                }
            }
        } else {
            return {
                e: 'a',
                h: '/' + lanItem.code + '/' + locationWithoutLanguage,
                t: lanItem.label
            }
        }
    };

    tmpls.languageSwitcherItemCurrent = function (lanItem) {
        if (a9.deviceInfo.isMobileDevice) {
            return {c:'language-switcher-item',t: lanItem.labelFull}
        } else {
            return {e: 'span', t: lanItem.label}
        }
    };


}(GB));