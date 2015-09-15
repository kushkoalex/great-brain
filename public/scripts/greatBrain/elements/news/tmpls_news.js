(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.news = function(){
        return [
            tmpls.headerBottom(),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(4),
            tmpls.header(),
            tmpls.logo()
        ];
    };

}(GB));