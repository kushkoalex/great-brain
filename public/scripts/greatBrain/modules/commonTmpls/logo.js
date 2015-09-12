(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.logo = function (isMainPage) {
        if (isMainPage === true) {
            return {
                c: 'logo', C: [
                    {c: 'logo-pattern'},
                    {c: 'logo-sign', a: {id: 'logoSign'}}
                ]
            };
        }

        return {
            e: 'a', h: gb.settings.controlsDescriptors.site.mainPageUrl,

            c: 'logo', C: [
                {c: 'logo-pattern'},
                {e: 'a', h: gb.settings.controlsDescriptors.site.mainPageUrl, c: 'logo-sign', a: {id: 'logoSign'}}
            ]
        };

    }


}(GB));