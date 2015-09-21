(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.blogDetails = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.blogDetailsContent(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(),
            tmpls.header(),
            tmpls.logo()
        ];
    };


    tmpls.blogDetailsContent = function (blogItem) {
        var
            descriptors = gb.settings.controlsDescriptors.site,
            data = {
                url: descriptors.blogUrl,
                urlText: l10n('brainBlogLink', 'firstUpper'),
                title: blogItem.title,
                date: blogItem.date
            };

        return {
            c: 'blog-details-content', C: [
                tmpls.siteContentTitleContainer(data),
                tmpls.blogDetailsInfo(blogItem)
            ]
        }

    };

    tmpls.blogDetailsInfo = function (pageData) {
        return {
            c: 'blog-details-info', C: [
                {
                    c: 'description', H: pageData.shortDescription
                },
                {
                    c: 'text', H: pageData.text
                }
            ]
        }
    };

}(GB));