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
                tmpls.educationCategoriesMenu(1),
                tmpls.categoryContent(dataModel)
            ]
        }
    };

    tmpls.categoryContent = function (dataModel) {
        var educationKindList = gb.settings.dataModels.educationKinds;
        return [
            {
                c: 'category-content-title', t: educationKindList[0].educationCategories[0].title
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

        console.log(dataModel);

        return {
            c: 'category-content-inner-wrapper', C: [
                {c: 'image-container',C:[{e:'img',a:{src:gb.settings.controlsDescriptors.site.educationKindsImages+ 'girl-with-books.png'}}]},
                {c: 'text-container',C:{H:dataModel[0].educationCategories[0].ageGroups[0].text}},
                {c: 'clear'}
            ]
        }
    };

    tmpls.ageGroupSelector = function () {
        return {
            c: 'age-group-selector-wrapper', C: {
                c: 'age-group-selector',
                C: [{c: 'age-group', t: 'asd'}, {c: 'triangle'}]
            }
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

    tmpls.educationCategoriesMenu = function (activeMenuItemId) {
        var educationKindList = gb.settings.dataModels.educationKinds,
            educationKinds = [],
            menuItem,
            i,
            menuItemClassName,
            linkContent,
            menuItemState;


        a9.each(educationKindList[0].educationCategories, function (category) {

            if (activeMenuItemId == category.id) {
                menuItem = {e: 'li', c: 'active', C: [{c: 'title', t: category.title}, {c: 'age', t: category.age}]};
            } else {
                menuItem = {
                    e: 'li',
                    C: {
                        e: 'a',
                        h: '#',
                        C: [{c: 'title', e: 'a', h: '#', t: category.title}, {c: 'age', t: category.age}]
                    }
                };
            }


            educationKinds.push(menuItem);
        });


        return {c: 'education-category-menu', C: {e: 'ul', C: educationKinds}}
    };


}(GB));