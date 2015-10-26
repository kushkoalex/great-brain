(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.mainPageMobile = function () {
        return [
            {c: 'main-banner', n: 'mainImageContentWrapper'},
            {c:'main-page-logo-mobile'},
            tmpls.headerMobile(),
            tmpls.mainPageAnnouncementsMobile(),
            tmpls.mainMenuMobileLayout()

        ];
    };



    tmpls.mainImageContentMobile = function (mainBanner) {
        var controlsDescriptors = gb.settings.controlsDescriptors,
            content = [];


        if (mainBanner.title && mainBanner.title != '') {
            content.push({c: 'title', H: mainBanner.title});
            content.push({c: 'clear'})
        }

        if (mainBanner.description && mainBanner.description != '') {
            content.push({c: 'description', C: {e: 'span', c: 'highlight', H: mainBanner.description}});
            content.push({c: 'clear'})
        }

        //if (mainBanner.sign && mainBanner.sign != '') {
        //    content.push({c: 'sign', H: mainBanner.sign});
        //    content.push({c: 'clear'})
        //}

        //if (mainBanner.signImage && mainBanner.signImage != '') {
        //    content.push({
        //        c: 'sign-image',
        //        C: {e: 'img', a: {src: controlsDescriptors.site.mainPageImages + mainBanner.signImage}}
        //    });
        //    content.push({c: 'clear'})
        //}

        return {
            c: 'main-image-content', C: [
                {
                    //e: 'img',
                    c: 'banner', //a: {src: controlsDescriptors.site.mainPageImages + mainBanner.imageSrc}
                    a: {style: 'background-image:url(' + controlsDescriptors.site.mainBannerImages + mainBanner.imageSrc + ')'}
                },
                {
                    c: 'main-page-info-wrapper', C: content
                }
            ]
        }
    };

    tmpls.mainPageAnnouncementsMobile = function () {
        var announcements = gb.settings.dataModels.mainPage.contentAnnouncements,
            //parallaxImages = gb.settings.dataModels.mainPage.parallaxImages,
            content = [];
            //i = 0;
        a9.each(announcements, function (announcement,index) {
            content.push(tmpls.announcementInfo(announcement));
            if(index!==announcements.length-1) {
                content.push({
                    c: 'parallax-window',
                    a: {
                        'data-parallax': 'scroll',
                        'data-image-src': gb.settings.controlsDescriptors.site.contentAnnouncementImages + announcement.imageSrc
                    }
                });
            }
            //content.push({c: 'clear'});
            //i++;
        });

        return {a: {id: 'mainPageAnnouncements'}, c: 'main-page-announcements', C: content}
    };


}(GB));