(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.footer = function () {
        return {
            c: 'footer', C: [
                {c: 'copyright', H: a9.supplant(l10n('copyright'), new Date().getFullYear())},
                {
                    c: 'em',
                    H: l10n('emMadeIn', 'firstUpper'),
                    C: [
                        {e: 'br'},
                        {e: 'a', h: gb.settings.controlsDescriptors.site.urlEM, t: l10n('emStudio', 'firstUpper')}
                    ]
                }
            ]
        };
    }


}(GB));