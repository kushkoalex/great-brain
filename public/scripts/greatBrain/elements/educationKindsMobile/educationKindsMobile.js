GB.educationKindsMobile = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        pageData = settings.dataModels.educationKinds,
        build,
        $languageSwitcherMobile,
        $mainMenuMobile,
        $dropdownCountries,
        $dropdownAgeGroups,
        $dropDownEducationCategories,
        dropdownSelectCountryListItems = [],
        ageGroupList = [],
        dropdownAgeGroupListItems = [],
        dropdownSelectEducationCategoriesListItems = [],
        countryList = gb.settings.dataModels.educationalCountries,
        educationCategories = gb.settings.dataModels.educationKinds.educationCategories,
        u;

    build = tp('educationKindsMobile', pageData, $parent);
    $languageSwitcherMobile = build.languageSwitcherMobile;
    $mainMenuMobile = build.mainMenuMobile;
    $dropdownCountries = build.dropDownCountries;
    $dropdownAgeGroups = build.dropDownAgeGroups;
    $dropDownEducationCategories = build.dropDownEducationCategories;


    gb.languageSwitcherMobile($languageSwitcherMobile);
    gb.mainMenuMobile($mainMenuMobile);


    var dropDownCountriesOptions = {
        selectedValue: gb.settings.selectedCountry,
        submitUrl: '/' + settings.currentLanguage + '/{value}'
    };
    a9.each(countryList, function (item) {
        dropdownSelectCountryListItems.push({text: item.title, value: item.code});
    });
    a9.dropdown($dropdownCountries, dropdownSelectCountryListItems, dropDownCountriesOptions);


    var dropDownEducationCategoriesOptions = {
        //selectedValue: gb.settings.selectedCountry,
        submitUrl: '/' + settings.currentLanguage + '/' + settings.selectedCountry + '/{value}'
    };

    a9.each(educationCategories, function (category) {
        if (category.active === true) {
            dropDownEducationCategoriesOptions.selectedValue = category.name;
        }
        dropdownSelectEducationCategoriesListItems.push({
            text: category.title + '<br>' + category.age,
            value: category.name
        })

    });

    a9.dropdown($dropDownEducationCategories, dropdownSelectEducationCategoriesListItems, dropDownEducationCategoriesOptions);

    var getSelectedAgeGroup = function () {
        for (var i = 0; i < pageData.educationCategories.length; i++) {
            if (pageData.educationCategories[i].active === true) {
                for (var j = 0; j < pageData.educationCategories[i].ageGroups.length; j++) {
                    if (pageData.educationCategories[i].ageGroups[j].active === true) {
                        return pageData.educationCategories[i].ageGroups[j].name;
                    }
                }
            }
        }
    };

    var getCurrentEducationCategoryName = function () {
        for (var i = 0; i < pageData.educationCategories.length; i++) {
            if (pageData.educationCategories[i].active === true) {
                return pageData.educationCategories[i].name;
            }
        }
    };


    for (var i = 0; i < pageData.educationCategories.length; i++) {
        if (pageData.educationCategories[i].active === true) {
            ageGroupList = pageData.educationCategories[i].ageGroups
        }
    }

    var dropDownAgeGroupsOptions = {
        //selectedIndex: 1,
        //selectedValue: gb.settings.selectedAgeGroup,
        selectedValue: getSelectedAgeGroup(),
        hasSplitter: true,
        submitUrl: '/' + settings.currentLanguage + '/' + settings.selectedCountry + '/' + getCurrentEducationCategoryName() + '/{value}'
    };

    a9.each(ageGroupList, function (item) {
        dropdownAgeGroupListItems.push({text: item.age, value: item.name});
    });

    a9.dropdown($dropdownAgeGroups, dropdownAgeGroupListItems, dropDownAgeGroupsOptions);
};