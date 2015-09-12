GB.stickyPanels = function () {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        $menu = a9.$('mainMenu'),
        $logoSign = a9.$('logoSign'),
        $scrollToTop = a9.$('scrollToTop'),
        fixedClassName = 'fixed',
        activeClassName = 'active';

    a9.addEvent(global, 'scroll', function () {
        var scrollY = this.scrollY;

        if (scrollY >= 100) {
            a9.addClass($menu, fixedClassName)
        } else {
            a9.removeClass($menu, fixedClassName)
        }

        if (scrollY >= 174) {
            a9.addClass($logoSign, fixedClassName)
        } else {
            a9.removeClass($logoSign, fixedClassName)
        }

        if ($scrollToTop != null) {
            if (scrollY >= 200) {
                a9.addClass($scrollToTop, activeClassName)
            } else {
                a9.removeClass($scrollToTop, activeClassName)
            }
        }
    });


};