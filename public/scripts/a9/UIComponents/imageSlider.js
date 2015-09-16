(function (a9) {
    a9.imageSlider = function (object, options) {
        var $prevButton,
            $nextButton,
            callBackValueChange,
            $images,
            selectedIndex = 0,
            eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
            CSSPrevButton = 'slider-prev-button',
            CSSNextButton = 'slider-next-button';

        var onPrevButtonClick = function () {
            if (selectedIndex == 0) {
                selectedIndex = $images.length - 1;
            } else {
                selectedIndex--;
            }
            applyValue();
            if(callBackValueChange) {
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
            if(callBackValueChange) {
                callBackValueChange();
            }
        };

        var applyValue = function () {
            for (var i = 0; i < $images.length; i++) {
                a9.removeClass($images[i], 'active');
            }
            a9.addClass($images[selectedIndex], 'active');
        };

        $prevButton = a9.$c(CSSPrevButton, object)[0];
        $nextButton = a9.$c(CSSNextButton, object)[0];
        $images = a9.$tn('img', object);

        if (options && options.callBackValueChange) {
            callBackValueChange = options.callBackValueChange;
        }

        a9.addEvent($prevButton, eventOnPointerEnd, onPrevButtonClick);
        a9.addEvent($nextButton, eventOnPointerEnd, onNextButtonClick);
    }
})(A9);