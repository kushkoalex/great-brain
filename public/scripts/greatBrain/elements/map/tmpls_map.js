(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.map = function () {
        return {
            c: 'map-frame',
            C: [{c: 'map-container', a: {id: 'map'}, n: 'map'}, {c: 'map-location-links', n: 'mapLocationLinks'}]
        }
    };

}(GB));