(function (gb) {
    gb.tmpls.imageSlider = function (data) {
        var images = [],
            image,
            controls,
            i;

        for (i = 0; i < data.images.length; i++) {

            if(data.isZoom===true){
                image = {
                    n: 'images',
                    c: i === 0 ? 'img active' : 'img',
                    a: {style:' background-image:url('+data.imagesPath + data.images[i]+')'}
                };
            }else{
                image = {
                    e: 'img',
                    n: 'images',
                    c: i === 0 ? 'active' : '',
                    a: {src: data.imagesPath + data.images[i]}
                };
            }
            images.push(image);
        }
        controls = [
            {n: 'prevBtn', c: 'slider-prev-button'},
            {n: 'nextBtn', c: 'slider-next-button'}
        ];
        return {
            c: 'image-slider', n: 'imageSlider', C: [
                {n: 'imagesContainer', c: 'images-container', C: images},
                controls
            ]
        };
    };

    gb.tmpls.zoomLayout = function (data) {
        data.imagesPath = data.imagePathOrig;
        return {c: 'content-wrapper', C: gb.tmpls.imageSlider(data)};
    };

}(GB));


(function (a9, gb) {

    a9.imageSlider = function ($object, options) {
        var
            tp = gb.global.cnCt.tp,
            callBackValueChange,
            $images,
            $imagesZoom,
            selectedIndex = 0,
            eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
            build = tp('imageSlider', options, $object),
            buildZoom,
            $prevButton = build.prevBtn,
            $nextButton = build.nextBtn,
            $zoomLayout = a9.$('zoomLayout'),
            u;

        var onPrevButtonClick = function () {
            if (selectedIndex == 0) {
                selectedIndex = $images.length - 1;
            } else {
                selectedIndex--;
            }
            applyValue();
            if (callBackValueChange) {
                callBackValueChange();
            }
        };


        var onNextButtonClick = function () {
            if (selectedIndex == $images.length - 1) {
                selectedIndex = 0;
            } else {
                selectedIndex++;
            }
            applyValue();
            if (callBackValueChange) {
                callBackValueChange();
            }
        };

        var applyValue = function () {
            for (var i = 0; i < $images.length; i++) {
                a9.removeClass($images[i], 'active');
                if($imagesZoom) {
                    a9.removeClass($imagesZoom[i], 'active');
                }

            }
            a9.addClass($images[selectedIndex], 'active');
            if($imagesZoom) {
                a9.addClass($imagesZoom[selectedIndex], 'active');
            }
        };

        $images = build.images;

        if (options && options.callBackValueChange) {
            callBackValueChange = options.callBackValueChange;
        }

        a9.addEvent($prevButton, eventOnPointerEnd, onPrevButtonClick);
        a9.addEvent($nextButton, eventOnPointerEnd, onNextButtonClick);

        if ($zoomLayout !== null) {
            options.isZoom=true;
            buildZoom = tp('zoomLayout', options, $zoomLayout);
            $imagesZoom = buildZoom.images;
            a9.addEvent(build.imagesContainer, eventOnPointerEnd, function () {
                a9.removeClass($zoomLayout, 'hidden');
            });

            a9.addEvent($zoomLayout, eventOnPointerEnd, function () {
                a9.addClass($zoomLayout, 'hidden');
            });

            a9.addEvent(buildZoom.imageSlider, eventOnPointerEnd, function (e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
            });

            a9.addEvent(buildZoom.prevBtn, eventOnPointerEnd, onPrevButtonClick);
            a9.addEvent(buildZoom.nextBtn, eventOnPointerEnd, onNextButtonClick);

        }

    }
})(A9, GB);