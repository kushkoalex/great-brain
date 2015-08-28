GB.scrollToTop = function($link){
    var gb = this,
        global = gb.global,
        doc = global.document,
        a9 = global.A9,
        duration = gb.settings.scrollToTopDuration || 200,

        startY,
        startT,
        finishT;

    function interpolate(source, target, shift) {
        return (source + ((target - source) * shift));
    }

    function easing(pos) {
        return (-Math.cos(pos * Math.PI) / 2) + .5;
    }

    function animate() {
        var now = +(new Date()),
            shift = (now > finishT) ? 1 : (now - startT) / duration;

        global.scrollTo(0, interpolate(startY, 0, easing(shift)));

        (now > finishT) || setTimeout(animate, 15);
    }

    function scrollToTop() {
        startY = (global.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        startT  = +(new Date());
        finishT = startT + duration;
        setTimeout(animate, 15);
    }

    a9.addEvent($link, a9.deviceInfo.eventOnPointerEnd, scrollToTop);
};
