(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.logo = function () {
        return {
            c: 'logo', C: [
                {c: 'logo-pattern'},
                {c: 'logo-sign',a:{id:'logoSign'}}
            ]
        };
    }


}(GB));