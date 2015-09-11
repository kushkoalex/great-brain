(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.banners = function () {
        var bannersData = gb.settings.dataModels.banners,
            banners = [],
            banner,
            bannerClassName,
            captionText;

        a9.each(bannersData, function (bannerData) {

            switch (bannerData.type) {
                case'blog':
                    bannerClassName = 'blog';
                    captionText = l10n('bannerBlogCaption');
                    break;
                case'specialOffer':
                    bannerClassName = 'specialOffer';
                    captionText = l10n('bannerSpecialOfferCaption');
                    break;
                case'news':
                    bannerClassName = 'news';
                    captionText = l10n('bannerNewsCaption');
                    break;
                default :
                    bannerClassName = 'default';
                    break;

            }


            banner = {
                e: 'a', h: bannerData.url,
                c: 'banner ' + bannerClassName, C: [
                    {c: 'caption', t: captionText},
                    {
                        c: 'image',
                        C: [
                            {
                                e: 'img',
                                a: {src: gb.settings.controlsDescriptors.site.bannerImages + bannerData.imageSrc}
                            },
                            {
                                c: 'title', H: bannerData.title
                            }
                        ]
                    }
                ]
            };

            banners.push(banner);
        });

        return {c: 'banners', C: banners}
    };
}(GB));