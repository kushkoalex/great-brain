(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.mainMenu = function () {
        var
            menuData = gb.settings.dataModels.mainMenu,
            menuItems = [],
            menuItem,
            i,
            controlsDescriptors = gb.settings.controlsDescriptors,
            isActiveMenuItem = false,
            isSelectedMenuItem = false;


        menuItem = {
            e: 'li', c: 'popup-link', C: {
                e: 'span', C: [{c: 'arrow'}, {
                    e: 'a',

                    H: menuData[0].title
                }, {c: 'arrow'}]
            }
        };
        menuItems.push(menuItem);

        for (i = 1; i < menuData.length; i++) {

            isSelectedMenuItem = (controlsDescriptors.site.activeMenuItemId && controlsDescriptors.site.activeMenuItemId == menuData[i].id) || menuData[i].selected;
            isActiveMenuItem = menuData[i].active;

            if (isActiveMenuItem) {
                if (menuData[i].hasArrow) {
                    menuItem = {
                        e: 'li', c: 'active', C: [
                            {c: 'arrow'},
                            {
                                e: 'a',
                                h: menuData[i].url,
                                H: menuData[i].title
                            },
                            {c: 'arrow'}
                        ]
                    };
                }
                else {
                    menuItem = {
                        e: 'li', c: 'active short', C: {
                            e: 'a',
                            h: menuData[i].url,
                            H: menuData[i].title
                        }
                    };
                }


            } else if (isSelectedMenuItem) {
                if (menuData[i].hasArrow) {
                    menuItem = {
                        e: 'li', C: [{c: 'arrow'}, {
                            e: 'span',
                            H: menuData[i].title
                        }, {c: 'arrow'}]
                    };
                } else {
                    menuItem = {
                        e: 'li', c: 'short', C: {
                            e: 'span',
                            H: menuData[i].title
                        }
                    };
                }


            }
            else {
                if (menuData[i].hasArrow) {
                    menuItem = {
                        e: 'li', C: {
                            e: 'span', C: [{c: 'arrow'}, {
                                e: 'a',
                                h: menuData[i].url,
                                H: menuData[i].title
                            }, {c: 'arrow'}]
                        }
                    };
                } else {
                    menuItem = {
                        e: 'li', c: 'short', C: {
                            e: 'span', C: {
                                e: 'a',
                                h: menuData[i].url,
                                H: menuData[i].title
                            }
                        }
                    };
                }
            }
            menuItems.push(menuItem);
        }


        return {
            c: 'main-menu', a: {id: 'mainMenu'},
            C: [
                {c: 'background-layer'},
                {
                    e: 'ul', C: [
                    menuItems
                ]
                }]
        }
    }


}(GB));