GB.educationKinds = function($parent){
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
        dropdownSelectCountryListItems=[],
        ageGroupList = gb.settings.dataModels.educationKinds[0].educationCategories[0].ageGroups,
        dropdownAgeGroupListItems=[],
        pageData = settings.dataModels.educationKinds,
        build,
        buildItem,
        $educationalInstitutionsContentItems,
        $fragment;

    build = tp('educationKinds', pageData, $parent);
    $dropdownCountries = build.dropDownCountries;
    $dropdownAgeGroups = build.dropDownAgeGroups;


    var dropDownCountriesOptions = {
        selectedValue: 'gb'
    };

    var dropDownAgeGroupsOptions = {
        selectedIndex: 1,
        hasSplitter:true
    };


    a9.each(countryList, function (item) {
        dropdownSelectCountryListItems.push({text: item.title, value: item.code});
    });

    a9.each(ageGroupList, function (item) {
        dropdownAgeGroupListItems.push({text: item.age, value: item.id});
    });


    a9.dropdown($dropdownCountries,dropdownSelectCountryListItems,dropDownCountriesOptions);
    a9.dropdown($dropdownAgeGroups,dropdownAgeGroupListItems,dropDownAgeGroupsOptions);

    gb.popupForm($parent);

    $serviceMenuWrapper= build.servicesMenuWrapper;
    gb.servicesMenu($serviceMenuWrapper);

    $feedbackFormWrapper = build.feedbackFormWrapper;
    gb.feedbackForm($feedbackFormWrapper);
};