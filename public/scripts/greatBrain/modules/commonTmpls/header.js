(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.header = function () {
        return {
            c: 'header-top-line', C: [
                tmpls.languageSwitcher(),
                tmpls.blogLink(),
                tmpls.socials(),
                tmpls.feedbackFormWrapper(),
                tmpls.searchInput()
            ]
        }
    };

    tmpls.searchInput = function(){
        return {e:'input',c:'search-input',a:{placeholder:l10n('searchInputText','firstUpper')}}
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

    tmpls.blogLink = function () {
        return {c: 'blog-link', t: l10n('brainBlogLink')}
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
                languageItem = {e: 'span', t: languages[i].label}
            } else {


                languageItem = {
                    e: 'a',
                    h: '/' + languages[i].code + '/' + locationWithoutLanguage,
                    t: languages[i].label
                }
            }
            content.push(languageItem);
        }

        return {
            c: 'language-switcher', C: content
        }
    };


}(GB));