(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.educationalInstitutionsMobile = function () {
        return [
            tmpls.educationalInstitutionsTitleContainerMobile(),
            tmpls.headerMobile(),
            tmpls.mainMenuMobileLayout(),
            {c: 'educational-institutions-mobile-filter-panel', C: tmpls.educationalInstitutionsContentFilter()},
            tmpls.educationalInstitutionsMobileContent()
        ];
    };

    tmpls.educationalInstitutionsTitleContainerMobile = function () {
        return {
            c: 'mobile-page-head-container',
            C: {
                c: 'category-content-title educational-institutions',
                t: l10n('educationalInstitutionsCatalogueTitle', 'firstUpper')
            }
        }
    };

    tmpls.educationalInstitutionsMobileContent = function () {
        return{c:'educational-institutions-mobile-content',n:'educationalInstitutionsContentItems'}
    };

}(GB));