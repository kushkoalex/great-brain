(function (gb) {
    gb.tmpls.dropdown = function (data) {
        var dropDownListItems = [],
            i,
            options = data.options,
            listItems = data.listItems,
            itemClassName,
            selectedText = '',
            dropDownListHeadContent = [];

        if (listItems.length > 0) {
            selectedText = listItems[0].text;
        }

        for (i = 0; i < listItems.length; i++) {
            itemClassName = 'item noselect';
            if (i == 0) {
                itemClassName += ' first';
            }
            if (i == listItems.length - 1) {
                itemClassName += ' last';
            }
            if (options) {
                if ((options.selectedIndex && options.selectedIndex === i) || (options.selectedValue && options.selectedValue == listItems[i].value)) {
                    itemClassName += ' selected';
                    selectedText = listItems[i].text;
                }
            }

            dropDownListItems.push({c: itemClassName, H: listItems[i].text, a: {value: listItems[i].value}})
        }

        if (options.hasSplitter === true) {
            dropDownListHeadContent.push({c: 'splitter'});
        }
        dropDownListHeadContent.push({c: 'text noselect', n: 'selectedText', H: selectedText});
        dropDownListHeadContent.push({c: 'triangle'});


        return [
            {
                c: 'drop-down-list-head',
                n: 'dropDownListHead',
                C: dropDownListHeadContent
            },
            {
                c: 'drop-down-list-items hidden', n: 'items', C: dropDownListItems
            }

        ];
    };

}(GB));


(function (a9, gb) {
    a9.dropdown = function ($parent, listItems, options) {
        var tp = gb.global.cnCt.tp,
            $body = document.body,
            build,
            $head,
            $items,
            $selectedText,
            eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
            eventOnPointerUp = a9.deviceInfo.eventOnPointerUp;

        build = tp('dropdown', {options: options, listItems: listItems}, $parent);
        $head = build.dropDownListHead;
        $items = build.items;
        $selectedText = build.selectedText;

        a9.addEvent($head, eventOnPointerEnd, showItems);
        a9.addEvent($body, eventOnPointerEnd, hideItems);
        a9.addEvent($items, eventOnPointerUp, selectItem);


        function showItems(e) {
            a9.removeClass($items, 'hidden');
            preventHideItems(e);
        }

        function hideItems() {
            a9.addClass($items, 'hidden');
        }

        function selectItem(e) {
            $selectedText.innerHTML = e.target.innerHTML;
        }

        function preventHideItems(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    }
})(A9, GB);