(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.educationalInstitutions = function(){
        return[
            tmpls.mainMenu(),
            tmpls.logo(),
            tmpls.header(),
            tmpls.footer()
        ];
    }

}(GB));
