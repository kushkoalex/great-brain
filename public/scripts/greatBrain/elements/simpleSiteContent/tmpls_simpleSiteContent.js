(function (gb) {
    var tmpls = gb.tmpls;

    tmpls.simpleSiteContent = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.simpleSiteContentWrapper(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(pageData.activeMenuItemId),
            tmpls.header(pageData.showBlog, pageData.showRoadMap),
            tmpls.logo()
        ];
    };

    tmpls.simpleSiteContentWrapper = function (blogItem) {
        var
            data = {
                title: blogItem.title
            };

        return {
            c: 'simple-site-content', C: [
                tmpls.siteContentTitleContainer(data),
                tmpls.simpleSiteContentInfo(blogItem)
            ]
        }

    };

    tmpls.simpleSiteContentInfo = function (pageData) {
        return {
            c: 'simple-site-info', C: [
                {
                    c: 'text', H: pageData.text
                }
            ]
        }
    };

}(GB));