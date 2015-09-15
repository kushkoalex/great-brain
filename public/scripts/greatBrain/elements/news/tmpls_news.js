(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.news = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.newsContent(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(3),
            tmpls.header(),
            tmpls.logo()
        ];
    };

    tmpls.newsContent = function (pageData) {
        var newsContentItems = [];

        a9.each(pageData, function (newsItem) {
            newsContentItems.push(tmpls.newsContentItem(newsItem));
        });

        newsContentItems.push({c: 'clear'});

        return {
            c: 'news-list',
            C: [{c: 'news-content-title', t: l10n('siteMenuNewsTitle', 'firstUpper')}, {
                c: 'news-list-content',
                C: newsContentItems
            }]
        }
    };


    tmpls.newsContentItem = function (newsItem) {
        return {
            c: 'news-content-item',
            C: [
                {
                    c: 'thumb',
                    C: {e:'a', h:gb.settings.controlsDescriptors.site.newsDetailsUrl,C:{ e: 'img', a: {src: gb.settings.controlsDescriptors.site.newsThumbnails + newsItem.thumb}}}
                },
                {
                    c: 'info', C: [
                    {c: 'date',t: newsItem.date},
                    {
                        c: 'info-block', C: [
                        {c: 'title',C:{ e:'a',h:gb.settings.controlsDescriptors.site.newsDetailsUrl, H:newsItem.title}},
                        {c: 'short-description',H:newsItem.shortDescription}]
                    }]
                }]
        }
    };

}(GB));