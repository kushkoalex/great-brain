(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.newsDetails = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.newsDetailsContent(pageData),

            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(4, true),
            tmpls.header(),
            tmpls.logo()
        ];
    };


    tmpls.newsDetailsContent = function (pageData) {
        var
            newsItem = gb.settings.dataModels.news[0],
            descriptors = gb.settings.controlsDescriptors.site,
            data = {
                url: descriptors.newsUrl,
                urlText: l10n('siteMenuNewsTitle', 'firstUpper'),
                title: newsItem.title,
                date: newsItem.date
            };

        return {
            c: 'news-details-content', C: [
                tmpls.siteContentTitleContainer(data),
                tmpls.newsDetailsInfoWrapper(pageData)
            ]
        }

    };

    tmpls.newsDetailsInfoWrapper = function (pageData) {
        return {
            c: 'news-details-info-wrapper', C: [
                tmpls.newsDetailsContentCarousel(pageData),
                tmpls.newsDetailsContentInfo(pageData),
                {c: 'clear'}
            ]
        }
    };

    tmpls.newsDetailsContentCarousel = function (pageData) {

        var carousel = {
            n: 'newsImagesCarousel',
            images: pageData.images,
            imagesPath:gb.settings.controlsDescriptors.site.newsImages
        };

        return {
            c: 'news-details-carousel',
            C: {
                c: 'wrapper', C: tmpls.imageSlider(carousel)
                //{
                //    e: 'img',
                //    a: {src: gb.settings.controlsDescriptors.site.educationalInstitutionDetailsCarouselImages + pageData.images[0]}
                //}
            }
        }
    };

    tmpls.newsDetailsContentInfo = function (pageData) {
        return {
            c: 'news-details-info', C: [
                {
                    c: 'description', H: pageData.shortDescription
                },
                {c: 'text', H: pageData.text}
            ]
        }
    };

}(GB));