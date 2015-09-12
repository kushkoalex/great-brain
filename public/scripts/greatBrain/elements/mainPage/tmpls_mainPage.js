(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.mainPage = function () {
        return [
            {c: 'main-banner', n: 'mainImageContentWrapper'},
            tmpls.mainMenu(),
            tmpls.logo(true),
            tmpls.mainPageAnnouncements(),
            tmpls.header(),
            tmpls.footer(),
            tmpls.scrollToTop()
        ]
    };

    tmpls.scrollToTop = function(){
        return{c:'scroll-to-top',a:{id:'scrollToTop'}}
    };

    tmpls.mainPageAnnouncements = function () {
        var announcements = gb.settings.dataModels.mainPage.contentAnnouncements,
            parallaxImages = gb.settings.dataModels.mainPage.parallaxImages,
            content = [],
            i = 0;
        a9.each(announcements, function (announcement) {
            if (i % 2 == 0) {
                content.push([tmpls.announcementInfo(announcement), tmpls.announcementImage(announcement)]);
            }
            else {
                content.push([tmpls.announcementImage(announcement), tmpls.announcementInfo(announcement)]);
            }
            content.push({c: 'clear'});
            if(parallaxImages[i]){
                content.push({c: 'parallax-window', a:{'data-parallax':'scroll', 'data-image-src':gb.settings.controlsDescriptors.site.mainPageImages + parallaxImages[i]}});
            }

            content.push({c: 'clear'});
            i++;
        });

        return {a: {id: 'mainPageAnnouncements'}, c: 'main-page-announcements', C: content}
    };


    tmpls.announcementInfo = function (announcement) {
        return {
            c: 'announcement-info', C: [
                {c: 'title',t:announcement.title},
                {c:'logo'},
                {c: 'text',t:announcement.text},
                {e:'a', h:announcement.url, c:'link', t:l10n('announcementLinkText')}
            ]
        }
    };

    tmpls.announcementImage = function (announcement) {
        return {
            c: 'announcement-image',
            //e: 'img',
            //a: {src: gb.settings.controlsDescriptors.site.mainPageImages + announcement.imageSrc}
            a:{style:'background-image:url('+gb.settings.controlsDescriptors.site.mainPageImages + announcement.imageSrc+')'}
        }
    };


    tmpls.mainImageContent = function (mainBanner) {
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

        if (mainBanner.sign && mainBanner.sign != '') {
            content.push({c: 'sign', H: mainBanner.sign});
            content.push({c: 'clear'})
        }

        if (mainBanner.signImage && mainBanner.signImage != '') {
            content.push({
                c: 'sign-image',
                C: {e: 'img', a: {src: controlsDescriptors.site.mainPageImages + mainBanner.signImage}}
            });
            content.push({c: 'clear'})
        }

        return {
            c: 'main-image-content', C: [
                {
                    //e: 'img',
                    c: 'banner', //a: {src: controlsDescriptors.site.mainPageImages + mainBanner.imageSrc}
                    a:{style:'background-image:url('+controlsDescriptors.site.mainPageImages + mainBanner.imageSrc+')'}
                },
                {
                    c: 'main-page-info-wrapper', C: content
                }
            ]
        }
    };


    tmpls.showMore = function () {
        return {c: 'show-more', H: l10n('showMoreText')}
    }

}(GB));