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
            menuItemClassName,
            linkContent,
            menuItemState;

        for (i = 0; i < menuData.length; i++) {
            menuItemState = menuData[i].state;
            menuItemClassName = menuItemState;

            if (menuData[i].popup) {
                menuItemClassName += ' popup-link'
            }

            if (menuItemState == 'active' || menuData[i].url === u) {
                linkContent = {
                    e: 'span',
                    H: menuData[i].title
                };
            } else {
                linkContent = {
                    e: 'a',
                    h: menuData[i].url,
                    H: menuData[i].title
                };
            }

            menuItem = {
                e: 'li', c: menuItemClassName, C: [
                    {c: 'arrow'},
                    linkContent,
                    {c: 'arrow'}
                ]
            };
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