(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.educationalInstitutionDetails = function (pageData) {
        return [

            tmpls.headerBottom(),
            tmpls.educationalInstitutionDetailsContent(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(2, true),
            tmpls.header(),
            tmpls.logo()
        ];
    };

    tmpls.educationalInstitutionDetailsContent = function (pageData) {
        return {
            c: 'educational-institution-details', C: [
                tmpls.educationalInstitutionDetailsContentTitle(),
                {c: 'clear'},
                tmpls.educationalInstitutionDetailsInfoWrapper(pageData)
            ]
        }
    };

    tmpls.educationalInstitutionDetailsInfoWrapper = function (pageData) {
        return {
            c: 'educational-institution-details-info-wrapper', C: [
                tmpls.educationalInstitutionDetailsContentCarousel(pageData),
                tmpls.educationalInstitutionDetailsContentInfo(pageData),
                {c: 'clear'}
            ]
        }
    };

    tmpls.educationalInstitutionDetailsContentCarousel = function (pageData) {

        return {
            c: 'educational-institution-details-carousel',
            C: {
                c: 'educational-institution-details-carousel-wrapper', C: {
                    e: 'img',
                    a: {src: gb.settings.controlsDescriptors.site.educationalInstitutionDetailsCarouselImages + pageData.images[0]}
                }
            }
        }
    };

    tmpls.educationalInstitutionDetailsContentInfo = function (pageData) {
        return {
            c: 'educational-institution-details-info', C: [
                {
                    c: 'educational-institution-details-info-container', C: [
                    {c:'line',
                        C: [{
                            e: 'span',
                            c: 'label',
                            t: l10n('educationalInstitutionDetailsAddress', 'firstUpper')
                        }, {e: 'span', t: pageData.address}]
                    },
                    {c: 'show-on-map', e: 'a', h: '#', t: l10n('educationalInstitutionDetailsShowOnMap', 'firstUpper')},
                    {c:'line',
                        C: [{
                            e: 'span',
                            c: 'label',
                            t: l10n('educationalInstitutionDetailsEducation', 'firstUpper')
                        }, {
                            e: 'span',
                            H: l10n('educationalInstitutionDetailsEducationGenderBothShort', 'firstUpper') + a9.supplant(l10n('educationalInstitutionDetailsEducationMinAge'), {age: pageData.minAge})
                        }]
                    },
                    {c:'line',
                        C: [{
                            e: 'span',
                            c: 'label',
                            t: l10n('educationalInstitutionDetailsYearOfFoundation', 'firstUpper')
                        }, {e: 'span', t: pageData.yearOfFoundation}]
                    },
                    {c:'line',
                        C: [{
                            e: 'span',
                            c: 'label',
                            t: l10n('educationalInstitutionDetailsRector', 'firstUpper')
                        }, {e: 'span', t: pageData.rector}]
                    },
                    {c:'line',
                        C: [
                            {
                                e: 'span',
                                c: 'label',
                                t: l10n('educationalInstitutionDetailsContacts', 'firstUpper')
                            },
                            {e: 'span', t: pageData.contacts},
                            {
                                c: 'email',
                                C: {
                                    e: 'a',
                                    h: 'mailto:' + pageData.email,
                                    t: pageData.email
                                }
                            },
                            {
                                c: 'website', C: {
                                e: 'a', h: pageData.website,
                                t: pageData.website
                            }
                            }]
                    }


                ]
                },
                {c: 'educational-institution-details-info-container-description', H: pageData.description}
            ]
        }
    };


    tmpls.educationalInstitutionDetailsContentTitle = function () {
        var data = gb.settings.dataModels.educationalInstitutionDetails,
            controlsDescriptors = gb.settings.controlsDescriptors.site;


        return {
            c: 'educational-institution-details-content-title',
            C: [
                {
                    c: 'educational-institution-details-content-title-caption-wrapper',
                    C: {
                        c: 'educational-institution-details-content-title-caption',
                        C: [{
                            e: 'a',
                            h: controlsDescriptors.educationalInstitutionsCatalogueUrl,
                            t: l10n('educationalInstitutionsCatalogueTitle')
                        }, {e: 'span', t: ' /'}
                        ]
                    }
                },
                {
                    c: 'educational-institution-name', t: data.title
                },
                {
                    c: 'educational-institution-name-eng', t: data.titleEng
                },
                {
                    c: 'educational-institution-logo',
                    C: {e: 'img', a: {src: controlsDescriptors.educationalInstitutionDetailsLogo + data.logoImageSrc}}
                }
            ]
        }
    }


}(GB));
