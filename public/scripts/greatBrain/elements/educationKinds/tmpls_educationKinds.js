(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;
    tmpls.educationKinds = function (pageData) {
        return [
            tmpls.headerBottom(),
            tmpls.educationKindsContent(pageData),
            tmpls.paging(),
            tmpls.banners(),
            tmpls.footer(),
            tmpls.mainMenu(0),
            tmpls.header(),
            tmpls.logo()
        ];
    };

    tmpls.educationKindsContent = function (pageData) {
        return {
            c: 'education-kinds-content', C: [
                tmpls.countrySelector(),
                tmpls.educationCategoriesMenu()
            ]
        }
    };

    tmpls.countrySelector = function () {
        var countryList = gb.settings.dataModels.educationalCountries,
            countries = [];


        countries.push({c: 'country', t: countryList[0].title});

        //a9.each(countries,function(){
        //$countries.push({})
        //});

        return {
            c: 'country-selector-wrapper',
            C: [{c: 'select-country', t: l10n('selectCountry', 'firstUpper')}, {
                c: 'country-selector',
                C: [countries, {c: 'triangle'}]
            }]
        }
    };

    tmpls.educationCategoriesMenu = function () {
        var educationKindList = gb.settings.dataModels.educationKinds,
            educationKinds = [];

        a9.each(educationKindList[0].educationCategories, function (category) {

            educationKinds.push({e: 'li', C: [{c: 'title', t: category.title}, {c: 'age', t: category.age}]});
        });

        console.log(educationKindList);


        return {c: 'education-category-menu', C: {e: 'ul', C: educationKinds}}
    };


}(GB));