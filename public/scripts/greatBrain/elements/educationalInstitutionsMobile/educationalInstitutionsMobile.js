GB.educationalInstitutionsMobile = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        doc = global.document,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        $serviceMenuWrapper,
        pageData = settings.dataModels.educationalInstitutions,
        build,
        $languageSwitcherMobile,
        $mainMenuMobile,
        buildItem,
        $educationalInstitutionsContentItems,

        $dropDownInstitutionLocation,
        $dropDownGender,
        $dropDownInstitutionType,

        dropDownInstitutionLocationListItems=[],
        dropDownGenderListItems=[],
        dropDownInstitutionTypeListItems=[],

        dropDownInstitutionLocationSelectedIndex=0,
        dropDownGenderSelectedIndex=0,
        dropDownInstitutionTypeSelectedIndex=0,

        $fragment;


    build = tp('educationalInstitutionsMobile', $parent);
    $educationalInstitutionsContentItems = build.educationalInstitutionsContentItems;
    $languageSwitcherMobile = build.languageSwitcherMobile;
    $mainMenuMobile = build.mainMenuMobile;
    $dropDownInstitutionLocation = build.dropDownInstitutionLocation;
    $dropDownGender=build.dropDownGender;
    $dropDownInstitutionType=build.dropDownInstitutionType;

    gb.languageSwitcherMobile($languageSwitcherMobile);
    gb.mainMenuMobile($mainMenuMobile);

    $fragment = global.document.createDocumentFragment();

    a9.each(settings.dataModels.educationalInstitutionFilterLocation, function (item,i) {
        dropDownInstitutionLocationListItems.push({text: item.title, value: item.value});
        if(item.selected===true){
            dropDownInstitutionLocationSelectedIndex=i;
        }
    });
    a9.each(settings.dataModels.educationalInstitutionFilterGender, function (item,i) {
        dropDownGenderListItems.push({text: item.title, value: item.value});
        if(item.selected===true){
            dropDownGenderSelectedIndex=i;
        }
    });
    a9.each(settings.dataModels.educationalInstitutionFilterType, function (item,i) {
        dropDownInstitutionTypeListItems.push({text: item.title, value: item.value});
        if(item.selected===true){
            dropDownInstitutionTypeSelectedIndex=i;
        }
    });

    var dropDownInstitutionLocationOptions = {
        selectedIndex: dropDownInstitutionLocationSelectedIndex,
        hasSplitter:true,
        submitUrl:'/'+settings.currentLanguage+'/catalogue/{value}/'+ settings.selectedGenger +'/'+settings.selectedType
    };

    var dropDownGenderOptions = {
        selectedIndex: dropDownGenderSelectedIndex,
        hasSplitter:true,
        submitUrl:'/'+settings.currentLanguage+'/catalogue/'+ settings.selectedLocation +'/{value}/'+settings.selectedType
    };
    var dropDownInstitutionTypeOptions = {
        selectedIndex: dropDownInstitutionTypeSelectedIndex,
        hasSplitter:true,
        submitUrl:'/'+settings.currentLanguage+'/catalogue/'+ settings.selectedLocation +'/'+ settings.selectedGenger +'/{value}'
    };

    a9.dropdown($dropDownInstitutionLocation,dropDownInstitutionLocationListItems,dropDownInstitutionLocationOptions);
    a9.dropdown($dropDownGender,dropDownGenderListItems,dropDownGenderOptions);
    a9.dropdown($dropDownInstitutionType,dropDownInstitutionTypeListItems,dropDownInstitutionTypeOptions);


    a9.each(pageData,function(dataItem){
        buildItem = tp('educationalInstitutionsContentItem', dataItem, $fragment);
    });

    $educationalInstitutionsContentItems.appendChild($fragment);

};