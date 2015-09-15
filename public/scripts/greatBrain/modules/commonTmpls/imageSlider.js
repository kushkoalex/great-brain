(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.imageSlider = function (data) {
        var images = [],
            controls,
            i;

        for (i = 0; i < data.images.length; i++) {
            images.push({
                e: 'img',
                c: i === 0 ? 'active' : '',
                a: {src: data.imagesPath + data.images[i]}
            })
        }

        controls = {
            c: 'controls', C: [
                {c: 'slider-prev-button'},
                {c: 'slider-next-button'}
            ]
        };

        return {
            n: data.n,
            c: 'image-slider', C: [
                images,
                controls
            ]
        };
    }


}(GB));