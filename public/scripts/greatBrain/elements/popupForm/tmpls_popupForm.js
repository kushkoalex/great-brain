(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.popupForm = function () {
        var educationCountries = gb.settings.dataModels.educationCountries,
            countriesContent = [];


        a9.each(educationCountries, function (country) {
            countriesContent.push({c:'link-container', C:{e: 'a', h: country.url, t: country.title}});
        });


        return {
            c: 'layout', C: {
                c: 'popup select-country-form',
                n: 'popup',
                C: {
                    c: 'frame',
                    C: [
                        {
                            c: 'title-wrapper',
                            C: {c: 'title', t: l10n('selectEducationCountry', 'firstUpper')}
                        },
                        {
                            c: 'select-education-country',C:countriesContent
                        },
                        {
                            c:'logo-wrapper',
                            C:{c:'select-country-form-logo'}
                        }
                    ]
                }
            }
        }
    }

}(GB));