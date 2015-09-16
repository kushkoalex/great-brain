(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.blog = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.blogContent(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(3),
            tmpls.header(),
            tmpls.logo()
        ];
    };

    tmpls.blogContent = function (pageData) {
        var blogContentItems = [];

        a9.each(pageData, function (newsItem) {
            blogContentItems.push(tmpls.blogContentItem(newsItem));
        });

        blogContentItems.push({c: 'clear'});

        return {
            c: 'blog-list',
            C: [{c: 'blog-content-title', t: l10n('siteMenuNewsTitle', 'firstUpper')}, {
                c: 'blog-list-content',
                C: blogContentItems
            }]
        }
    };


    tmpls.blogContentItem = function (blogItem) {
        return {
            c: 'blog-content-item',
            C: [
                {
                    c: 'thumb',
                    C: {
                        e: 'a',
                        h: gb.settings.controlsDescriptors.site.blogDetailsUrl,
                        C: {e: 'img', a: {src: gb.settings.controlsDescriptors.site.blogThumbnails + blogItem.thumb}}
                    }
                },
                {c: 'date', t: blogItem.date},
                {c: 'title', C: {e: 'a', h: gb.settings.controlsDescriptors.site.blogDetailsUrl, H: blogItem.title}},
                {c: 'short-description', H: blogItem.shortDescription}
            ]
        }
    };

}(GB));