(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.educationalInstitutions = function () {
        return [

            tmpls.headerBottom(),
            tmpls.educationalInstitutionsContent(),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(2),
            tmpls.header(),
            tmpls.logo()
        ];
    };

    tmpls.headerBottom = function () {
        return {c: 'header-bottom-line'}
    };

    tmpls.educationalInstitutionsContent = function () {
        return {
            c: 'educational-institutions-catalogue',
            C: [
                {
                    c: 'content-title', t: l10n('educationalInstitutionsCatalogueTitle', 'firstUpper')
                },
                tmpls.educationalInstitutionsContentFilter(),
                {
                    c: 'content', n: 'educationalInstitutionsContentItems'
                }
            ]
        }
    };

    tmpls.educationalInstitutionsContentFilter = function () {
        return {
            c: 'filter', C: {
                e: 'ul', C: [
                    {e: 'li', c: 'location',C:{n:'dropDownInstitutionLocation',c:'drop-down-list educational-institutions-filter-selector'}},
                    {e: 'li', c: 'gender',C:{n:'dropDownGender',c:'drop-down-list educational-institutions-filter-selector'}},
                    {e: 'li', c: 'type',C:{n:'dropDownInstitutionType',c:'drop-down-list educational-institutions-filter-selector'}}

                ]
            }
        }
    };

    tmpls.educationalInstitutionsContentItem = function (dataItem) {

        var educationGender,
            itemClassName = 'educational-institutions-catalogue-item',
            itemContent = [],
            isSpecial = dataItem.special === true,
            url = a9.supplant(gb.settings.controlsDescriptors.site.educationalInstitutionDetailsUrl,{id:dataItem.name});

        switch (dataItem.gender) {
            case 'both':
                educationGender = l10n('educationalInstitutionsCatalogueEducationGenderBoth', 'firstUpper');
                break;
            case 'male':
                educationGender = l10n('educationalInstitutionsCatalogueEducationGenderMale', 'firstUpper');
                break;
        }

        if (isSpecial) {
            itemClassName += ' special-offer'
        }


        if (isSpecial) {
            itemContent.push({c: 'special-offer-title', t: l10n('specialOfferTitle')})
        }

        itemContent.push({
            c: 'image-wrapper',
            C: {
                e: 'img',
                a: {src: gb.settings.controlsDescriptors.site.educationalInstitutionCataloguePreviewImages + dataItem.previewImageSrc}
            }
        });

        itemContent.push({
            c: 'description-wrapper', C: {
                c: 'description', C: [
                    {c: 'title', t: dataItem.title},
                    {c: 'title-en', t: dataItem.titleEng},
                    {c: 'location', t: dataItem.location},
                    {c: 'education-gender', t: educationGender}
                ]
            }
        });
        return {
            c: itemClassName, C: {e: 'a', h: url, C: itemContent}
        }
    };

}(GB));
