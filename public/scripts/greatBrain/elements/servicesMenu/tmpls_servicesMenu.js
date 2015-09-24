(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.servicesMenuWrapper = function () {
        return {n: 'servicesMenuWrapper', c: 'service-menu-wrapper hidden'};
    };

    tmpls.servicesMenu = function (data) {

        var educationMenuItems = [],
            organizeMenuItems = [],

            educationBlock = [],
            organizeBlock = [];

        a9.each(data, function (item) {
            var menuItemClass = '',
                menuItem;
            if (item.special === true) {
                menuItemClass = ' special';
            }
            menuItem = {c: 'menu-item' + menuItemClass, C: {e: 'a', h: item.url, t: item.title}};

            if (item.type === 'education') {
                educationMenuItems.push(menuItem);
            } else if (item.type === 'organize') {
                organizeMenuItems.push(menuItem);
            }
        });

        return {
            c: 'service-menu', C: [
                {
                    c: 'triangle'
                },
                {
                    c:'close-button',n:'closeButton'
                },
                {
                    c: 'service-menu-content', C: [
                    tmpls.servicesMenuBlock(educationMenuItems, l10n('servicesMenu_edu', 'firstUpper')),
                    tmpls.servicesMenuBlock(organizeMenuItems, l10n('servicesMenu_org', 'firstUpper'),true)
                ]
                }
            ]
        }
    };

    tmpls.servicesMenuBlock = function (data, title, isLast) {
        var itemsBlockClassName='items-block';
        if(isLast===true){
            itemsBlockClassName+=' last';
        }
        return {c:itemsBlockClassName,C:[{c: 'title', t: title}, {c:'content', C: data}]}
    };

}(GB));