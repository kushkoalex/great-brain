(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.simpleSiteContent = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.simpleSiteContentWrapper(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(pageData.activeMenuItemId),
            tmpls.header(pageData.showBlog,pageData.showRoadMap),
            tmpls.logo()
        ];
    };

    tmpls.simpleSiteContentWrapper = function (blogItem) {
        var
            data = {
                title: blogItem.title
            };

        return {
            c: 'blog-details-content', C: [
                tmpls.siteContentTitleContainer(data),
                tmpls.simpleSiteContentInfo(blogItem)
            ]
        }

    };

    tmpls.simpleSiteContentInfo = function (pageData) {
        return {
            c: 'blog-details-info', C: [
                //{
                //    c: 'description', H: pageData.shortDescription
                //},
                {
                    c: 'text', H: pageData.text
                }
            ]
        }
    };

}(GB));