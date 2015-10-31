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

    tmpls.educationKindsContent = function (dataModel) {
        return {
            c: 'education-kinds-content', C: [
                tmpls.countrySelector(),
                tmpls.educationCategoriesMenu(),
                tmpls.categoryContent(dataModel)
            ]
        }
    };

    tmpls.categoryContent = function (dataModel) {
        var title;
        for(var i=0;i<dataModel.educationCategories.length; i++){
            if(dataModel.educationCategories[i].active===true) {
                title = dataModel.educationCategories[i].title;
            }
        }

        return [
            {
                c: 'category-content-title', t: title
            },
            {
                c: 'select-group', t: l10n('selectAgeGroup')
            },
            tmpls.categoryContentWrapper(dataModel)
        ]
    };

    tmpls.categoryContentWrapper = function (dataModel) {
        return {
            c: 'category-content-wrapper', C: [tmpls.ageGroupSelector(),
                tmpls.categoryContentInnerWrapper(dataModel)]
        }
    };


    tmpls.categoryContentInnerWrapper = function (dataModel) {

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


        return {
            c: 'category-content-inner-wrapper', C: [
                {
                    c: 'image-container',
                    C: [{
                        e: 'img',
                        a: {src: gb.settings.controlsDescriptors.site.educationKindsImages + 'girl-with-books.png'}
                    }]
                },
                {c: 'text-container', C: {H: ageGroup.text}},
                {c: 'clear'}
            ]
        }
    };

    tmpls.ageGroupSelector = function () {
        return {
            c: 'age-group-selector-wrapper', C:
            {n:'dropDownAgeGroups',c:'drop-down-list age-group-selector'}
        }
    };

    tmpls.countrySelector = function () {
        return {
            c: 'country-selector-wrapper',
            C: [
                {c: 'select-country-text', t: l10n('selectCountry', 'firstUpper')},
                {n:'dropDownCountries',c:'drop-down-list country-selector'}
            ]
        }
    };


    tmpls.educationCategoriesMenu = function () {
        var educationKinds = [],
            menuItem;

        a9.each(gb.settings.dataModels.educationKinds.educationCategories, function (category) {

            if (category.active===true) {
                menuItem = {e: 'li', c: 'active', C: [{c: 'title', t: category.title}, {c: 'age', t: category.age}]};
            } else {
                menuItem = {
                    e: 'li',
                    C: {
                        e: 'a',
                        h: '#',
                        C: [{c: 'title', e: 'a', h: category.url, t: category.title}, {c: 'age', t: category.age}]
                    }
                };
            }
            educationKinds.push(menuItem);
        });


        return {c: 'education-category-menu', C: {e: 'ul', C: educationKinds}}
    };




}(GB));