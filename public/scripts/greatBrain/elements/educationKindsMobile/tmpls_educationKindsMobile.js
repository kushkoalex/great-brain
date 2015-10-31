(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.educationKindsMobile = function (pageData) {
        return [
            tmpls.educationKindsSelectorsContainer(),
            tmpls.headerMobile(),
            tmpls.mainMenuMobileLayout(),
            tmpls.educationKindsMobileContent(pageData)
        ];
    };

    tmpls.educationKindsMobileContent = function (dataModel) {
        var title;
        for (var i = 0; i < dataModel.educationCategories.length; i++) {
            if (dataModel.educationCategories[i].active === true) {
                title = dataModel.educationCategories[i].title;
            }
        }

        return {
            c: 'education-kinds-mobile-content', C: [
                {c: 'category-content-title', t: title},
                tmpls.ageGroupSelectorMobile(),
                tmpls.categoryContentText(dataModel)

            ]
        }
    };

    tmpls.categoryContentText = function(dataModel){
        var ageGroups,
            ageGroup,
            i;
        for(i=0;i<dataModel.educationCategories.length; i++){
            if(dataModel.educationCategories[i].active===true) {
                ageGroups = dataModel.educationCategories[i].ageGroups;
            }
        }

        for(i=0;i<ageGroups.length; i++){
            if(ageGroups[i].active===true){
                ageGroup = ageGroups[i];
            }
        }

        return {c:'category-content-text',H:ageGroup.text}
    };

    tmpls.ageGroupSelectorMobile = function(){
        return {
            c: 'age-group-selector-wrapper', C:[
                {c: 'select-group', t: l10n('selectAgeGroup')},
                {n:'dropDownAgeGroups',c:'drop-down-list age-group-mobile-selector'}]
        }
    };

    tmpls.educationKindsSelectorsContainer = function () {
        return {
            c: 'education-kinds-selectors-container', C: [
                tmpls.countrySelectorMobile(),
                tmpls.educationCategoriesSelectorMobile()
            ]
        }
    };

    tmpls.countrySelectorMobile = function () {
        return {
            c: 'country-selector-wrapper',
            C: [
                {c: 'select-country-text', t: l10n('selectCountry', 'firstUpper')},
                {n: 'dropDownCountries', c: 'drop-down-list country-selector'}
            ]
        }
    };


    tmpls.educationCategoriesSelectorMobile = function () {
        return {n: 'dropDownEducationCategories', c: 'drop-down-list education-category-selector'}
    };


}(GB));