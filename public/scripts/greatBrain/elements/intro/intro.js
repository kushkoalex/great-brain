GB.intro = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        introData = settings.dataModels.intro,
        $introContainer,
        build,
        $fragment,
        u;


    build = tp('intro', $parent);

    var $asUsual = build.asUsual;
    var $child = build.child;
    var $edu = build.highEdu;
    var $mazeShutter = build.mazeShutter;
    var $mazeContainer = build.mazeContainer;
    var $whiteLine = build.whiteLine;
    var $greenLine = build.greenLine;
    var $mazeLayout = build.mazeLayout;
    var $mazeLayoutTextSmall = build.mazeLayoutTextSmall;
    var $intro = build.intro;
    var $skipIntroWrapperButton = build.skipIntroWrapperButton;
    var $finalLayout = build.finalLayout;
    //a9.removeClass($mazeContainer,'hidden');
    //a9.animate($mazeShutter,['width',0,'px', 'height',0,'px','margin-top',255,'px'],2000,step5);


    //setTimeout(step5,3000);

    setTimeout(step1, 2000);

    function step1() {
        a9.animate($asUsual, ['margin-top', 10, 'px', 'font-size', 20, 'px'], 600, step2);
    }

    function step2() {
        setTimeout(function () {
            a9.removeClass($child, 'hidden');
            setTimeout(function () {
                a9.removeClass($edu, 'hidden');
                a9.removeClass($mazeContainer, 'hidden');
                setTimeout(function () {
                    a9.animate($mazeShutter, ['width', 0, 'px', 'height', 0, 'px', 'margin-top', 255, 'px'], 2000, step5);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    function step5() {
        setTimeout(function () {
            a9.removeClass($mazeLayout, 'hidden');
            a9.addClass($asUsual, 'hidden');
            setTimeout(function () {
                a9.removeClass($mazeLayoutTextSmall, 'hidden');
                a9.addClass($mazeLayout, 'hidden');
                setTimeout(function () {
                    a9.removeClass($whiteLine, 'hidden');
                    a9.removeClass($greenLine, 'hidden');
                    setTimeout(function () {
                        setTimeout(function () {
                            a9.addClass($intro, 'hidden');
                            a9.addClass($skipIntroWrapperButton, 'hidden');
                            a9.removeClass($finalLayout, 'hidden');
                        }, 2000);
                    }, 500);

                }, 1000);
            }, 3000);
        }, 1000);
    }
};