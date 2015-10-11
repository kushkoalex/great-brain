GB.educationKinds = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        $dropdownCountries,
        $dropdownAgeGroups,
        countryList = gb.settings.dataModels.educationalCountries,
        dropdownSelectCountryListItems = [],
        ageGroupList = [],
        dropdownAgeGroupListItems = [],
        pageData = settings.dataModels.educationKinds,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;

    build = tp('educationKinds', pageData, $parent);
    $dropdownCountries = build.dropDownCountries;
    $dropdownAgeGroups = build.dropDownAgeGroups;


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

    var getCurrentEducationCategoryName = function(){
        for (var i = 0; i < pageData.educationCategories.length; i++) {
            if (pageData.educationCategories[i].active === true) {
                return pageData.educationCategories[i].name;
            }
        }
    };


    var dropDownCountriesOptions = {
        selectedValue: gb.settings.selectedCountry,
        submitUrl:'/'+settings.currentLanguage+'/{value}'
    };

    var dropDownAgeGroupsOptions = {
        //selectedIndex: 1,
        //selectedValue: gb.settings.selectedAgeGroup,
        selectedValue: getSelectedAgeGroup(),
        hasSplitter: true,
        submitUrl:'/'+settings.currentLanguage+'/'+ settings.selectedCountry +'/'+ getCurrentEducationCategoryName() +'/{value}'
    };


    a9.each(countryList, function (item) {
        dropdownSelectCountryListItems.push({text: item.title, value: item.code});
    });


    for (var i = 0; i < pageData.educationCategories.length; i++) {
        if (pageData.educationCategories[i].active === true) {
            ageGroupList = pageData.educationCategories[i].ageGroups
        }
    }


    a9.each(ageGroupList, function (item) {
        dropdownAgeGroupListItems.push({text: item.age, value: item.name});
    });


    a9.dropdown($dropdownCountries, dropdownSelectCountryListItems, dropDownCountriesOptions);
    a9.dropdown($dropdownAgeGroups, dropdownAgeGroupListItems, dropDownAgeGroupsOptions);

    gb.popupForm($parent);

    $serviceMenuWrapper = build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};