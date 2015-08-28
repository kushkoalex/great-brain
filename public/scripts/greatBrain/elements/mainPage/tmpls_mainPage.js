(function(gb){
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.mainPage = function(){
        return [
            {c:'main-banner'},
            tmpls.header(),
            tmpls.footer()
        ]
    };

}(GB));