(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.contacts = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.contactsContentWrapper(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(pageData.activeMenuItemId),
            tmpls.header(pageData.showBlog, pageData.showRoadMap),
            tmpls.logo()
        ];
    };

    tmpls.contactsContentWrapper = function (data) {
        return {
            c: 'simple-site-content', C: [
                {c: 'contacts-title', t: data.title},
                tmpls.map()
            ]
        }
    };

}(GB));